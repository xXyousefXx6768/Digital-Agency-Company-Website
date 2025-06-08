import React from 'react'
import HeroSection from '../HomePageComponents/HeroSection'
import OurServicesSection from '../HomePageComponents/OurServicesSection'
import WhyChooseUsSection from '../HomePageComponents/WhyChooseUsSection'
import TestimonialsSection from '../HomePageComponents/TestimonialsSection'
import FAQSection from '../HomePageComponents/FAQSection'
import ContactSection from '../HomePageComponents/ContactSection'

function HomePage() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <HeroSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </section>
  )
}

export default HomePage