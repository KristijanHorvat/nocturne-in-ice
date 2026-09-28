/* Nocturne in Ice: all sound is generated live with the Web Audio API. No audio files. */
window.Sound = (function () {
  'use strict';
  var ctx = null, master, music, sfx, verb, timer = null, nextTime = 0, step = 0, playing = false, sfxOn = true, noiseBuf = null;
  var BEAT = 60 / 58 / 2; /* one quaver of a slow 12/8 nocturne */
  var mtof = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };

  function impulse(sec) {
    var len = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (var c = 0; c < 2; c++) { var d = b.getChannelData(c); for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    return b;
  }
  function init() {
    if (ctx) return true;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try { ctx = new AC(); } catch (e) { return false; }
    master = ctx.createGain(); master.gain.value = .85; master.connect(ctx.destination);
    verb = ctx.createConvolver(); verb.buffer = impulse(2.8); var wet = ctx.createGain(); wet.gain.value = .32; verb.connect(wet); wet.connect(master);
    music = ctx.createGain(); music.gain.value = 0; music.connect(master); music.connect(verb);
    sfx = ctx.createGain(); sfx.gain.value = .6; sfx.connect(master); sfx.connect(verb);
    return true;
  }
  function resume() { if (ctx && ctx.state === 'suspended') ctx.resume(); }
  function noise() {
    if (noiseBuf) return noiseBuf;
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }
  /* A soft piano-like note: two partials with a fast attack and long decay. */
  function piano(freq, t, dur, vel, dest) {
    var o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), o3 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o1.type = 'triangle'; o2.type = 'sine'; o3.type = 'sine';
    o1.frequency.value = freq; o2.frequency.value = freq * 2.001; o3.frequency.value = freq * 3.003;
    var g2 = ctx.createGain(), g3 = ctx.createGain(); g2.gain.value = .35; g3.gain.value = .08;
    f.type = 'lowpass'; f.frequency.setValueAtTime(Math.min(5200, freq * 7), t); f.frequency.exponentialRampToValueAtTime(Math.max(300, freq * 1.6), t + dur);
    o1.connect(g); o2.connect(g2); g2.connect(g); o3.connect(g3); g3.connect(g); g.connect(f); f.connect(dest || music);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + .008);
    g.gain.exponentialRampToValueAtTime(vel * .3, t + .4); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    [o1, o2, o3].forEach(function (o) { o.start(t); o.stop(t + dur + .05); });
  }
  function hiss(t, vel, dest, dur, freq, q) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noise(); f.type = 'bandpass'; f.frequency.value = freq || 3000; f.Q.value = q || .8;
    s.connect(f); f.connect(g); g.connect(dest || sfx); dur = dur || .12;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.start(t, Math.random() * .5); s.stop(t + dur + .02);
  }
  function tone(freq, t, dur, vel, type, dest) {
    var o = ctx.createOscillator(), g = ctx.createGain(); o.type = type || 'sine'; o.frequency.value = freq;
    o.connect(g); g.connect(dest || sfx);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.start(t); o.stop(t + dur + .02);
  }

  /* E minor nocturne: 8 bars of 12/8, arpeggiated left hand, a slow melody on top, and the rails underneath. */
  var BASS = [[40, 47, 52, 55, 59, 55], [45, 52, 57, 60, 64, 60], [47, 54, 59, 63, 66, 63], [40, 47, 52, 55, 59, 55],
    [36, 43, 48, 52, 55, 52], [45, 52, 57, 60, 64, 60], [42, 49, 54, 57, 60, 57], [47, 54, 59, 63, 66, 63]];
  var MEL = [[71, 0, 3], [72, 3, 1], [71, 4, 2], [69, 6, 3], [67, 9, 3],
    [72, 12, 3], [76, 15, 2], [74, 17, 1], [72, 18, 6],
    [71, 24, 4], [75, 28, 2], [78, 30, 3], [76, 33, 3],
    [71, 36, 6], [67, 42, 3], [66, 45, 3],
    [64, 48, 3], [67, 51, 2], [72, 53, 1], [71, 54, 6],
    [69, 60, 3], [72, 63, 3], [76, 66, 6],
    [74, 72, 3], [72, 75, 2], [71, 77, 1], [69, 78, 6],
    [71, 84, 4], [75, 88, 2], [71, 90, 6]];
  function schedule() {
    while (nextTime < ctx.currentTime + .5) {
      var s = step % 96, bar = Math.floor(s / 12), q = s % 12, arp = BASS[bar];
      piano(mtof(arp[q % 6] - (q < 6 ? 0 : 0)), nextTime, BEAT * 5, q % 6 === 0 ? .05 : .03);
      MEL.forEach(function (m) { if (m[1] === s) piano(mtof(m[0]), nextTime + .01, BEAT * m[2] * 1.6 + .6, .075); });
      if (q % 3 === 0) hiss(nextTime, q % 6 === 0 ? .03 : .018, music, .06, 900, 1.2);
      if (q === 1 || q === 7) hiss(nextTime + BEAT * .5, .014, music, .05, 1400, 1.2);
      nextTime += BEAT; step++;
    }
  }
  function fx(fn) { if (!sfxOn || !init()) return; resume(); try { fn(ctx.currentTime); } catch (e) { /* ignore */ } }
  function thud(t, v) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(48, t + .22);
    g.gain.setValueAtTime(v || .5, t); g.gain.exponentialRampToValueAtTime(.0001, t + .3);
    o.connect(g); g.connect(sfx); o.start(t); o.stop(t + .35); hiss(t, .18, sfx, .08, 900);
  }

  return {
    unlock: function () { if (init()) resume(); },
    musicOn: function () {
      if (!init()) return; resume(); if (playing) return; playing = true;
      music.gain.cancelScheduledValues(ctx.currentTime); music.gain.setTargetAtTime(.6, ctx.currentTime, .9);
      nextTime = ctx.currentTime + .1; clearInterval(timer); timer = setInterval(schedule, 120);
    },
    musicOff: function () {
      if (!ctx || !playing) return; playing = false;
      music.gain.setTargetAtTime(0, ctx.currentTime, .35);
      setTimeout(function () { if (!playing) { clearInterval(timer); timer = null; } }, 1600);
    },
    setSfx: function (v) { sfxOn = !!v; },
    flip: function () { fx(function (t) { hiss(t, .22, sfx, .09, 3800); hiss(t + .05, .12, sfx, .1, 2400); }); },
    deal: function (n) { fx(function (t) { for (var i = 0; i < (n || 1); i++) hiss(t + i * .08, .2, sfx, .08, 2800 + (i % 3) * 700); }); },
    click: function () { fx(function (t) { tone(1500, t, .03, .05, 'square'); }); },
    tick: function () { fx(function (t) { tone(2400, t, .02, .06, 'square'); hiss(t, .06, sfx, .02, 6000); }); },
    snap: function () { fx(function (t) { hiss(t, .3, sfx, .04, 2000, 2); tone(900, t, .06, .08, 'triangle'); }); },
    tear: function () { fx(function (t) { hiss(t, .2, sfx, .18, 1800, .6); }); },
    chime: function () { fx(function (t) { [64, 67, 71, 76, 79].forEach(function (m, i) { piano(mtof(m + 12), t + i * .1, 2, .1, sfx); }); }); },
    wrong: function () { fx(function (t) { [0, .15].forEach(function (d) { tone(d ? 98 : 110, t + d, .14, .12, 'sawtooth'); }); }); },
    clunk: function () { fx(function (t) { for (var i = 0; i < 3; i++) hiss(t + i * .07, .25, sfx, .03, 2600); thud(t + .3, .45); }); },
    telegraph: function () {
      fx(function (t) {
        var code = '-.-. --.-   -.-. --.-   ... - --- .--.', x = t;
        for (var i = 0; i < code.length; i++) {
          var c = code[i];
          if (c === '.') { tone(820, x, .07, .07, 'sine'); x += .13; } else if (c === '-') { tone(820, x, .2, .07, 'sine'); x += .26; } else x += .14;
        }
      });
    },
    stamp: function () { fx(function (t) { thud(t, .6); }); },
    whistle: function () {
      fx(function (t) {
        [0, 1].forEach(function (k) {
          var o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter(), s = t + k * .9, d = k ? 1.6 : .7;
          o.type = 'sawtooth'; o2.type = 'sawtooth'; o.frequency.value = 523; o2.frequency.value = 659; f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 3;
          o.connect(f); o2.connect(f); f.connect(g); g.connect(sfx);
          g.gain.setValueAtTime(.0001, s); g.gain.exponentialRampToValueAtTime(.09, s + .12); g.gain.setValueAtTime(.09, s + d - .2); g.gain.exponentialRampToValueAtTime(.0001, s + d);
          o.start(s); o2.start(s); o.stop(s + d + .05); o2.stop(s + d + .05); hiss(s, .05, sfx, d, 2500, .5);
        });
      });
    },
    rails: function (sec) {
      fx(function (t) { for (var i = 0; i < sec * 2.2; i++) { var x = t + i * .45; hiss(x, .12, sfx, .05, 700, 1.5); hiss(x + .12, .09, sfx, .05, 900, 1.5); } });
    }
  };
})();
