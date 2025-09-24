import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import spotifyLogo from "../HomePageComponents/assets/spotifyLogo.png";
import zapierLogo from "../HomePageComponents/assets/zapierLogo.png";
import SlackLogo from "../HomePageComponents/assets/SlackLogo.png";
import ZoomLogo from "../HomePageComponents/assets/ZoomLogo.png";
import AmazonLogo from "../HomePageComponents/assets/AmazonLogo.png";
import AdobeLogo from "../HomePageComponents/assets/AdobeLogo.png";
import continerBg from "../HomePageComponents/assets/Container.png";
import CogsIcon from "../HomePageComponents/assets/CogsIcon.png";
import paintBrushIcon from "../HomePageComponents/assets/paintBrushIcon.png";
import TaskIcon from "../HomePageComponents/assets/TaskIcon.png";
import BannerSection from "../Sections/BannerSection";

gsap.registerPlugin(ScrollTrigger);

function OurServicesSection() {
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
        const cards = gsap.utils.toArray(".service-card");
        const { isDesktop, isMobile } = context.conditions;

        // تجهيز الكروت
        gsap.set(cards, {
          opacity: 0,
          y: isDesktop ? 40 : 60,
        });

        if (isDesktop) {
          // كل الكروت مرة واحدة مع stagger
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.25,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }

        if (isMobile) {
          // كل كارت لوحده
          cards.forEach((card) => {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top center",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
                // markers: true,
              },
            });
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


  const infiniteScrollItems = [
    zapierLogo,
    spotifyLogo,
    ZoomLogo,
    SlackLogo,
    AmazonLogo,
    AdobeLogo,
  ];

  const ServicesItems = [
    {
      icon: paintBrushIcon,
      title: "Design",
      description:
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design isn’t just about aesthetics; it’s about creating seamless and intuitive user experiences.",
    },
    {
      icon: CogsIcon,
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    },
    {
      icon: TaskIcon,
      title: "Project Management",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the delivery process.",
    },
  ];

  return (
    <div className="w-full !py-12 relative bg-[#1e1e1e95] overflow-hidden">
      <section className="flex flex-col justify-center items-center gap-8">
        <button className="text-[14px] font-barlow !py-2 !px-6 !rounded-2xl bg-[#262626] text-white shadow-md">
          Trusted By 250+ Companies
        </button>

        {/* Infinite logos */}
        <div className="relative w-full max-w-7xl overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-24 z-10"
            style={{
              background: "linear-gradient(to right, rgb(18 18 18), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-24 z-10"
            style={{
              background: "linear-gradient(to left, rgb(18 18 18), transparent)",
            }}
          />
          <div className="flex animate-[scroll_10s_linear_infinite] whitespace-nowrap gap-12">
            {[...infiniteScrollItems, ...infiniteScrollItems].map(
              (item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="logo"
                  className="h-10 w-auto object-contain"
                />
              )
            )}
          </div>
        </div>

        {/* Services Section */}
        <BannerSection
          image={continerBg}
          title="Our Services"
          Desc="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        />

        <div
          ref={sectionRef}
          className="grid grid-cols-1 items-center relative bottom-[32px] md:grid-cols-3"
        >
          {ServicesItems.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e95] h-[524px] !p-6 text-left shadow-lg flex flex-col justify-evenly service-card"
            >
              <div className="relative rounded-xl w-[58px] h-[58px] !p-4 overflow-hidden icon bg-[#1e1e1e]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#9eff00] to-transparent opacity-10 z-0" />
                <img
                  loading="lazy"
                  src={service.icon}
                  alt={service.title}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold title">{service.title}</h3>
              <div className="desc">
                <p className="text-gray-400 h-[135px] text-sm">
                  {service.description}
                </p>
              </div>
              <div className="btn">
                <button className="btn bg-[#262626] w-full !px-6 !py-2 text-white text-sm rounded-lg hover:bg-[#ACFF24] hover:text-black transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurServicesSection;
