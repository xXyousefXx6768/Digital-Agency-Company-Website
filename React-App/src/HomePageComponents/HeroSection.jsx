import React  from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import AbstractDesign from './assets/Abstract Design.png';

function HeroSection() {
   const svgRef = useRef();
  const textRef = useRef(null);



   useEffect(() => {
  let split;

  document.fonts.ready.then(() => {
    // اعمل SplitText بعد ما الفونت يجهز
    split = new window.SplitText(textRef.current, { type: "words" });

    gsap.from(split.words, {
      duration: 3,
      opacity: 0,
      y: 90,
      stagger: 0.1,
      ease: "power4.out",
    });

    gsap.fromTo(
      svgRef.current,
      { scaleY: 0.1, transformOrigin: "bottom center" },
      {
        scaleY: 1,
        duration: 3,
        ease: "power2.out",
      }
    );
  });

  return () => {
    if (split) split.revert();
  };
}, []);

  return (
    <section className=" relative bg-dark-grid min-h-screen w-full text-white flex items-center justify-center !px-4">
      <div className="absolute   bottom-0 w-ful h-[80%] z-0 overflow-hidden pointer-events-none">
    <img src={AbstractDesign} ref={svgRef} alt="" className="w-full h-full  object-cover" />
         </div>
      <div className=" relative text-center">
        <h1 ref={textRef} className="text-4xl overflow-hidden inline-block z-10 md:text-6xl font-bold">
          A Digital Product Studio<br />that will Work
        </h1>

        {/* Buttons group */}
        <div className="!mt-6 flex flex-wrap justify-center items-center gap-2  !rounded-lg !px-4 !py-2 backdrop-blur-sm">
          <span className="text-white text-center z-10 relative !px-2">For</span>
          <button className="bg-neutral-900 hover:bg-neutral-800 transition text-white !py-2 !px-4 !rounded-lg">
            Startups
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 transition text-white !py-2 !px-4 !rounded-lg">
            Enterprise leaders
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 transition text-white !py-2 !px-4 !rounded-lg">
            Media & Publishers
          </button>
          <span className="text-white px-2">and</span>
          <button className="bg-neutral-900 hover:bg-neutral-800 transition text-white !py-2 !px-4 !rounded-lg">
            Social Good
          </button>
        </div>

        {/* Action buttons */}
        <div className="!mt-10 flex justify-center gap-4">
          <button className="bg-neutral-900 text-white !py-2 !px-6 !rounded-lg hover:bg-neutral-800 transition">
            Our Works
          </button>
          <button className="bg-lime-400 text-black !py-2 !px-6 rounded-lg hover:bg-lime-300 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
