import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
export default function AboutSquareUp() {
  return (
    <section className='w-full flex '>
      <BannerSection title='About Us' image={continerBg} Desc='Welcome to SquareUp, 
        where collaboration, expertise, and client-centricity 
       intersect to shape the future of digital innovation.'/><br/><br/>
      </section>
  )
}
