import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useBoxAnimation = (boxRef, sectionRef, xValue) => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    gsap.to(boxRef.current, {
      x: xValue,
      filter: "blur(10px)", // 👈 هنا ضفنا الـ blur زي ما كنا عاملين
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "bottom bottom",
        pin: true,
        scrub: true,
      },
    });
  }, sectionRef);

  return () => ctx.revert();
};
