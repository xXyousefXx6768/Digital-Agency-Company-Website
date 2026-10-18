import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/Abstract Design.png";

function Intro({ onFinish }) {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const preloadImage = () => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = Logo;

        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const startIntro = async () => {
      try {
        // Make sure the image is loaded before the intro finishes
        await preloadImage();

        if (!isMounted) return;

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
          onComplete: () => {
            onFinish();
          },
        });

        tl.fromTo(
          logoRef.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1.2,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          }
        );

        tl.to(
          logoRef.current,
          {
            scale: 1,
            duration: 0.8,
          },
          "-=0.25"
        );

        tl.fromTo(
          textRef.current,
          {
            x: 0,
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
          },
          {
            x: 10,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.1"
        );

        tl.to({}, { duration: 0.4 });

        tl.to(maskRef.current, {
          attr: {
            r: 0,
          },
          duration: 1,
          ease: "power4.inOut",
        });
      } catch (error) {
        console.error("Failed to preload image:", error);

        if (isMounted) {
          onFinish();
        }
      }
    };

    startIntro();

    return () => {
      isMounted = false;
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="revealMask">
            <rect
              width="100%"
              height="100%"
              fill="black"
            />

            <circle
              ref={maskRef}
              cx="50%"
              cy="50%"
              r="1000"
              fill="white"
            />
          </mask>
        </defs>

        <g mask="url(#revealMask)">
          <rect
            width="100%"
            height="100%"
            fill="black"
          />

          <foreignObject
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div
                ref={logoRef}
                className="bg-lime-400 flex items-center justify-center shadow-lg overflow-hidden relative"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-16 h-16 z-10"
                />
              </div>

              <h1
                ref={textRef}
                className="ml-4 text-3xl font-bold text-lime-400 tracking-wider"
              >
                SquareUp
              </h1>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}

export default Intro;
