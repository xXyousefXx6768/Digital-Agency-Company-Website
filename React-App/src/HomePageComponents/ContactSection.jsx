import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'


function ContactSection() {
  return (
    <section className='w-full flex flex-col bg-[#1e1e1e95]  relative bottom-22'>
      <BannerSection 
      title='Thank you for your Interest in SquareUp.' 
      Desc='We would love to hear from you and discuss how we can 
      help bring your digital ideas to life. 
      Here are the different ways you can get in touch with us.'
      image={continerBg}               
      />
      <section className='w-full flex justify-center !mt-8  gap-4 '>
          <div className='w-1/2 '>
          <form className="w-full !p-10 flex flex-col gap-8">

  {/* Full Name & Email */}
  <div className="flex gap-6 ">
    <div className="w-1/2 bg-[#262626]">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-transparent text-white 
        placeholder-white/60 text-[16px] !px-1 !py-3 
        !border-0 !border-b border-gray-600 focus:border-lime-400 
        focus:ring-0 focus:outline-none transition-all duration-300"
      />
    </div>
    <div className="w-1/2 bg-[#262626]">
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-transparent text-white placeholder-white/60 
        text-[16px] !px-1 !py-3 !border-0 !border-b border-gray-600 focus:border-lime-400 
        focus:ring-0 focus:outline-none transition-all duration-300"
      />
    </div>
  </div>

  {/* Checkboxes */}
  <div className="bg-[#262626] !px-6 !py-5 rounded-[10px] !border
   !border-[#333333] text-white shadow-md">
    <p className="!mb-4 text-[16px] font-semibold">
      Why are you contacting us?
      </p>
    <div className="flex flex-col bg-[#262626] gap-4">
      {['Web Design', 'Mobile App Design', 'Collaboration', 'Others'].map((label, i) => (
        <label key={i} className="flex items-center gap-3 text-[15px]">
          <input
            type="checkbox"
            className="appearance-none w-5 h-5 !border 
            !border-[#444] !rounded-sm bg-transparent 
            checked:bg-green-500 checked:border-green-500 
            focus:outline-none"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  </div>

  {/* Budget Slider */}
  <div className="bg-[#262626] !px-6 !py-5 !rounded-[10px] !border
   !border-[#333333] text-white shadow-md">
    <p className="!mb-4 text-[16px] font-semibold">Your Budget</p>
    <input
      type="range"
      min="1000"
      max="5000"
      defaultValue="3000"
      className="w-full accent-lime-400"
    />
    <div className="flex justify-between text-sm !mt-3 text-gray-400">
      <span>$1000</span>
      <span>$5000</span>
    </div>
  </div>

  {/* Message */}
  <div>
    <textarea
      placeholder="Your Message"
      className="w-full h-36 bg-transparent text-white placeholder-white/60 
      text-[16px] !px-1 !py-3 !border-0 !border-b !border-gray-600 focus:border-lime-400 
      focus:ring-0 focus:outline-none resize-none transition-all duration-300"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-lime-400 text-black !py-3 !px-10 !rounded-md
     w-fit self-center hover:bg-lime-300 transition font-medium"
  >
    Submit
  </button>
</form>

          </div>
      </section>
    </section>
  )
}

export default ContactSection
