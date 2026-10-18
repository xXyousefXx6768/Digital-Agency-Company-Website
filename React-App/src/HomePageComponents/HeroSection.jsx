import React, {
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

import AbstractDesign from "./assets/Abstract Design.png";

function HeroSection() {
  const heroRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const audienceRef = useRef(null);
  const audienceItemsRef = useRef([]);
  const actionsRef = useRef(null);

  useLayoutEffect(() => {
  let split;
  let isActive = true;
  let tl;

  const ctx = gsap.context(() => {
    const startAnimation = () => {
      // يمنع تشغيل نسخة قديمة من الأنيميشن بعد cleanup
      if (
        !isActive ||
        !textRef.current ||
        !svgRef.current ||
        !audienceRef.current ||
        !actionsRef.current
      ) {
        return;
      }

      split = new window.SplitText(textRef.current, {
        type: "words",
      });

      gsap.set(split.words, {
        opacity: 0,
        y: 45,
      });

      gsap.set(svgRef.current, {
        scaleY: 0.08,
        opacity: 0,
        transformOrigin: "bottom center",
      });

      gsap.set(audienceRef.current, {
        opacity: 0,
        y: 24,
        filter: "blur(5px)",
      });

      gsap.set(audienceItemsRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(actionsRef.current, {
        opacity: 0,
        y: 20,
      });

      tl = gsap.timeline();

      tl.to(split.words, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.06,
        ease: "power3.out",
      });

      tl.to(
        audienceRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.7"
      );

      tl.to(
        audienceItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.45"
      );

      tl.to(
        actionsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );

      tl.to(
        svgRef.current,
        {
          scaleY: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
        },
        "-=1.5"
      );
    };

    document.fonts.ready.then(() => {
      if (isActive) startAnimation();
    });
  }, heroRef);

  return () => {
    isActive = false;
    tl?.kill();
    split?.revert();
    ctx.revert();
  };
}, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-dark-grid
        text-white
        flex
        items-center
        justify-center
        px-4
      "
    >
      {/* Abstract Background */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[80%]
          z-0
          overflow-hidden
          pointer-events-none
        "
      >
        <img
          ref={svgRef}
          src={AbstractDesign}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          text-center
          flex
          flex-col
          items-center
        "
      >
        {/* Heading */}
        <h1
          ref={textRef}
          className="
            max-w-5xl
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-[1.05]
            tracking-tight
          "
        >
          A Digital Product Studio
          <br />
          that will Work
        </h1>

        {/* Audience */}
        <div
          ref={audienceRef}
        className="
  mt-8
  w-fit
  max-w-full
  rounded-xl
  border
  border-white/[0.08]
  bg-[#1e1e1e]/70
  px-3
  py-3
  sm:px-4
  sm:py-3
  backdrop-blur-md
"
        >
          <div
          className="
  flex
  flex-wrap
  items-center
  justify-center
  gap-2
  md:gap-3
"
          >
            {/* FOR */}
            <span
              ref={(el) => {
                if (el) audienceItemsRef.current[0] = el;
              }}
              className="
  px-2
  text-xs
  sm:text-sm
  font-medium
  text-neutral-400
"
            >
              For
            </span>

            {/* Audience Options */}
            {[
              "Startups",
              "Enterprise Leaders",
              "Media & Publishers",
              "Social Good",
            ].map((item, index) => (
              <button
                key={item}
                ref={(el) => {
                  if (el) audienceItemsRef.current[index + 1] = el;
                }}
              className="
  inline-flex
  items-center
  justify-center
  rounded-lg
  border
  border-white/[0.08]
  bg-white/[0.035]
  px-2
  py-1
  sm:px-3
  sm:py-2
  text-xs
  sm:text-sm
  font-medium
  text-neutral-200
  whitespace-nowrap
  transition-colors
  duration-300
  hover:border-lime-400/30
  hover:bg-lime-400/[0.07]
  hover:text-lime-300
"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          ref={actionsRef}
          className="
            !mt-7
            !flex
            !items-center
            !justify-center
            !gap-3
            !md:gap-4
          "
        >
          {/* Our Works */}
          <button
            className="
              !rounded-xl
              !border
              !border-white/10
              !bg-neutral-900/90
              !px-8
              !py-3.5
              !text-sm
              !md:text-base
              !font-medium
              !text-white
              !transition-all
              !duration-300
              !hover:-translate-y-0.5
              !hover:border-white/20
              !hover:bg-neutral-800
            "
          >
            Our Works
          </button>

          {/* Contact */}
          <button
            className="
              !rounded-xl
              !bg-lime-400
              !px-8
              !py-3.5
              !text-sm
              !md:text-base
              !font-semibold
              !text-black
              !transition-all
              !duration-300
              !hover:-translate-y-0.5
              !hover:bg-lime-300
              !hover:shadow-[0_8px_35px_rgba(174,255,12,0.18)]
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
