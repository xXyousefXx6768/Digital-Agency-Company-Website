import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
import AboutSquareUp from '../AboutUsComponents/AboutSquareUp'
import CTASection from '../AboutUsComponents/CTASection'
import OurStory from '../AboutUsComponents/OurStory'
function AboutPage() {
  return (
     <section className='flex flex-col font-barlow  justify-center items-center'>
      <AboutSquareUp/>
      <OurStory/>
      <CTASection/>
     </section>
    //  <section className='w-full'>
    //     <BannerSection title='About Us' image={continerBg} Desc='Welcome to SquareUp, 
    //     where collaboration, expertise, and client-centricity 
    //     intersect to shape the future of digital innovation.'/><br/><br/>
    //     </section>
  )
}

export default AboutPage
