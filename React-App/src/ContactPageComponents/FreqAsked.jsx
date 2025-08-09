import React from 'react'
import BannerSection from '../Sections/BannerSection'
import bgBanner from '../ContactPageComponents/assets/Text Container.png'
import FAQSection from '../HomePageComponents/FAQSection'
import AccordionSection from '../Sections/AccordionSection'
function FreqAsked() {
  return (
    <div className=' flex  flex-col  bg-[#1e1e1e95]  w-full '>
        <div className='flex !mt-5 flex-col '>
       
        <BannerSection 
          
        image={bgBanner} 
        title='Frequently Asked Questions' 
        Desc='Discover the answers to frequently asked questions about our services and solutions.'/><br/><br/>
           <AccordionSection/>
        </div>
    </div>
  )
}

export default FreqAsked