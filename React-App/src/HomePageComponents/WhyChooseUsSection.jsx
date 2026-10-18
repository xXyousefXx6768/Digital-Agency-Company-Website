import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BannerSection from "../Sections/BannerSection";
import continerBg from "../HomePageComponents/assets/Container.png";
import ExpertiseIcon from "../HomePageComponents/assets/ExpertiseIcon.png";
import ClientCentricApproachIcon from "../HomePageComponents/assets/ClientCentricApproachIcon.png";
import ResultsDrivenSolutionsIcon from "../HomePageComponents/assets/ResultsDrivenSolutionsIcon.png";
import CollaborativePartnershipIcon from "../HomePageComponents/assets/CollaborativePartnershipIcon.png";

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 763px)",
          mobile: "(max-width: 762px)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { desktop, motion } = context.conditions;

          const cards = cardsRef.current.filter(Boolean);

          if (!motion || !cards.length) return;

          /*
           * Initial state
           * Nothing dramatic:
           * the section feels like it is assembling itself.
           */

          gsap.set(gridRef.current, {
            opacity: 1,
          });

          cards.forEach((card) => {
            const icon = card.querySelector(".why-icon");
            const titleWrap = card.querySelector(".why-title-wrap");
            const title = card.querySelector(".why-title");
            const descWrap = card.querySelector(".why-desc-wrap");
            const desc = card.querySelector(".why-desc");
            const accent = card.querySelector(".why-accent");

            gsap.set(card, {
              opacity: 0,
              y: desktop ? 26 : 20,
              scale: desktop ? 0.985 : 0.99,
              filter: "blur(5px)",
            });

            gsap.set(icon, {
              opacity: 0,
              y: 10,
              scale: 0.9,
            });

            gsap.set(titleWrap, {
              overflow: "hidden",
            });

            gsap.set(title, {
              yPercent: 115,
            });

            gsap.set(descWrap, {
              overflow: "hidden",
            });

            gsap.set(desc, {
              y: 18,
              opacity: 0,
            });

            gsap.set(accent, {
              scaleX: 0,
              transformOrigin: "left center",
            });
          });

          /*
           * One master timeline.
           */
          const tl = gsap.timeline({
            defaults: {
              overwrite: "auto",
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: desktop ? "top 78%" : "top 84%",
              once: true,
              invalidateOnRefresh: true,
            },
          });

          /*
           * STEP 1
           * Cards assemble.
           */
          tl.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: {
              each: desktop ? 0.11 : 0.09,
              from: "start",
            },
            ease: "power3.out",
          });

          /*
           * STEP 2
           * Tiny accent grows inside each card.
           */
          tl.to(
            cards.map((card) => card.querySelector(".why-accent")),
            {
              scaleX: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.inOut",
            },
            "-=0.65"
          );

          /*
           * STEP 3
           * Icons rise into position.
           */
          tl.to(
            cards.map((card) => card.querySelector(".why-icon")),
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.09,
              ease: "power3.out",
            },
            "-=0.5"
          );

          /*
           * STEP 4
           * Masked title reveal.
           */
          tl.to(
            cards.map((card) => card.querySelector(".why-title")),
            {
              yPercent: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power4.out",
            },
            "-=0.52"
          );

          /*
           * STEP 5
           * Description follows.
           */
          tl.to(
            cards.map((card) => card.querySelector(".why-desc")),
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.6"
          );

          /*
           * Very subtle scroll depth.
           * Desktop only.
           */
          if (desktop) {
            cards.forEach((card, index) => {
              const icon = card.querySelector(".why-icon");

              gsap.to(icon, {
                y: index % 2 === 0 ? -5 : -7,
                ease: "none",

                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.4,
                },
              });
            });
          }

          /*
           * Refined hover interaction.
           * No bouncing / dramatic scaling.
           */
          if (desktop) {
            cards.forEach((card) => {
              const icon = card.querySelector(".why-icon");
              const title = card.querySelector(".why-title");
              const glow = card.querySelector(".why-glow");
              const accent = card.querySelector(".why-accent");

              const enter = () => {
                gsap.to(card, {
                  borderColor: "rgba(158, 255, 0, 0.18)",
                  backgroundColor: "rgba(31,31,31,0.82)",
                  duration: 0.45,
                  ease: "power2.out",
                });

                gsap.to(icon, {
                  y: -3,
                  duration: 0.45,
                  ease: "power3.out",
                });

                gsap.to(title, {
                  x: 3,
                  duration: 0.45,
                  ease: "power3.out",
                });

                gsap.to(glow, {
                  opacity: 0.09,
                  scale: 1,
                  duration: 0.55,
                  ease: "power2.out",
                });

                gsap.to(accent, {
                  opacity: 1,
                  duration: 0.35,
                });
              };

              const leave = () => {
                gsap.to(card, {
                  borderColor: "rgba(49,47,47,0.25)",
                  backgroundColor: "rgba(30,30,30,0.58)",
                  duration: 0.55,
                  ease: "power2.out",
                });

                gsap.to(icon, {
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out",
                });

                gsap.to(title, {
                  x: 0,
                  duration: 0.5,
                  ease: "power3.out",
                });

                gsap.to(glow, {
                  opacity: 0,
                  scale: 0.9,
                  duration: 0.55,
                  ease: "power2.out",
                });

                gsap.to(accent, {
                  opacity: 0.55,
                  duration: 0.4,
                });
              };

              card.addEventListener("mouseenter", enter);
              card.addEventListener("mouseleave", leave);

              // GSAP context cleanup
              context.add?.(() => {
                card.removeEventListener("mouseenter", enter);
                card.removeEventListener("mouseleave", leave);
              });
            });
          }
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      title: "Expertise",
      desc:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      icon: ExpertiseIcon,
    },
    {
      title: "Client-Centric Approach",
      desc:
        "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
      icon: ClientCentricApproachIcon,
    },
    {
      title: "Results-Driven Solutions",
      desc:
        "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
      icon: ResultsDrivenSolutionsIcon,
    },
    {
      title: "Collaborative Partnership",
      desc:
        "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
      icon: CollaborativePartnershipIcon,
    },
  ];

  return (
    <section className="w-full">
      <BannerSection
        title="Why Choose SquareUp?"
        Desc={`Experience excellence
in digital craftsmanship with
our team of skilled professionals
dedicated to delivering exceptional results.`}
        image={continerBg}
        animation="why"
      />

      <div className="flex flex-wrap justify-center items-center w-full">
        <div
          ref={sectionRef}
          className="relative w-full !mx-auto overflow-hidden"
        >
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 w-full bg-[#1e1e1e95]"
          >
            {reasons.map((item, idx) => (
              <article
                key={item.title}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  bg-[#1e1e1e95]
                  !px-4
                  md:!px-5
                  !py-13
                  border
                  border-[#312f2f40]
                  flex
                  flex-col
                  gap-2
                  will-change-transform
                "
              >
                {/* Very subtle hover atmosphere */}
                <div
                  className="
                    why-glow
                    pointer-events-none
                    absolute
                    -top-24
                    -left-20
                    w-[280px]
                    h-[280px]
                    rounded-full
                    bg-[#9EFF00]
                    blur-[100px]
                    opacity-0
                    scale-90
                    z-0
                  "
                />

                {/* Micro accent */}
                <div
                  className="
                    why-accent
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#9EFF00]/30
                    to-transparent
                    opacity-55
                    z-10
                  "
                />

                <div className="relative z-10 flex items-center !p-3">
                  <div
                    className="
                      why-icon
                      relative
                      rounded-xl
                      w-[58px]
                      h-[58px]
                      !p-4
                      overflow-hidden
                      bg-[#1e1e1e]
                      shrink-0
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-[#9eff00]
                        to-transparent
                        opacity-10
                      "
                    />

                    <img
                      src={item.icon}
                      alt=""
                      className="h-6 w-6 object-contain relative z-10"
                    />
                  </div>

                  <div className="why-title-wrap !ml-3">
                    <h3 className="why-title text-2xl md:text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="
                    why-desc-wrap
                    relative
                    z-10
                    !ml-3
                    !mt-4
                    w-[90%]
                    md:w-[80%]
                  "
                >
                  <p className="why-desc text-gray-400 text-md leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
