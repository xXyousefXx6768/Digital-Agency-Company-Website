import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

function AccordionSection() {
  const [activeId, setActiveId] =
    useState(1);

  const sectionRef = useRef(null);

  const itemRefs = useRef({});
  const answerRefs = useRef({});
  const iconRefs = useRef({});

  const faqData = [
    {
      id: 1,
      question:
        "What services does SquareUp provide?",
      answer:
        "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 2,
      question:
        "How can SquareUp help my business?",
      answer:
        "We provide tailored digital solutions designed around your business goals, helping improve user experience, performance, and long-term growth.",
    },
    {
      id: 3,
      question:
        "What industries does SquareUp work with?",
      answer:
        "We work across a wide range of industries including fintech, e-commerce, healthcare, technology, real estate, and more.",
    },
    {
      id: 4,
      question:
        "How long does it take to complete a project with SquareUp?",
      answer:
        "Project timelines depend on complexity and scope. A typical project may take anywhere from two to eight weeks.",
    },
    {
      id: 5,
      question:
        "What is the process for working with SquareUp?",
      answer:
        "Our process typically includes discovery, strategy, design, development, testing, launch, and ongoing optimization.",
    },
    {
      id: 6,
      question:
        "What is the average cost of a project with SquareUp?",
      answer:
        "Project cost depends on the required features and scope. We provide a clear and detailed estimate before development begins.",
    },
    {
      id: 7,
      question:
        "How do I get started with SquareUp?",
      answer:
        "Get in touch with our team and tell us about your idea. We will discuss your goals, requirements, timeline, and the best way to move forward.",
    },
    {
      id: 8,
      question:
        "Where can I find more information about SquareUp?",
      answer:
        "You can explore our website, portfolio, services, and social channels, or contact our team directly for more information.",
    },
  ];

  /*
   * العمودين مستقلين تمامًا
   *
   * ده يمنع:
   * سؤال الشمال يفتح
   * → سؤال اليمين يطول معاه
   */
  const leftColumn =
    faqData.slice(0, 4);

  const rightColumn =
    faqData.slice(4, 8);

  /* =========================================
     ENTRANCE ANIMATION
  ========================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items =
        gsap.utils.toArray(
          ".faq-item"
        );

      gsap.set(items, {
        opacity: 0,
        y: 28,
        scale: 0.985,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.75,

        stagger: {
          each: 0.075,
          from: "start",
        },

        ease: "power3.out",

        scrollTrigger: {
          trigger:
            sectionRef.current,

          start: "top 84%",

          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
     OPEN / CLOSE ANIMATION
  ========================================== */

  useEffect(() => {
    faqData.forEach((item) => {
      const answer =
        answerRefs.current[
          item.id
        ];

      const icon =
        iconRefs.current[
          item.id
        ];

      if (!answer) return;

      const isActive =
        item.id === activeId;

      gsap.killTweensOf(answer);

      gsap.to(answer, {
        height:
          isActive
            ? "auto"
            : 0,

        opacity:
          isActive
            ? 1
            : 0,

        y:
          isActive
            ? 0
            : -8,

        duration:
          isActive
            ? 0.55
            : 0.35,

        ease:
          isActive
            ? "power3.out"
            : "power2.inOut",
      });

      if (icon) {
        gsap.to(icon, {
          rotation:
            isActive
              ? 45
              : 0,

          scale:
            isActive
              ? 1.04
              : 1,

          duration: 0.45,

          ease:
            "power3.out",
        });
      }
    });
  }, [activeId]);

  const toggleAccordion = (
    id
  ) => {
    setActiveId(
      (current) =>
        current === id
          ? null
          : id
    );
  };

  /* =========================================
     SINGLE FAQ ITEM
  ========================================== */

  const renderItem = (
    item
  ) => {
    const isActive =
      activeId === item.id;

    return (
      <article
        key={item.id}
        ref={(el) => {
          itemRefs.current[
            item.id
          ] = el;
        }}
        className={`
          faq-item
          group
          relative
          overflow-hidden

          rounded-[18px]

          border

          ${
            isActive
              ? "border-[#9EFF00]/25 bg-[#1A1D17]"
              : "border-white/[0.065] bg-[#171717]"
          }

          transition-[border-color,background-color,box-shadow]
          duration-500

          ${
            isActive
              ? "shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
              : ""
          }

          hover:border-[#9EFF00]/20
          hover:bg-[#191919]
        `}
      >
        {/* active atmosphere */}

        <div
          className={`
            absolute
            -left-16
            -top-20

            w-[190px]
            h-[190px]

            rounded-full

            bg-[#9EFF00]

            blur-[90px]

            pointer-events-none

            transition-opacity
            duration-700

            ${
              isActive
                ? "opacity-[0.055]"
                : "opacity-0"
            }
          `}
        />

        {/* subtle active edge */}

        <div
          className={`
            absolute
            left-0
            top-0

            w-[2px]
            h-full

            bg-gradient-to-b
            from-[#B9FF56]
            via-[#9EFF00]/40
            to-transparent

            transition-opacity
            duration-500

            ${
              isActive
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        <button
          type="button"
          aria-expanded={
            isActive
          }
          onClick={() =>
            toggleAccordion(
              item.id
            )
          }
          className="
            relative
            z-10

            w-full

            flex

            items-center

            gap-3
            md:gap-4

            text-left

            !p-3
            md:!p-4

            cursor-pointer
          "
        >
          {/* Number */}

          <div
            className={`
              relative

              shrink-0

              flex
              items-center
              justify-center

              w-[48px]
              h-[48px]

              md:w-[52px]
              md:h-[52px]

              rounded-xl

              border

              transition-all
              duration-500

              ${
                isActive
                  ? `
                    border-[#9EFF00]/20
                    bg-[#9EFF00]/[0.08]
                  `
                  : `
                    border-white/[0.045]
                    bg-[#202020]
                  `
              }
            `}
          >
            <span
              className={`
                relative
                z-10

                text-[13px]

                font-semibold

                tracking-wide

                transition-colors
                duration-500

                ${
                  isActive
                    ? "text-[#B6FF4A]"
                    : "text-white/70"
                }
              `}
            >
              {String(
                item.id
              ).padStart(
                2,
                "0"
              )}
            </span>
          </div>

          {/* Question */}

          <div
            className="
              flex-1

              min-w-0
            "
          >
            <h3
              className={`
                text-[14px]
                md:text-[15px]

                font-medium

                leading-[1.5]

                transition-colors
                duration-500

                ${
                  isActive
                    ? "text-[#B8FF5A]"
                    : "text-white/90"
                }
              `}
            >
              {
                item.question
              }
            </h3>
          </div>

          {/* Plus */}

          <div
            ref={(el) => {
              iconRefs.current[
                item.id
              ] = el;
            }}
            className={`
              shrink-0

              flex
              items-center
              justify-center

              w-9
              h-9

              rounded-full

              border

              transition-colors
              duration-500

              ${
                isActive
                  ? `
                    border-[#9EFF00]/20
                    bg-[#9EFF00]/10
                    text-[#B8FF5A]
                  `
                  : `
                    border-white/[0.06]
                    bg-white/[0.025]
                    text-white/60
                  `
              }
            `}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="
                text-[11px]
              "
            />
          </div>
        </button>

        {/* ANSWER */}

        <div
          ref={(el) => {
            answerRefs.current[
              item.id
            ] = el;
          }}
          className="
            relative
            z-10

            h-0

            opacity-0

            overflow-hidden
          "
        >
          <div
            className="
              !px-4
              md:!px-[84px]

              !pb-5
              md:!pb-6
            "
          >
            <div
              className="
                h-px
                w-full

                bg-gradient-to-r

                from-[#9EFF00]/20
                via-white/[0.05]
                to-transparent

                !mb-4
              "
            />

            <p
              className="
                max-w-[560px]

                text-[13px]
                md:text-[14px]

                leading-[1.75]

                text-white/45
              "
            >
              {item.answer}
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="
        relative

        w-full

        bg-[#101010]

        !px-4
        md:!px-7
        lg:!px-10

        !py-8
        md:!py-10
      "
    >
      {/* subtle top separator */}

      <div
        className="
          absolute

          top-0
          left-[5%]
          right-[5%]

          h-px

          bg-gradient-to-r

          from-transparent

          via-white/[0.07]

          to-transparent
        "
      />

      <div
        className="
          max-w-[1280px]

          mx-auto

          grid
          grid-cols-1
          lg:grid-cols-2

          items-start

          gap-3
          lg:gap-4
        "
      >
        {/* LEFT COLUMN */}

        <div
          className="
            flex
            flex-col

            gap-3
          "
        >
          {leftColumn.map(
            renderItem
          )}
        </div>

        {/* RIGHT COLUMN */}

        <div
          className="
            flex
            flex-col

            gap-3
          "
        >
          {rightColumn.map(
            renderItem
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionSection;
