import React from 'react'
import OurServices from '../ServicesPageComponents/OurServices'
import DesignSection from '../ServicesPageComponents/DesignSection'
import Engineering from '../ServicesPageComponents/Engineering'
import ProjectMangement from '../ServicesPageComponents/ProjectMangement'
function ServicesPage() {
  return (
    <section className='flex flex-col font-barlow justify-center items-center'>
      <OurServices/>
      <DesignSection/>
      <Engineering/>
      <ProjectMangement/>

    </section>
  )
}

export default ServicesPage
