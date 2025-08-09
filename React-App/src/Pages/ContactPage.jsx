import React from 'react'
import ContactUsComponent from '../ContactPageComponents/ContactUsComponent'
import ContactInfoComponent from '../ContactPageComponents/ContactInfoComponent'
import FreqAsked from '../ContactPageComponents/FreqAsked'
import StartProjectSection from '../Sections/StartProjectSection'
function ContactPage() {
  return (
    <section className='flex flex-col  justify-center items-center'>
      <ContactUsComponent />
      <ContactInfoComponent />
      <FreqAsked />
      <StartProjectSection />
    </section>
  )
}

export default ContactPage
