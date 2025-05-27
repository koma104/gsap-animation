import './base.scss';
import './style1.scss';
import {
  playSplitTextAnimation,
  playScrambleTextAnimation,
  playDraggableAnimation,
  playGridAnimation,
  playMorphSVGAnimation,

} from './animation.js';

// 初期アニメーションの実行
playSplitTextAnimation('#split1');
playScrambleTextAnimation('#split2 .title');
playDraggableAnimation('.draggable-element');
playGridAnimation('#grid');
playMorphSVGAnimation('#morphBtn');
// ボタンクリックイベントの設定
const btn1 = document.querySelector('button[data-target="#split1"]');
if (btn1) {
  btn1.addEventListener("click", function() {
    playSplitTextAnimation('#split1');
  });
}
const btn2 = document.querySelector('button[data-target="#split2"]');
if (btn2) {
  btn2.addEventListener("click", function() {
    playScrambleTextAnimation('#split2 .title');
  });
}
const btn3 = document.querySelector('button[data-target="#grid"]');
if (btn3) {
  btn3.addEventListener("click", function() {
    playGridAnimation('#grid');
  });
}
const btn4 = document.querySelector('button[data-target="#morphBtn"]');
if (btn4) {
  btn4.addEventListener("click", function() {
    playMorphSVGAnimation('#morphBtn');
  });
}