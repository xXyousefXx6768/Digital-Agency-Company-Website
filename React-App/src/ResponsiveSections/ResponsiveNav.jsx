import React, { useEffect, useContext, useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import { NavBarStatusContext } from '../Contexts/NavBarStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(CSSRulePlugin);

export default function ResponsiveNav() {
  const { isOpen, setIsOpen } = useContext(NavBarStatusContext)
  const navigate = useNavigate();
  const tl = useRef(null) // نخزن الـ timeline هنا

  const NavItems = [
    { name: "Home", path: "/" },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    gsap.set('.menu-item .ll', { y: 255 });
    const activeItem = CSSRulePlugin.getRule('.menu-item .ll::after');

    tl.current = gsap.timeline({ paused: true });

    tl.current.to('.overlay', {
      duration: 1.2,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      ease: 'power4.inOut'
    });

    tl.current.to('.menu-item .ll', {
      duration: 1.9,
      y: 0,
      ease: 'power4.out',
      stagger: 0.4,
    }, '-=1');

    tl.current.to(activeItem, {
      duration: 2.1,
      width: '100%',
      ease: 'power4.out',
      delay: 1.2,

    }, '<');

  }, []); // يتعمل مرة واحدة بس

  useEffect(() => {
  if (!tl.current) return;

  if (isOpen) {
    tl.current.play();
  } else {
    tl.current.reverse();
  }
}, [isOpen]);

  

  const handleNavClick = (path) => {
  if (tl.current) {
    tl.current.reverse().eventCallback("onReverseComplete", () => {
      setIsOpen(false);
      navigate(path);
    });
  } else {
    navigate(path);
  }
};

  return (
    <section className="h-screen transition-all duration-600 ease-out lg:hidden overlay flex justify-center fixed z-50 w-full bg-[#141414]">
  {/* X Icon */}
  <div className="absolute top-5 right-5 text-lime-400 cursor-pointer text-3xl">
    <FontAwesomeIcon icon={faXmark} onClick={() => handleNavClick(item.path)} />
  </div>

  <div className='menu flex flex-col justify-center items-center w-full'>
    {
      NavItems.map((item, index) => (
        <div className='menu-item !p-1 cursor-pointer overflow-hidden' key={index}>
          <Link
            className='text-amber-50 font-barlow ll hover:text-lime-400  hover:tracking-wider lg:text-9xl md:text-8xl sm:text-7xl block'
            
            onClick={() => handleNavClick(item.path)}
          >
            {item.name}
          </Link>
        </div>
      ))
    }
  </div>
</section>

  )
}
