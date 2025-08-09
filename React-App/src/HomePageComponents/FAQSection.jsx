import React from 'react'
import BannerSection from '../Sections/BannerSection'
import AccordionSection from '../Sections/AccordionSection'
import continerBg from '../HomePageComponents/assets/Container.png'


function FAQSection() {
  return (
   <section className='w-full flex flex-col bg-[#1e1e1e95]  relative bottom-22'>
    <BannerSection image={continerBg} 
    title='Frequently Asked Questions' 
    Desc='Discover the answers to frequently asked 
    questions about our services and solutions.'/>
    <AccordionSection />
   </section>
  )
}

export default FAQSection
