import React from 'react'
import BannerSection from '../Sections/BannerSection'
import bgBanner from '../ContactPageComponents/assets/Text Container.png'

function ContactUsComponent() {
  return (
    <div className='flex w-full'>
   <BannerSection image={bgBanner} title='Contact Us' Desc='Get in touch with us today and let us help you with any questions or inquiries you may have.'/><br/><br/>
    </div>
  )
}

export default ContactUsComponent