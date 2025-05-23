import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(Draggable,ScrambleTextPlugin,ScrollTrigger,SplitText,Flip,MorphSVGPlugin);

// 文字・単語アニメーション用
export function playSplitTextAnimation(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  if (target._split) target._split.revert();
  target._split = new SplitText(target, {
    type: "lines,words,chars",
    linesClass: "line",
    wordsClass: "word",
    charsClass: "char",
    tag: "span",
  });

  gsap.to(target.querySelectorAll(".char"), {
    opacity: 1,
    y: 0,
    stagger: 0.02,
    duration: 0.5,
    ease: "power2.out",
  });

  gsap.to(target.querySelectorAll(".word"), {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.5,
  });
}

// ScrambleTextアニメーション用
export function playScrambleTextAnimation(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  gsap.to(target, {
    duration: 2,
    scrambleText: "こんにちは、世界！",
  });
}

// ドラッグアニメーション用
export function playDraggableAnimation(targetSelector) {
  Draggable.create(".draggable-element", {
    type: "x,y",
    bounds: "body",
    inertia: true,
    onDrag() {
      // ドラッグ中に要素のサイズを変更（よりスムーズな変化のために）
      gsap.to(this.target, {
        scale: 1.5,
        duration: 0.5,
      });
    },
    onRelease() {
      // ドラッグ終了後、元のサイズに戻す（よりスムーズな戻り方）
      gsap.to(this.target, {
        scale: 1,
        duration: 0.5,
        // ease: "elastic.out(1, 0.5)",
      });
    },
  });
}

// グリッドアニメーション用
export function playGridAnimation(targetSelector) {
  // 毎回最新の要素を取得
  const gridItems = document.querySelectorAll(".grid-item");

  // 1. 最初の状態を取得
  const state = Flip.getState(gridItems);

  // 2. グリッドのアイテムを並び替え（最後のアイテムを先頭に移動）
  const parent = gridItems[0].parentNode;
  parent.insertBefore(gridItems[gridItems.length - 1], gridItems[0]);

  // 3. 最後の状態を設定
  Flip.from(state, {
    duration: 0.8,
    ease: "power2.inOut",
    absolute: true,
  });
}

// SVGアニメーション用
export function playMorphSVGAnimation(targetSelector) {
  // 形状データ
  const shapes = [
    // 丸
    "M100,30 a70,70 0 1,0 0.01,0",
    // ハート
    "M100,160 C20,100 20,40 100,70 C180,40 180,100 100,160 Z",
    // 星
    "M100,30 L117,70 L160,75 L130,105 L140,150 L100,130 L60,150 L70,105 L40,75 L83,70 Z"
  ];
  const svg = document.querySelector(targetSelector);
  if (!svg) return;
  const mainShape = svg.querySelector('#mainShape');
  if (!mainShape) return;

  // indexをsvg要素のdatasetで管理
  let index = Number(svg.dataset.morphIndex || 0);
  index = (index + 1) % shapes.length;
  svg.dataset.morphIndex = index;

  gsap.to(mainShape, {
    duration: 1.2,
    morphSVG: shapes[index],
    ease: "elastic.out(1, 0.5)",
    scale: 1.2,
    rotate: "+=60",
    transformOrigin: "50% 50%",
  });
}