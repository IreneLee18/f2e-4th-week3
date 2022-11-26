import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
function GSAP(className, text) {
  gsap.to(className, {
    text: text,
    duration: 10,
    ease: "none",
  });
}

export default GSAP;
