import './base.scss';
import './style2.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
let skewSetter = gsap.quickTo(".content", "skewY"), // fast
  clamp = gsap.utils.clamp(-20, 20); //
// ScrollSmootherの設定
const smoother = ScrollSmoother.create({
  wrapper: '.smooth-wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
  onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
  onStop: () => skewSetter(0),
});