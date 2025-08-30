import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
import Profile from '../HomePageComponents/assets/Profile.png'
import Profile1 from '../HomePageComponents/assets/Profile1.png'
import Profile2 from '../HomePageComponents/assets/Profile2.png'
import Profile3 from '../HomePageComponents/assets/Profile3.png'
import Profile4 from '../HomePageComponents/assets/Profile4.png'
import Profile5 from '../HomePageComponents/assets/Profile5.png'
import { text } from '@fortawesome/fontawesome-svg-core'
gsap.registerPlugin(ScrollTrigger);

function TestimonialsSection() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const testimonials = [ 
    { name: "John Smith", title: "CEO of Chic Boutique", text: "SquareUp has been instrumental in transforming our online presence...", image: Profile, }, 
    { name: "Sarah Johnson", title: "Founder of HungryBites", text: "Working with SquareUp was a breeze...", image: Profile1, }, 
    { name: "Mark Thompson", title: "CEO of EventMasters", text: "SquareUp developed a comprehensive booking and reservation system...", image: Profile2, }, 
    { name: "Laura Adams", title: "COO of ProTech Solutions", text: "ProTech Solutions turned to SquareUp to automate our workflow...", image: Profile3, }, 
    { name: "Michael Anderson", title: "Founder of Dream Homes Realty.", text: "SquareUp designed and developed a captivating web portal...", image: Profile4, }, 
    { name: "Emily Turner", title: "CEO of FitLife Tracker", text: "FitLife Tracker wanted a mobile app that tracked fitness activities...", image: Profile5, }, ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".testimonial-card");

    const ctx = gsap.context(() => {
      // تجهيز الكروت
      gsap.set(cards, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        filter: "blur(10px)",
        zIndex: 1,
      });

      // أول كارت ظاهر
      gsap.set(cards[0], { opacity: 1, filter: "blur(0px)", zIndex: 2 });

      // Timeline رئيسي لكل الكروت
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${cards.length * 800}`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            // تحديث البروجريس بار
            gsap.to(progressRef.current, {
              scaleX: self.progress, // self.progress من 0 -> 1
              transformOrigin: "left center",
              ease: "none",
            });
          },
        },
      });

      // الانتقالات بين الكروت
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        tl.to(cards[i], {
          opacity: 0,
          filter: "blur(10px)",
          y: -100,
          zIndex: 1,
        })
          .to(
            cards[i + 1],
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              zIndex: 2,
            },
            "<"
          )
          .addPause();
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#1e1e1e95] relative bottom-22">
      <BannerSection
        image={continerBg}
        title="What our Clients say About us"
        Desc="At SquareUp, we take pride in delivering exceptional digital products..."
      />

      {/* container for stacked cards */}
      <div
        ref={containerRef}
        className="relative h-screen flex  md:!p-2 sm:!p-2 items-center justify-center"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card lg:w-1/2 h-[400px] md:w-2/3 sm:w-full  bg-[#262626] !p-6 rounded-2xl shadow-md text-center"
          >
            <h4 className="font-bold text-[#D8FF99] !mb-6 text-2xl">{t.title}</h4>
            <p className="text-white !mb-4">{t.text}</p>
            <div className="flex lg:flex-row sm:flex-col items-center  justify-between bg-[#303030] !p-4 rounded-xl">
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-xl !mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-white">{t.title}</p>
                </div>
              </div>
              <button className="bg-[#1e1e1e] !px-4 !py-2 rounded-lg">
                Open Website
              </button>
            </div>
          </div>
        ))}

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-6 left-0 w-full h-2 bg-[#333] rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#D8FF99] rounded-full scale-x-0"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;