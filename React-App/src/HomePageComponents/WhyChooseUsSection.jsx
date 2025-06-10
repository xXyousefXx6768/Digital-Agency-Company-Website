import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'

function WhyChooseUsSection() {
  return (
    <section className='w-full relative bottom-22'>
      <BannerSection 
      title='Why Choose SquareUp?' 
      Desc='Experience excellence 
      in digital craftsmanship with 
      our team of skilled professionals 
      dedicated to delivering exceptional results.' image={continerBg}  />
    </section>
  )
}

export default WhyChooseUsSection
