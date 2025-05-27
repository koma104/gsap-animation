import "./base.scss";
import "./style4.scss";

import { gsap } from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(Physics2DPlugin);

const ball = document.getElementById("ball");
document.addEventListener("click", () => {
      gsap.set(ball, { x: 0, y: 0 }); 
      gsap.to(ball, {
        duration: 2,
        physics2D: {
          velocity: 400,    
          angle: -45,       
          gravity: 500,     
          friction: 0.05     
        }
      });
    });