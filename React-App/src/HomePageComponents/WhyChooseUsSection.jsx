import React, { useRef, useEffect } from "react";
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
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 763px)",
        isMobile: "(max-width: 762px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const cards = cardsRef.current;

        // الحالة الابتدائية لكل الكارت ومكوناته
        cards.forEach((card) => {
          gsap.set(card, { opacity: 0 });
          gsap.set(card.querySelector(".icon-2"), { x: -30, opacity: 0 });
          gsap.set(card.querySelector(".title-2"), { x: -30, opacity: 0 });
          gsap.set(card.querySelector(".desc-2"), { x: -30, opacity: 0 });
        });

        if (isDesktop) {
          // Desktop → كل الكروت مرة واحدة + stagger
          gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              toggleActions: "play none none none",
            },
          })
            .to(cards, { opacity: 1, duration: 0.5, stagger: 0.3 }) // يخلي الكارت نفسه يظهر
            .add(() => {
              cards.forEach((card, idx) => {
                const icon = card.querySelector(".icon-2");
                const title = card.querySelector(".title-2");
                const desc = card.querySelector(".desc-2");

                gsap.timeline({ delay: idx * 0.3 })
                  .to(icon, { x: 0, opacity: 1, duration: 0.4 })
                  .to(title, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2")
                  .to(desc, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");
              });
            });
        }

        if (isMobile) {
          // Mobile → كل كارت لوحده
          cards.forEach((card) => {
            const icon = card.querySelector(".icon-2");
            const title = card.querySelector(".title-2");
            const desc = card.querySelector(".desc-2");

            gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            })
              .to(card, { opacity: 1, duration: 0.4 }) // يظهر الكارت الأول
              .to(icon, { x: 0, opacity: 1, duration: 0.4 })
              .to(title, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2")
              .to(desc, { x: 0, opacity: 1, duration: 0.4 }, "-=0.2");
          });
        }

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);


  const reasons = [
    {
      title: "Expertise",
      desc: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends.",
      icon: ExpertiseIcon,
    },
    {
      title: "Client-Centric Approach",
      desc: "We prioritize our clients and their strategic needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements.",
      icon: ClientCentricApproachIcon,
    },
    {
      title: "Results-Driven Solutions",
      desc: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth.",
      icon: ResultsDrivenSolutionsIcon,
    },
    {
      title: "Collaborative Partnership",
      desc: "We form long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support and updates.",
      icon: CollaborativePartnershipIcon,
    },
  ];

  return (
    <section className="w-full relative bottom-22">
      <BannerSection
        title="Why Choose SquareUp?"
        Desc="Experience excellence 
      in digital craftsmanship with 
      our team of skilled professionals 
      dedicated to delivering exceptional results."
        image={continerBg}
      />
      <div className="flex flex-wrap justify-center items-center w-full">
        <div
          ref={sectionRef}
          className="w-full !mx-auto bg-[#1e1e1e95] grid grid-cols-1 md:grid-cols-2"
        >
          {reasons.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-[#1e1e1e95] !p-4 !px-2 !py-18 shadow-md flex flex-col gap-4 border border-[#312f2f40]"
            >
              <div className="flex items-center ">
                <div className="relative rounded-xl w-[58px] h-[58px] !p-4 overflow-hidden opacity-0 icon-2 bg-[#1e1e1e]">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#9eff00] to-transparent opacity-10 z-0"></div>
                  <img
                    src={item.icon}
                    alt="icon"
                    className="h-6 w-6 object-contain relative z-10"
                  />
                </div>
                <h3 className="text-xl title-2 opacity-0 !ml-3 font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 opacity-0 !p-1 !mr-3 desc-2 !mt-4 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
