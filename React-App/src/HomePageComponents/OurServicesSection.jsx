import React from 'react'
import spotifyLogo from '../HomePageComponents/assets/spotifyLogo.png'
import zapierLogo from '../HomePageComponents/assets/zapierLogo.png'
import SlackLogo from '../HomePageComponents/assets/SlackLogo.png'
import ZoomLogo from '../HomePageComponents/assets/ZoomLogo.png'
import AmazonLogo from '../HomePageComponents/assets/AmazonLogo.png'
import AdobeLogo from '../HomePageComponents/assets/AdobeLogo.png'

function OurServicesSection() {
  const infiniteScrollItems = [
    zapierLogo,
    spotifyLogo,
    ZoomLogo,
    SlackLogo,
    AmazonLogo,
    AdobeLogo
  ]
  return (
   <div className="w-full !py-12 relative bg-[#1e1e1e95] overflow-hidden">
      <section className="flex flex-col justify-center items-center gap-8">
        <button className="text-[14px] font-barlow !py-2 !px-6 !rounded-2xl bg-[#262626] text-white shadow-md">
          Trusted By 250+ Companies
        </button>

        <div className="relative w-full max-w-7xl overflow-hidden">
          {/* Shadow Left */}
          <div className="absolute left-0 top-0 h-full w-24   z-10" style={{
    background: 'linear-gradient(to right, rgb(18 18 18), transparent)'
  }} />
          {/* Shadow Right */}
          <div className="absolute right-0 top-0 h-full w-24  z-10"  style={{
    background: 'linear-gradient(to left, rgb(18 18 18), transparent)'
  }} />

          {/* Scrolling logos */}
          <div className="flex animate-[scroll_10s_linear_infinite] whitespace-nowrap gap-12">
            {[...infiniteScrollItems, ...infiniteScrollItems].map((item, index) => (
              <img
                key={index}
                src={item}
                alt="logo"
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
         
      </section>
    </div>
  )
}

export default OurServicesSection
