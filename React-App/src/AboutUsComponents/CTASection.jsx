import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CTASection() {
  const ctaSectionelements = [
    {
      num: "01",
      title: "Design",
      Desc: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department.Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
      num: "02",
      title: "Engineering",
      Desc: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
      num: "03",
      title: "Project Management",
      Desc: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
      num: "04",
      title: "Collaboration",
      Desc: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
      num: "05",
      title: "Client-Centric Approach",
      Desc: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
      num: "06",
      title: "Driving Success",
      Desc: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const title = card.querySelector("span:nth-child(2)");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.08,
          rotate: 2,
          y: -15,
          boxShadow: "0px 20px 40px rgba(216,255,153,0.4)",
          border: "1px solid rgba(216,255,153,0.6)",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(title, {
          x: 10,
          color: "#ffffff",
          duration: 0.5,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          rotate: 0,
          y: 0,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          border: "1px solid transparent",
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(title, {
          x: 0,
          color: "#D8FF99",
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  return (
    <section className="flex flex-col bg-[#1e1e1e95]">
      <h4 className="text-6xl !p-5 !ml-7 !mt-20">Our Story</h4>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full items-center">
        {ctaSectionelements.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="!p-6 cursor-pointer rounded-2xl transition-all bg-[#1e1e1e] border border-transparent"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <span className="text-[#D8FF99] text-8xl">{item.num}</span>
                <span className="text-[#D8FF99] text-2xl !ml-7 font-semibold">
                  {item.title}
                </span>
              </div>
              <p className="text-gray-400">{item.Desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CTASection;
