import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BannerSection({
  image,
  title,
  Desc,
  logo,
  btn,
  animation = "default",
  highlightText = "",
}) {
  const sectionRef = useRef(null);

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const accentRef = useRef(null);
  const scanRef = useRef(null);

  const signalRingRef = useRef(null);

  /*
   * Testimonials refs
   */

  const testimonialLineRef = useRef(null);
  const testimonialSweepRef = useRef(null);
  const testimonialGlowRef = useRef(null);
  const testimonialFrameRef = useRef(null);


const faqLineLeftRef = useRef(null);
const faqLineRightRef = useRef(null);
const faqSweepRef = useRef(null);
const faqGlowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {


          if (animation === "faq") {
  gsap.set(
    imageRef.current,
    {
      scale: 1.08,
      opacity: 0,
      filter: "blur(5px)",
    }
  );

  gsap.set(
    titleRef.current,
    {
      opacity: 0,

      y: 28,

      clipPath:
        "inset(0 0 100% 0)",
    }
  );

  gsap.set(
    descRef.current,
    {
      opacity: 0,

      y: 14,
    }
  );

  gsap.set(
    faqLineLeftRef.current,
    {
      scaleX: 0,

      transformOrigin:
        "right center",
    }
  );

  gsap.set(
    faqLineRightRef.current,
    {
      scaleX: 0,

      transformOrigin:
        "left center",
    }
  );

  gsap.set(
    faqSweepRef.current,
    {
      xPercent: -160,

      opacity: 0,
    }
  );

  gsap.set(
    faqGlowRef.current,
    {
      opacity: 0,

      scale: 0.65,
    }
  );

  const tl =
    gsap.timeline({
      scrollTrigger: {
        trigger:
          sectionRef.current,

        start:
          "top 86%",

        once: true,
      },
    });

  tl.to(
    imageRef.current,
    {
      opacity: 0.3,

      scale: 1,

      filter:
        "blur(0px)",

      duration: 1.15,

      ease: "power3.out",
    }
  )

    .to(
      faqGlowRef.current,

      {
        opacity: 0.09,

        scale: 1,

        duration: 1,

        ease:
          "power3.out",
      },

      "-=0.85"
    )

    .to(
      [
        faqLineLeftRef.current,
        faqLineRightRef.current,
      ],

      {
        scaleX: 1,

        duration: 0.85,

        ease:
          "expo.inOut",
      },

      "-=0.7"
    )

    .to(
      faqSweepRef.current,

      {
        xPercent: 170,

        opacity: 0.18,

        duration: 1.1,

        ease:
          "power2.inOut",
      },

      "-=0.68"
    )

    .to(
      titleRef.current,

      {
        opacity: 1,

        y: 0,

        clipPath:
          "inset(0 0 0% 0)",

        duration: 0.8,

        ease:
          "power4.out",
      },

      "-=0.7"
    )

    .to(
      descRef.current,

      {
        opacity: 1,

        y: 0,

        duration: 0.65,

        ease:
          "power3.out",
      },

      "-=0.42"
    )

    .to(
      faqSweepRef.current,

      {
        opacity: 0,

        duration: 0.3,
      },

      "-=0.15"
    );
}
          /*
           * =======================
           * SERVICES
           * =======================
           */

          if (animation === "services") {
            gsap.set(imageRef.current, {
              scale: 1.06,
              opacity: 0,
            });

            gsap.set(titleRef.current, {
              opacity: 0,
              y: 24,
              clipPath:
                "inset(0 0 100% 0)",
            });

            gsap.set(descRef.current, {
              opacity: 0,
              y: 16,
            });

            gsap.set(accentRef.current, {
              scaleX: 0,
              transformOrigin: "left center",
            });

            gsap.set(scanRef.current, {
              xPercent: -140,
              opacity: 0,
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
              },
            });

            tl.to(imageRef.current, {
              scale: 1,
              opacity: 0.3,
              duration: 1.1,
              ease: "power3.out",
            })

              .to(
                scanRef.current,
                {
                  xPercent: 140,
                  opacity: 1,
                  duration: 1.1,
                  ease: "power2.inOut",
                },
                "-=0.8"
              )

              .to(
                accentRef.current,
                {
                  scaleX: 1,
                  duration: 0.7,
                  ease: "power3.out",
                },
                "-=0.8"
              )

              .to(
                titleRef.current,
                {
                  opacity: 1,
                  y: 0,
                  clipPath:
                    "inset(0 0 0% 0)",
                  duration: 0.75,
                  ease: "power3.out",
                },
                "-=0.5"
              )

              .to(
                descRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: "power2.out",
                },
                "-=0.35"
              );
          }

          /*
           * =======================
           * WHY
           * =======================
           */

          if (animation === "why") {
            gsap.set(imageRef.current, {
              scale: 1.04,
              opacity: 0,
            });

            gsap.set(titleRef.current, {
              opacity: 0,
              y: 22,
            });

            gsap.set(descRef.current, {
              opacity: 0,
              y: 14,
            });

            /*
             * ring only.
             * مفيش core/dot في النص.
             */

            if (signalRingRef.current) {
              gsap.set(
                signalRingRef.current,
                {
                  scale: 0.5,
                  opacity: 0,
                }
              );
            }

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
              },
            });

            tl.to(imageRef.current, {
              scale: 1,
              opacity: 0.3,
              duration: 1.1,
              ease: "power3.out",
            });

            if (signalRingRef.current) {
              tl.to(
                signalRingRef.current,
                {
                  scale: 1.15,
                  opacity: 0.22,
                  duration: 0.9,
                  ease: "power3.out",
                },
                "-=0.7"
              );
            }

            tl.to(
              titleRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                ease: "power3.out",
              },
              "-=0.55"
            )

              .to(
                descRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  ease: "power2.out",
                },
                "-=0.4"
              );

            if (signalRingRef.current) {
              tl.to(
                signalRingRef.current,
                {
                  scale: 1.55,
                  opacity: 0,
                  duration: 1,
                  ease: "power2.out",
                },
                "-=0.4"
              );
            }
          }

          /*
           * =======================
           * TESTIMONIALS
           * =======================
           */

          if (animation === "testimonials") {
            /*
             * Background appears
             * from the center like a curtain.
             */

            gsap.set(imageRef.current, {
              opacity: 0,
              scale: 1.14,

              clipPath:
                "inset(0 48% 0 48%)",
            });

            /*
             * Main content
             */

            gsap.set(titleRef.current, {
              opacity: 0,
              y: 34,

              letterSpacing: "0.045em",

              clipPath:
                "inset(0 0 100% 0)",
            });

            gsap.set(descRef.current, {
              opacity: 0,
              y: 17,

              clipPath:
                "inset(0 0 100% 0)",
            });

            /*
             * line starts from center
             */

            gsap.set(
              testimonialLineRef.current,
              {
                scaleX: 0,
                transformOrigin:
                  "center center",
              }
            );

            /*
             * traveling light
             */

            gsap.set(
              testimonialSweepRef.current,
              {
                xPercent: -180,
                opacity: 0,
              }
            );

            gsap.set(
              testimonialGlowRef.current,
              {
                scale: 0.55,
                opacity: 0,
              }
            );

            gsap.set(
              testimonialFrameRef.current,
              {
                opacity: 0,
                scale: 0.985,
              }
            );

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,

                start: "top 82%",

                once: true,

                invalidateOnRefresh: true,
              },
            });

            /*
             * 1 - frame wakes up
             */

            tl.to(
              testimonialFrameRef.current,
              {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
              }
            );

            /*
             * 2 - background opens from center
             */

            tl.to(
              imageRef.current,
              {
                opacity: 0.34,
                scale: 1,

                clipPath:
                  "inset(0 0% 0 0%)",

                duration: 1.35,

                ease: "expo.out",
              },
              "-=0.7"
            );

            /*
             * 3 - ambient glow
             */

            tl.to(
              testimonialGlowRef.current,
              {
                opacity: 0.13,
                scale: 1,

                duration: 1.2,

                ease: "power3.out",
              },
              "-=1.05"
            );

            /*
             * 4 - line expands from center
             */

            tl.to(
              testimonialLineRef.current,
              {
                scaleX: 1,

                duration: 0.9,

                ease: "expo.inOut",
              },
              "-=0.85"
            );

            /*
             * 5 - light sweeps through the banner
             */

            tl.to(
              testimonialSweepRef.current,
              {
                xPercent: 180,
                opacity: 0.25,

                duration: 1.25,

                ease: "power2.inOut",
              },
              "-=0.8"
            );

            /*
             * 6 - title reveal
             */

            tl.to(
              titleRef.current,
              {
                opacity: 1,
                y: 0,

                letterSpacing: "0em",

                clipPath:
                  "inset(0 0 0% 0)",

                duration: 0.95,

                ease: "power4.out",
              },
              "-=0.8"
            );

            /*
             * 7 - description
             */

            tl.to(
              descRef.current,
              {
                opacity: 1,
                y: 0,

                clipPath:
                  "inset(0 0 0% 0)",

                duration: 0.8,

                ease: "power3.out",
              },
              "-=0.6"
            );

            /*
             * 8 - sweep disappears
             */

            tl.to(
              testimonialSweepRef.current,
              {
                opacity: 0,

                duration: 0.45,
              },
              "-=0.25"
            );

            /*
             * Very slow background drift
             */

            gsap.to(imageRef.current, {
              yPercent: -7,

              ease: "none",

              scrollTrigger: {
                trigger: sectionRef.current,

                start: "top bottom",
                end: "bottom top",

                scrub: 1.8,
              },
            });
          }
        }
      );

      /*
       * Reduced motion
       */

      mm.add(
        "(prefers-reduced-motion: reduce)",
        () => {
          gsap.set(
  [
    imageRef.current,
    titleRef.current,
    descRef.current,

    accentRef.current,
    scanRef.current,

    signalRingRef.current,

    testimonialLineRef.current,
    testimonialSweepRef.current,
    testimonialGlowRef.current,
    testimonialFrameRef.current,

    faqLineLeftRef.current,
    faqLineRightRef.current,
    faqSweepRef.current,
    faqGlowRef.current,
  ].filter(Boolean),
  {
    clearProps: "all",
  }
);
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [animation]);

  /*
   * Optional highlighted word.
   */

  const renderTitle = () => {
    if (
      !highlightText ||
      !title.includes(highlightText)
    ) {
      return title;
    }

    const [before, after] =
      title.split(highlightText);

    return (
      <>
        {before}

        <span className="text-[#B8FF5A]">
          {highlightText}
        </span>

        {after}
      </>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden

        bg-black

        text-white

        py-16
        md:py-20
      "
    >
      {/* Background */}

      <div
        ref={testimonialFrameRef}
        className="
          absolute
          inset-0

          pointer-events-none

          z-0
        "
      >
        <div
          className="
            absolute
            inset-0

            bg-[#d7efaf]

            opacity-20

            mix-blend-hard-light
          "
        >
          <img
            ref={imageRef}
            src={image}
            loading="lazy"
            alt=""
            className="
              w-full
              h-full

              object-cover

              opacity-30
            "
          />
        </div>
      </div>

      {/* ====================
          SERVICES DECORATION
      ===================== */}

      {animation === "services" && (
        <>
          <div
            ref={accentRef}
            className="
              absolute
              left-0
              top-0

              w-full
              h-px

              bg-lime-400/70

              origin-left

              z-[2]
            "
          />

          <div
            ref={scanRef}
            className="
              absolute
              top-0
              left-0

              w-[28%]
              h-full

              bg-gradient-to-r
              from-transparent
              via-lime-300/10
              to-transparent

              blur-xl

              pointer-events-none

              z-[1]
            "
          />
        </>
      )}

      {/* ====================
          WHY DECORATION

          NO GREEN CENTER DOT
      ===================== */}

      {animation === "why" && (
        <div
          ref={signalRingRef}
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-24
            h-24

            rounded-full

            border
            border-lime-300/10

            pointer-events-none

            z-[1]
          "
        />
      )}

      {/* ====================
          TESTIMONIAL BANNER
      ===================== */}

      {animation === "testimonials" && (
        <>
          {/* green atmosphere */}

          <div
            ref={testimonialGlowRef}
            className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-[50vw]
              h-[220px]

              rounded-full

              bg-[#9EFF00]

              blur-[130px]

              opacity-0

              pointer-events-none

              z-[1]
            "
          />

          {/* center expanding line */}

          <div
            ref={testimonialLineRef}
            className="
              absolute

              left-[8%]
              right-[8%]

              bottom-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-[#AFFF35]/45
              to-transparent

              z-[3]
            "
          />

          {/* sweep */}

          <div
            ref={testimonialSweepRef}
            className="
              absolute

              top-[-30%]
              left-[20%]

              w-[17%]
              h-[170%]

              rotate-[14deg]

              bg-gradient-to-r
              from-transparent
              via-[#C6FF79]/30
              to-transparent

              blur-2xl

              pointer-events-none

              z-[2]
            "
          />

          {/* subtle side lines */}

          <div
            className="
              absolute
              left-[14%]
              top-0

              w-px
              h-full

              bg-gradient-to-b
              from-transparent
              via-white/[0.055]
              to-transparent

              pointer-events-none
            "
          />

          <div
            className="
              absolute
              right-[14%]
              top-0

              w-px
              h-full

              bg-gradient-to-b
              from-transparent
              via-white/[0.055]
              to-transparent

              pointer-events-none
            "
          />
        </>
      )}
       {animation === "faq" && (
  <>
    {/* CENTER GLOW */}

    <div
      ref={faqGlowRef}
      className="
        absolute

        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[48vw]
        h-[190px]

        rounded-full

        bg-[#9EFF00]

        blur-[120px]

        opacity-0

        pointer-events-none

        z-[1]
      "
    />

    {/* LEFT LINE */}

    <div
      ref={faqLineLeftRef}
      className="
        absolute

        top-1/2

        left-[7%]
        right-[52%]

        h-px

        bg-gradient-to-r

        from-transparent

        to-[#9EFF00]/25

        pointer-events-none

        z-[2]
      "
    />

    {/* RIGHT LINE */}

    <div
      ref={faqLineRightRef}
      className="
        absolute

        top-1/2

        left-[52%]
        right-[7%]

        h-px

        bg-gradient-to-r

        from-[#9EFF00]/25

        to-transparent

        pointer-events-none

        z-[2]
      "
    />

    {/* LIGHT SWEEP */}

    <div
      ref={faqSweepRef}
      className="
        absolute

        top-[-30%]
        left-[20%]

        w-[16%]
        h-[170%]

        rotate-[14deg]

        bg-gradient-to-r

        from-transparent

        via-[#C4FF73]/20

        to-transparent

        blur-2xl

        pointer-events-none

        z-[2]
      "
    />

    {/* VERY SUBTLE TOP/BOTTOM DETAIL */}

    <div
      className="
        absolute

        left-[12%]
        right-[12%]

        bottom-0

        h-px

        bg-gradient-to-r

        from-transparent

        via-white/[0.06]

        to-transparent

        pointer-events-none
      "
    />
  </>
)}
      {/* ====================
          CONTENT
      ===================== */}

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-7

          text-center
        "
      >
        <h2
          ref={titleRef}
          className="
            text-3xl
            md:text-4xl

            font-bold

            mb-5
          "
        >
          {renderTitle()}
        </h2>

        <p
          ref={descRef}
          className="
            text-gray-300

            max-w-2xl

            mx-auto

            mb-0

            leading-relaxed
          "
        >
          {Desc}
        </p>
      </div>
    </div>
  );
}

export default BannerSection;
