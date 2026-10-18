import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BannerSection from "../Sections/BannerSection";
import continerBg from "../HomePageComponents/assets/Container.png";

import Profile from "../HomePageComponents/assets/Profile.png";
import Profile1 from "../HomePageComponents/assets/Profile1.png";
import Profile2 from "../HomePageComponents/assets/Profile2.png";
import Profile3 from "../HomePageComponents/assets/Profile3.png";
import Profile4 from "../HomePageComponents/assets/Profile4.png";
import Profile5 from "../HomePageComponents/assets/Profile5.png";

gsap.registerPlugin(ScrollTrigger);

function TestimonialsSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const ambientRef = useRef(null);

  const progressNavRef =
    useRef(null);

  const hintRef = useRef(null);

  const cardsRef = useRef([]);

  const progressRefs =
    useRef([]);

  const testimonials = [
    {
      name: "John Smith",

      title:
        "CEO of Chic Boutique",

      text:
        "SquareUp has been instrumental in transforming our online presence. Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn’t be happier.",

      image: Profile,
    },

    {
      name: "Sarah Johnson",

      title:
        "Founder of HungryBites",

      text:
        "Working with SquareUp was a breeze. They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.",

      image: Profile1,
    },

    {
      name: "Mark Thompson",

      title:
        "CEO of EventMasters",

      text:
        "SquareUp developed a comprehensive booking and reservation system for our event management company. Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project.",

      image: Profile2,
    },

    {
      name: "Laura Adams",

      title:
        "COO of ProTech Solutions",

      text:
        "ProTech Solutions turned to SquareUp to automate our workflow. They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors.",

      image: Profile3,
    },

    {
      name:
        "Michael Anderson",

      title:
        "Founder of Dream Homes Realty",

      text:
        "SquareUp designed and developed a captivating web portal for showcasing our real estate listings and creating a smooth experience for our customers.",

      image: Profile4,
    },

    {
      name: "Emily Turner",

      title:
        "CEO of FitLife Tracker",

      text:
        "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans. SquareUp delivered an experience that feels simple, fast, and genuinely enjoyable to use.",

      image: Profile5,
    },
  ];

  /* =====================================
     PROGRESS
  ====================================== */

  const updateProgress = (
    exactIndex
  ) => {
    progressRefs.current.forEach(
      (bar, index) => {
        if (!bar) return;

        const progress =
          Math.max(
            0,

            Math.min(
              1,

              exactIndex -
                index
            )
          );

        gsap.set(bar, {
          scaleX: progress,

          transformOrigin:
            "left center",
        });
      }
    );
  };

  useLayoutEffect(() => {
    let resizeTimer;

    let masterTimeline;
    let masterTrigger;

    let lastWidth =
      window.innerWidth;

    const ctx = gsap.context(
      () => {
        const cards =
          cardsRef.current.filter(
            Boolean
          );

        if (!cards.length)
          return;

        const surfaces =
          cards.map((card) =>
            card.querySelector(
              ".testimonial-surface"
            )
          );

        /* ==============================
           RESPONSIVE VALUES ONLY

           نفس الـanimation في كل الأحجام
        =============================== */

        const getConfig = () => {
          const width =
            window.innerWidth;

          /*
           * Desktop
           */
          if (width >= 1024) {
            return {
              distance: Math.min(
                width * 0.47,
                620
              ),

              sideScale: 0.77,

              sideOpacity: 0.23,

              secondScale: 0.65,

              rotation: 9,

              secondRotation: 7,

              scrollDistance: 470,
            };
          }

          /*
           * Tablet
           */
          if (width >= 768) {
            return {
              distance: Math.min(
                width * 0.62,
                520
              ),

              sideScale: 0.79,

              sideOpacity: 0.18,

              secondScale: 0.67,

              rotation: 7,

              secondRotation: 5,

              scrollDistance: 410,
            };
          }

          /*
           * Mobile
           */
          return {
            distance:
              width * 0.9,

            sideScale: 0.82,

            sideOpacity: 0.12,

            secondScale: 0.7,

            rotation: 4,

            secondRotation: 3,

            scrollDistance: 340,
          };
        };

        /* ==============================
           CARD STATE
        =============================== */

        const getState = (
          index,
          activeIndex
        ) => {
          const config =
            getConfig();

          const mobile =
            window.innerWidth <
            768;

          const offset =
            index -
            activeIndex;

          /*
           * Active
           */
          if (offset === 0) {
            return {
              x: 0,

              y: 0,

              scale: 1,

              rotationY: 0,

              rotationZ: 0,

              opacity: 1,

              blur: 0,

              zIndex: 30,
            };
          }

          /*
           * Neighbour
           */
          if (
            Math.abs(
              offset
            ) === 1
          ) {
            return {
              x:
                offset *
                config.distance,

              y:
                mobile
                  ? 6
                  : 14,

              scale:
                config.sideScale,

              rotationY:
                offset *
                -config.rotation,

              rotationZ:
                offset *
                (mobile
                  ? 0.2
                  : 0.5),

              opacity:
                config.sideOpacity,

              blur:
                mobile
                  ? 3
                  : 2,

              zIndex: 15,
            };
          }

          /*
           * Second neighbour
           */
          if (
            Math.abs(
              offset
            ) === 2
          ) {
            return {
              x:
                offset *
                config.distance *
                0.92,

              y:
                mobile
                  ? 15
                  : 28,

              scale:
                config.secondScale,

              rotationY:
                offset *
                -config.secondRotation,

              rotationZ:
                offset *
                0.3,

              opacity:
                mobile
                  ? 0
                  : 0.045,

              blur: 5,

              zIndex: 5,
            };
          }

          /*
           * Outside
           */
          return {
            x:
              offset > 0
                ? window.innerWidth *
                  1.25
                : -window.innerWidth *
                  1.25,

            y: 35,

            scale: 0.56,

            rotationY:
              offset > 0
                ? -14
                : 14,

            rotationZ: 0,

            opacity: 0,

            blur: 8,

            zIndex: 0,
          };
        };

        /* ==============================
           BASE STATE
        =============================== */

        const setBaseState =
          () => {
            cards.forEach(
              (
                card,
                index
              ) => {
                const state =
                  getState(
                    index,
                    0
                  );

                gsap.set(
                  card,
                  {
                    xPercent:
                      -50,

                    yPercent:
                      -50,

                    x:
                      state.x,

                    y:
                      state.y,

                    scale:
                      state.scale,

                    rotationY:
                      state.rotationY,

                    rotationZ:
                      state.rotationZ,

                    opacity:
                      state.opacity,

                    filter:
                      `blur(${state.blur}px)`,

                    zIndex:
                      state.zIndex,

                    pointerEvents:
                      index ===
                      0
                        ? "auto"
                        : "none",

                    transformOrigin:
                      "center center",
                  }
                );

                const shine =
                  card.querySelector(
                    ".testimonial-shine"
                  );

                gsap.set(
                  shine,
                  {
                    xPercent:
                      -160,

                    opacity: 0,
                  }
                );
              }
            );
          };

        setBaseState();

        /* ==============================
           ENTRANCE
        =============================== */

        gsap.set(
          ambientRef.current,
          {
            opacity: 0,

            scale: 1.04,
          }
        );

        gsap.set(
          progressNavRef.current,
          {
            opacity: 0,

            y: 12,
          }
        );

        if (
          hintRef.current
        ) {
          gsap.set(
            hintRef.current,
            {
              opacity: 0,

              x: 8,
            }
          );
        }

        /*
         * Animate surface only.
         * مش الكارت نفسه.
         */
        gsap.set(
          surfaces,
          {
            clipPath:
              "inset(0 0 100% 0)",
          }
        );

        const entrance =
          gsap.timeline({
            scrollTrigger: {
              trigger:
                stageRef.current,

              start:
                "top 88%",

              once: true,
            },
          });

        entrance
          .to(
            ambientRef.current,

            {
              opacity: 1,

              scale: 1,

              duration: 0.9,

              ease:
                "power3.out",
            }
          )

          .to(
            surfaces,

            {
              clipPath:
                "inset(0 0 0% 0)",

              duration: 0.8,

              stagger: 0.035,

              ease:
                "power4.out",
            },

            "-=0.65"
          )

          .to(
            progressNavRef.current,

            {
              opacity: 1,

              y: 0,

              duration: 0.5,

              ease:
                "power3.out",
            },

            "-=0.4"
          );

        if (
          hintRef.current
        ) {
          entrance.to(
            hintRef.current,

            {
              opacity: 1,

              x: 0,

              duration: 0.45,

              ease:
                "power3.out",
            },

            "-=0.35"
          );
        }

        entrance.set(
          surfaces,

          {
            clearProps:
              "clipPath",
          }
        );

        /* ==============================
           MASTER TIMELINE

           GSAP PIN — ALL SCREENS
        =============================== */

        masterTimeline =
          gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              id:
                "squareup-testimonials",

              trigger:
                stageRef.current,

              /*
               * Pin نفس الـstage
               */
              pin:
                stageRef.current,

              /*
               * مهم جدًا:
               * ينقل العنصر للـbody
               * أثناء الـpin لو فيه
               * أي ancestor عامل مشكلة.
               */
              pinReparent:
                true,

              /*
               * نستخدم fixed pin
               * بدل transform pin.
               */
              pinType:
                "fixed",

              pinSpacing:
                true,

              start:
                "top top",

              end: () => {
                const config =
                  getConfig();

                return `+=${
                  (
                    testimonials.length -
                    1
                  ) *
                  config.scrollDistance
                }`;
              },

              scrub: 0.75,

              anticipatePin:
                1,

              invalidateOnRefresh:
                true,

              fastScrollEnd:
                true,

              onUpdate:
                (self) => {
                  updateProgress(
                    self.progress *
                      (
                        testimonials.length -
                        1
                      )
                  );
                },

              onRefresh:
                (self) => {
                  updateProgress(
                    self.progress *
                      (
                        testimonials.length -
                        1
                      )
                  );
                },
            },
          });

        masterTrigger =
          masterTimeline.scrollTrigger;

        /* ==============================
           CARD TRANSITIONS
        =============================== */

        for (
          let active = 1;
          active <
          testimonials.length;
          active++
        ) {
          const nextCard =
            cards[active];

          const revealElements =
            nextCard.querySelectorAll(
              ".testimonial-reveal"
            );

          const shine =
            nextCard.querySelector(
              ".testimonial-shine"
            );

          masterTimeline.set(
            cards,

            {
              zIndex: (
                index
              ) =>
                getState(
                  index,
                  active
                ).zIndex,

              pointerEvents:
                (index) =>
                  index ===
                  active
                    ? "auto"
                    : "none",
            }
          );

          masterTimeline.to(
            cards,

            {
              x: (index) =>
                getState(
                  index,
                  active
                ).x,

              y: (index) =>
                getState(
                  index,
                  active
                ).y,

              scale:
                (index) =>
                  getState(
                    index,
                    active
                  ).scale,

              rotationY:
                (index) =>
                  getState(
                    index,
                    active
                  ).rotationY,

              rotationZ:
                (index) =>
                  getState(
                    index,
                    active
                  ).rotationZ,

              opacity:
                (index) =>
                  getState(
                    index,
                    active
                  ).opacity,

              filter:
                (index) =>
                  `blur(${
                    getState(
                      index,
                      active
                    ).blur
                  }px)`,

              duration: 1,

              ease:
                "power2.inOut",
            }
          );

          masterTimeline.fromTo(
            revealElements,

            {
              opacity: 0.35,

              y: 10,
            },

            {
              opacity: 1,

              y: 0,

              duration: 0.5,

              stagger:
                0.04,

              ease:
                "power3.out",

              immediateRender:
                false,
            },

            "<0.22"
          );

          masterTimeline
            .set(
              shine,

              {
                xPercent:
                  -160,

                opacity: 0,
              },

              "<"
            )

            .to(
              shine,

              {
                xPercent:
                  160,

                opacity:
                  0.1,

                duration:
                  0.38,

                ease:
                  "power2.inOut",
              },

              "<0.2"
            )

            .to(
              shine,

              {
                opacity: 0,

                duration:
                  0.15,
              },

              "<0.25"
            );
        }

        /* ==============================
           HOVER
        =============================== */

        const cleanupEvents =
          [];

        cards.forEach(
          (card) => {
            const surface =
              card.querySelector(
                ".testimonial-surface"
              );

            const quote =
              card.querySelector(
                ".testimonial-quote"
              );

            const onMove =
              (event) => {
                if (
                  window.matchMedia(
                    "(hover: none)"
                  ).matches
                ) {
                  return;
                }

                const rect =
                  card.getBoundingClientRect();

                const x =
                  (
                    event.clientX -
                    rect.left
                  ) /
                    rect.width -
                  0.5;

                const y =
                  (
                    event.clientY -
                    rect.top
                  ) /
                    rect.height -
                  0.5;

                gsap.to(
                  surface,

                  {
                    rotationY:
                      x *
                      2.7,

                    rotationX:
                      y *
                      -2.7,

                    duration:
                      0.4,

                    ease:
                      "power3.out",
                  }
                );

                gsap.to(
                  quote,

                  {
                    x: x * 5,

                    y: y * 5,

                    duration:
                      0.4,

                    ease:
                      "power3.out",
                  }
                );
              };

            const onLeave =
              () => {
                gsap.to(
                  surface,

                  {
                    rotationX:
                      0,

                    rotationY:
                      0,

                    duration:
                      0.65,

                    ease:
                      "power3.out",
                  }
                );

                gsap.to(
                  quote,

                  {
                    x: 0,

                    y: 0,

                    duration:
                      0.65,

                    ease:
                      "power3.out",
                  }
                );
              };

            card.addEventListener(
              "mousemove",
              onMove
            );

            card.addEventListener(
              "mouseleave",
              onLeave
            );

            cleanupEvents.push(
              () => {
                card.removeEventListener(
                  "mousemove",
                  onMove
                );

                card.removeEventListener(
                  "mouseleave",
                  onLeave
                );
              }
            );
          }
        );

        /* ==============================
           RESPONSIVE RESIZE FIX
        =============================== */

        const resizeHandler =
          () => {
            const newWidth =
              window.innerWidth;

            /*
             * تجاهل تغييرات height
             * الخاصة بالـmobile UI.
             */
            if (
              Math.abs(
                newWidth -
                  lastWidth
              ) < 2
            ) {
              return;
            }

            clearTimeout(
              resizeTimer
            );

            /*
             * نحفظ testimonial الحالي.
             */
            const progress =
              masterTrigger
                ? masterTrigger.progress
                : 0;

            const wasActive =
              masterTrigger
                ? masterTrigger.isActive
                : false;

            resizeTimer =
              setTimeout(
                () => {
                  /*
                   * global smooth scrolling
                   * لازم يتقفل مؤقتًا.
                   */
                  const html =
                    document.documentElement;

                  const body =
                    document.body;

                  const oldHtmlBehavior =
                    html.style
                      .scrollBehavior;

                  const oldBodyBehavior =
                    body.style
                      .scrollBehavior;

                  html.style.scrollBehavior =
                    "auto";

                  body.style.scrollBehavior =
                    "auto";

                  /*
                   * function values:
                   * x / scale / rotation
                   * تتحسب من جديد.
                   */
                  masterTimeline.invalidate();

                  /*
                   * يعيد حساب pin dimensions
                   * وstart/end.
                   */
                  ScrollTrigger.refresh();

                  if (
                    wasActive &&
                    masterTrigger
                  ) {
                    const target =
                      masterTrigger.start +
                      progress *
                        (
                          masterTrigger.end -
                          masterTrigger.start
                        );

                    window.scrollTo(
                      0,
                      target
                    );

                    masterTimeline.progress(
                      progress,
                      false
                    );

                    updateProgress(
                      progress *
                        (
                          testimonials.length -
                          1
                        )
                    );

                    ScrollTrigger.update();
                  }

                  /*
                   * استرجاع setting الأصلي.
                   */
                  requestAnimationFrame(
                    () => {
                      html.style.scrollBehavior =
                        oldHtmlBehavior;

                      body.style.scrollBehavior =
                        oldBodyBehavior;
                    }
                  );

                  lastWidth =
                    newWidth;
                },

                140
              );
          };

        window.addEventListener(
          "resize",
          resizeHandler
        );

        window.addEventListener(
          "orientationchange",
          resizeHandler
        );

        /*
         * Images / fonts etc.
         * ندي browser frame
         * وبعدين refresh.
         */
        requestAnimationFrame(
          () => {
            ScrollTrigger.refresh();
          }
        );

        return () => {
          clearTimeout(
            resizeTimer
          );

          window.removeEventListener(
            "resize",
            resizeHandler
          );

          window.removeEventListener(
            "orientationchange",
            resizeHandler
          );

          cleanupEvents.forEach(
            (cleanup) =>
              cleanup()
          );
        };
      },

      sectionRef
    );

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-w-0

        bg-[#101010]
      "
    >
      {/* =================================
          BANNER
      ================================== */}

      <BannerSection
        image={continerBg}
        title="What our Clients say About us"
        Desc="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients."
        animation="testimonials"
        highlightText="Clients"
      />

      {/* =================================
          PINNED STAGE

          مفيش sticky
          مفيش track
      ================================== */}

      <div
        ref={stageRef}
        className="
          relative

          w-full
          max-w-full

          h-[100svh]

          md:h-[100dvh]

          min-h-[560px]

          overflow-hidden

          bg-[#101010]
        "
        style={{
          perspective:
            "1700px",
        }}
      >
        {/* BACKGROUND */}

        <div
          ref={ambientRef}
          className="
            absolute
            inset-0

            overflow-hidden

            pointer-events-none
          "
        >
          <img
            src={continerBg}
            alt=""
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover

              opacity-[0.045]

              scale-125
            "
          />

          <div
            className="
              absolute

              left-1/2
              top-[45%]

              -translate-x-1/2
              -translate-y-1/2

              w-[100vw]

              md:w-[80vw]

              lg:w-[65vw]

              h-[50vh]

              rounded-full

              bg-[#9EFF00]

              opacity-[0.025]

              blur-[100px]

              md:blur-[130px]

              lg:blur-[150px]
            "
          />

          <div
            className="
              absolute

              inset-x-0
              top-0

              h-px

              bg-gradient-to-r

              from-transparent

              via-[#9EFF00]/20

              to-transparent
            "
          />
        </div>

        {/* =================================
            3D DECK
        ================================== */}

        <div
          className="
            absolute
            inset-0

            z-10
          "
          style={{
            transformStyle:
              "preserve-3d",
          }}
        >
          {testimonials.map(
            (
              testimonial,
              index
            ) => (
              <article
                key={
                  testimonial.name
                }
                ref={(el) => {
                  cardsRef.current[
                    index
                  ] = el;
                }}
                className="
                  testimonial-card

                  absolute

                  left-1/2

                  top-[43%]

                  md:top-[42%]

                  w-[90vw]

                  md:w-[70vw]

                  lg:w-[56vw]

                  max-w-[760px]

                  h-[clamp(315px,57svh,375px)]

                  md:h-[clamp(335px,56dvh,400px)]

                  lg:h-[clamp(350px,54dvh,405px)]

                  rounded-[20px]

                  md:rounded-[24px]

                  lg:rounded-[26px]

                  will-change-transform
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                }}
              >
                <div
                  className="
                    testimonial-surface

                    relative

                    w-full
                    h-full

                    overflow-hidden

                    rounded-[20px]

                    md:rounded-[24px]

                    lg:rounded-[26px]

                    border
                    border-white/[0.08]

                    bg-[#1b1b1b]/95

                    shadow-[0_18px_60px_rgba(0,0,0,0.45)]

                    !p-4

                    md:!p-6

                    lg:!p-8

                    flex
                    flex-col

                    justify-between

                    gap-3

                    md:gap-4
                  "
                  style={{
                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  {/* GREEN EDGE */}

                  <div
                    className="
                      absolute

                      left-0
                      top-0

                      w-px
                      h-full

                      bg-gradient-to-b

                      from-[#B6FF4A]

                      via-[#9EFF00]/30

                      to-transparent
                    "
                  />

                  {/* GLOW */}

                  <div
                    className="
                      absolute

                      -left-20
                      -top-24

                      w-[220px]
                      h-[220px]

                      md:w-[260px]
                      md:h-[260px]

                      rounded-full

                      bg-[#9EFF00]

                      opacity-[0.055]

                      blur-[100px]

                      pointer-events-none
                    "
                  />

                  {/* SHINE */}

                  <div
                    className="
                      testimonial-shine

                      absolute

                      -top-[35%]
                      left-0

                      w-[30%]
                      h-[170%]

                      rotate-[16deg]

                      bg-gradient-to-r

                      from-transparent

                      via-white

                      to-transparent

                      blur-2xl

                      pointer-events-none
                    "
                  />

                  {/* TOP */}

                  <div
                    className="
                      testimonial-reveal

                      relative
                      z-10

                      flex

                      items-start
                      justify-between

                      gap-3
                    "
                  >
                    <div
                      className="
                        testimonial-quote

                        shrink-0

                        flex
                        items-center
                        justify-center

                        w-10
                        h-10

                        md:w-11
                        md:h-11

                        lg:w-12
                        lg:h-12

                        rounded-xl

                        bg-[#9EFF00]/10

                        border
                        border-[#9EFF00]/10

                        text-[#B9FF54]

                        text-3xl

                        lg:text-4xl

                        font-serif
                      "
                    >
                      “
                    </div>

                    <div
                      className="
                        text-[#AFFF35]

                        text-[10px]

                        md:text-xs

                        lg:text-sm

                        tracking-[0.12em]

                        whitespace-nowrap
                      "
                    >
                      ★★★★★
                    </div>
                  </div>

                  {/* TEXT */}

                  <div
                    className="
                      testimonial-reveal

                      relative
                      z-10
                    "
                  >
                    <p
                      className="
                        text-white/85

                        text-[12px]

                        min-[400px]:text-[13px]

                        md:text-[16px]

                        lg:text-[18px]

                        leading-[1.55]

                        md:leading-[1.65]

                        lg:leading-[1.7]

                        max-w-[650px]
                      "
                    >
                      {
                        testimonial.text
                      }
                    </p>
                  </div>

                  {/* CLIENT */}

                  <div
                    className="
                      testimonial-reveal

                      relative
                      z-10

                      flex
                      flex-row

                      items-center
                      justify-between

                      gap-2

                      md:gap-4

                      !p-3

                      md:!p-4

                      rounded-xl

                      md:rounded-2xl

                      bg-white/[0.035]

                      border
                      border-white/[0.05]
                    "
                  >
                    <div
                      className="
                        flex
                        items-center

                        min-w-0

                        gap-2

                        md:gap-3
                      "
                    >
                      <img
                        src={
                          testimonial.image
                        }
                        alt={
                          testimonial.name
                        }
                        className="
                          shrink-0

                          w-10
                          h-10

                          md:w-[50px]
                          md:h-[50px]

                          lg:w-[54px]
                          lg:h-[54px]

                          object-cover

                          rounded-lg

                          md:rounded-xl

                          bg-[#B6FF69]
                        "
                      />

                      <div
                        className="
                          min-w-0

                          max-w-[100px]

                          md:max-w-none
                        "
                      >
                        <h3
                          className="
                            text-white

                            text-[12px]

                            md:text-[14px]

                            lg:text-[15px]

                            font-semibold

                            truncate
                          "
                        >
                          {
                            testimonial.name
                          }
                        </h3>

                        <p
                          className="
                            text-white/45

                            text-[9px]

                            md:text-[11px]

                            lg:text-xs

                            !mt-0.5

                            truncate
                          "
                        >
                          {
                            testimonial.title
                          }
                        </p>
                      </div>
                    </div>

                    <button
                      className="
                        group
                        shrink-0

                        flex
                        items-center
                        justify-center

                        gap-1.5

                        md:gap-3

                        !px-3
                        !py-2.5

                        md:!px-4
                        md:!py-3

                        lg:!px-5

                        rounded-lg

                        md:rounded-xl

                        bg-[#161616]

                        border
                        border-white/[0.07]

                        text-white

                        text-[9px]

                        md:text-[11px]

                        lg:text-xs

                        whitespace-nowrap

                        transition-all

                        duration-500

                        hover:border-[#9EFF00]/45

                        hover:bg-[#9EFF00]/[0.055]
                      "
                    >
                      Open Website

                      <span>
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* =================================
            PROGRESS ONLY
        ================================== */}

        <div
          ref={progressNavRef}
          className="
            absolute

            left-1/2

            bottom-5

            -translate-x-1/2

            z-50

            w-[74%]

            md:w-[52%]

            lg:w-[42%]

            max-w-[480px]
          "
        >
          <div
            className="
              flex

              items-center

              gap-1.5

              md:gap-2
            "
          >
            {testimonials
              .slice(0, -1)
              .map(
                (
                  _,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="
                      relative

                      flex-1

                      h-[4px]

                      rounded-full

                      bg-white/15

                      overflow-hidden
                    "
                  >
                    <div
                      ref={(
                        el
                      ) => {
                        progressRefs.current[
                          index
                        ] = el;
                      }}
                      className="
                        absolute
                        inset-0

                        rounded-full

                        bg-[#B9FF5C]

                        shadow-[0_0_12px_rgba(185,255,92,0.35)]

                        origin-left

                        scale-x-0
                      "
                    />
                  </div>
                )
              )}
          </div>
        </div>

        {/* SCROLL HINT */}

        <div
          ref={hintRef}
          className="
            absolute

            right-[2px]

            md:right-3

            lg:right-6

            top-1/2

            -translate-y-1/2

            z-40

            flex

            items-center

            gap-2

            rotate-90

            origin-center

            text-white/20

            text-[7px]

            md:text-[8px]

            lg:text-[10px]

            uppercase

            tracking-[0.22em]

            pointer-events-none
          "
        >
          <span
            className="
              inline-block

              w-4

              md:w-6

              h-px

              bg-[#9EFF00]/35
            "
          />

          Scroll to explore
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
