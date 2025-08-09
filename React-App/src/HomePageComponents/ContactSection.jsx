import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
import Form from '../Sections/Form'


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
      <Form />
    </section>
  )
}

export default ContactSection
