import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function ServicesIconSection({ items }) {
  const overlaysRef = useRef([]);
  const cardsRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
  items.forEach((_, i) => {
    const overlay = overlaysRef.current[i];
    const card = cardsRef.current[i];
    const text = textsRef.current[i];
    if (!overlay || !card || !text) return;

    gsap.set(overlay, { clipPath: "circle(0% at 50% 50%)" });
    gsap.set(text, { color: "#ffffff" });

    const enter = () => {
      gsap.killTweensOf([overlay, text]); 
      gsap.to(overlay, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.to(text, {
        color: "#000000",
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.killTweensOf([overlay, text]); 
      gsap.to(overlay, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(text, {
        color: "#ffffff",
        duration: 0.2,
        ease: "power3.inOut",
      });
    };

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  });
}, [items]);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 sm:!p-6 justify-items-center !p-3">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="relative flex w-full !border !p-3 lg:items-start md:items-start sm:items-center border-[#4f4e4e82] flex-col overflow-hidden"
        >
        
          <div
            ref={(el) => (overlaysRef.current[index] = el)}
            className="absolute inset-0 bg-lime-400 z-0 pointer-events-none"
          />

          
          <div className="relative z-10 flex flex-col">
            <div className="relative rounded-[7px] w-[58px] h-[58px] !p-4 overflow-hidden icon-2 bg-[#1e1e1e]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#aeff0c] to-transparent opacity-10 z-0"></div>
              <Link to={"#"} className="hover:text-lime-400 relative z-10">
                <img loading="lazy" src={item.icon} alt={item.title} />
              </Link>
            </div>
            <p
              ref={(el) => (textsRef.current[index] = el)}
              className="!p-3 !mt-2 transition-colors duration-300"
            >
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesIconSection;
