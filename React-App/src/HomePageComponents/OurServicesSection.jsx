import React, { useEffect, useRef, useLayoutEffect } from "react";
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

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".service-card");
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 763px)",
        mobile: "(max-width: 762px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, motion } = context.conditions;

        // احترام إعداد تقليل الحركة
        if (!motion) return;

        cards.forEach((card, index) => {
          const line = card.querySelector(".service-line");
          const icon = card.querySelector(".service-icon");
          const title = card.querySelector(".service-title");
          const desc = card.querySelector(".service-desc");
          const button = card.querySelector(".service-button");

          gsap.set(card, {
            opacity: 0,
            y: desktop ? 55 : 35,
            scale: 0.97,
          });

          gsap.set(line, {
            scaleX: 0,
            transformOrigin: "left center",
          });

          gsap.set(icon, {
            opacity: 0,
            scale: 0.6,
            rotation: -12,
          });

          gsap.set(title, {
            opacity: 0,
            y: 18,
          });

          gsap.set(desc, {
            opacity: 0,
            y: 20,
            clipPath: "inset(0 0 100% 0)",
          });

          gsap.set(button, {
            opacity: 0,
            y: 15,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: desktop ? "top 78%" : "top 88%",
              toggleActions: "play none none none",
              once: true,
              invalidateOnRefresh: true,
            },
            delay: index * (desktop ? 0.18 : 0.12),
          });

          tl.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          })
            .to(
              line,
              {
                scaleX: 1,
                duration: 0.55,
                ease: "power3.out",
              },
              "-=0.45"
            )
            .to(
              icon,
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.55,
                ease: "back.out(1.7)",
              },
              "-=0.3"
            )
            .to(
              title,
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
              },
              "-=0.3"
            )
            .to(
              desc,
              {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.65,
                ease: "power2.out",
              },
              "-=0.2"
            )
            .to(
              button,
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
              },
              "-=0.25"
            );
        }); // ← دي كانت ناقصة عندك
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
    <div className="w-full pt-0 pb-12 relative bg-[#1e1e1e95] overflow-hidden">
      <section className="flex flex-col justify-center items-center  gap-8">
        <button className="relative  text-[14px] font-barlow py-2 px-6  !rounded-2xl bg-[#262626] text-white shadow-md">
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
          <div className="flex w-max animate-[scroll_28s_linear_infinite] whitespace-nowrap gap-12">
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
          animation="services"
        />

        <div
          ref={sectionRef}
          className="grid grid-cols-1 items-center relative bottom-[32px] md:grid-cols-3"
        >
          {ServicesItems.map((service, idx) => (
            <div
  key={idx}
  className="relative overflow-hidden bg-[#1e1e1e95] h-[450px] !p-6 text-left shadow-lg flex flex-col justify-around service-card"
>
              <div className="relative rounded-xl w-[68px] h-[68px] !p-4 overflow-hidden icon service-icon bg-[#1e1e1e]">
                <div className="service-line absolute left-0 top-0 w-full h-px bg-lime-400/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#9eff00] to-transparent opacity-10 z-0" />
                <img
                  loading="lazy"
                  src={service.icon}
                  alt={service.title}
                  className="h-10 w-10 object-contain"
                />

              </div>

            <h3 className="text-2xl font-semibold title service-title">
  {service.title}
</h3>
              <div className="desc ">
                <p className="text-white h-[135px] text-sm service-desc">
                  {service.description}
                </p>
              </div>
              <div className="btn">
                <button className="btn service-button bg-[#262626] w-full !px-6 !py-4 text-white text-sm rounded-lg hover:bg-[#ACFF24] hover:text-black transition">
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
