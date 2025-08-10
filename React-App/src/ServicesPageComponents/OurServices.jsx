import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
function OurServices() {
  return (
    <div className='flex w-full'>
    <BannerSection image={continerBg} 
    title='Our Services' 
    Desc='Transform your brand with our innovative digital solutions that captivate and engage your audience.'/><br/><br/>
    </div>
  )
}

export default OurServices