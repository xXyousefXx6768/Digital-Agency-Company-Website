import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '../AboutPageComponents/assets/Logo.png'
import boxBg from '../AboutPageComponents/assets/Image.png'
import Line2 from '../AboutPageComponents/assets/Line 2.png'
import LineSvg from '../AboutPageComponents/assets/lineSvg';



function OurStory() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const iconRef = useRef(null);

   useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Background
    tl.fromTo(
      bgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );
    

    tl.fromTo(
      iconRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1, ease: 'back.out(1.7)' },
      '-=0.3'
    );

     const lines = containerRef.current.querySelectorAll(".animated-line");

  lines.forEach((line) => {
    const length = line.getTotalLength();
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    tl.to(
      line,
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.2" // overlap timing
    );
  });


    // Lines animation
    // tl.fromTo(
    //   line1Ref.current,
    //   { x: -50, opacity: 0 },
    //   { x: 0, opacity: 1, duration: 0.5 },
    //   '-=0.5'
    // );
    // tl.fromTo(
    //   line2Ref.current,
    //   { y: 50, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.5 },
    //   '-=0.4'
    // );
    // tl.fromTo(
    //   line3Ref.current,
    //   { x: 50, opacity: 0 },
    //   { x: 0, opacity: 1, duration: 0.5 },
    //   '-=0.4'
    // );

    // Icon
    
  }, [containerRef, bgRef, line1Ref, line2Ref, line3Ref, iconRef]);
  return (
    <div className=' parent bg-[#1e1e1e95]   '  >
       <div className='flex justify-evenly  md:flex-row flex-col  !mt-15 items-center !p-3  '>
        <div className='w-10/12 lg:w-1/3 sm:text-center lg:text-start md:text-start h-100 flex flex-col  lg:justify-center md:justify-center md:w-2/3 '>
          <h4 className='!mb-2 text-2xl  font-bold'>
            About SquareUp
          </h4>
          <p className='h-36 '>
            SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. 
            We specialize in design, engineering, and project management, 
            helping businesses thrive in the digital landscape. At SquareUp, 
            we follow a structured and collaborative process to ensure the 
            successful delivery of exceptional digital products.
             Our process combines industry best practices, creative thinking, 
             and a client-centric approach.
          </p>
        </div>
          {/*box section */}
          <section 
          ref={containerRef}
          className="relative w-[340px] !mt-8 h-[300px]  ">
          {/* Background */}
      <img
        ref={bgRef}
        src={boxBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover !rounded-lg"
      />
      {/* Layer الشفاف الأخضر */}

      {/* <img
        ref={line1Ref}
        src={Line2}
        alt="line1"
        className="absolute top-0 left-1/2 transform rotate-270 w-[189px]   "
        style={{ transform: "translate(-90px, -95px)" }}
      /> */} 
       <LineSvg 

       className="absolute line1 top-0 left-1/2 transform rotate-90 w-[189px]   " 
       style={{ transform: "translate(88px, 89px)" }}/>
      {/* <img
        ref={line2Ref}
        src={Line2}
        alt="line2"
        className="absolute top-1/2 rotate-180 left-0 transform -translate-y-1/2 w-[189px]"
        style={{ transform: "ttranslate(4px, 0px)" }}
      /> */}
      <LineSvg 
       className="absolute line2 top-1/2 rotate-0 left-0 transform -translate-y-1/2 w-[189px]" 
       style={{ transform: "ttranslate(4px, 0px)" }}/>
      {/* <img
        ref={line3Ref}
        src={Line2}
        alt="line3"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[450deg] w-[189px]"
        style={{ transform: "translate(-91px, 0px)" }}
        
      /> */}
      <LineSvg 
       className="absolute line3 bottom-0 left-1/2 transform -translate-x-1/2 rotate-270 w-[189px]" 
       style={{ transform: "translate(87px, 3px)" }}
       />
      {/* <img
        ref={line3Ref}
        src={Line2}
        alt="line4"
        className="absolute  left-1/2 transform rotate-0 bottom-[148px]  w-[189px]"
        style={{ transform: "translate(-15px, 0px)" }}
      /> */}
      <LineSvg 
       className="absolute line4 left-1/2 transform rotate-180 bottom-[148px]  w-[189px]" 
       style={{ transform: "translate(19px, 0px)" }}
       />

      {/* Icon */}
      <img
        ref={iconRef}
        src={Logo}
        alt="icon"
        className="absolute top-1/2 left-1/2 w-17 h-17 z-30 transform -translate-x-1/2 -translate-y-1/2"
      />
                
          </section>

       </div>
    </div>
  )
}

export default OurStory