import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './styles.css';

// ScrollTriggerプラグインの登録
gsap.registerPlugin(ScrollTrigger);

// Lenisの初期化
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

// アニメーションフレームでLenisを更新
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAPアニメーション
ScrollTrigger.create({
  trigger: '.event1',
  pin: '.event1 .pinSection',
  markers: true,
  start: 'top top',
  end: 'bottom top',
});

ScrollTrigger.create({
  trigger: '.event1',
  pin: '.event2 .pinSection',
  markers: true,
  start: 'top top',
  end: 'bottom top-=50%',
});

ScrollTrigger.create({
  trigger: '.event2',
  pin: '.event3 .pinSection',
  markers: true,
  start: 'top top',
  end: 'bottom top-=100%',
});

ScrollTrigger.create({
  trigger: '.event3',
  pin: '.event4 .pinSection',
  markers: true,
  start: 'top top',
  end: 'bottom top-=100%',
});
