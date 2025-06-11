import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
function TestimonialsSection() {
  return (
    <section className='w-full  relative bottom-22'>
      <BannerSection 
      image={continerBg} 
      title='What our Clients say About us' 
      Desc="At SquareUp, 
      we take pride in delivering exceptional 
      digital products and services that drive 
      success for our clients. 
      Here's what some of our satisfied clients have to say about their experience working with us" />
    </section>
  )
}

export default TestimonialsSection
