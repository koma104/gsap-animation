import './base.scss';
import './style3.scss';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to("#ball", {
  scrollTrigger: {
    trigger: "#wrapper",
    start: "top 50%",
    end: "bottom 130%",
    scrub: true,
  },
  motionPath: {
    path: "#twistPath",
    align: "#twistPath",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
});
