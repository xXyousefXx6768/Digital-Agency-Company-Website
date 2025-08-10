import React from 'react'
import ServiceDetails from '../Sections/ServiceDetails'
import ServicesIconSection from '../Sections/ServicesIconSection'
import Icon1 from './assets/EngineeringAssets/Icon10 (1).png'
import Icon2 from './assets/EngineeringAssets/Icon10 (2).png'
import Icon3 from './assets/EngineeringAssets/Icon10 (3).png'
import Icon4 from './assets/EngineeringAssets/Icon10 (4).png'
import Icon5 from './assets/EngineeringAssets/Icon10 (5).png'
import Icon6 from './assets/EngineeringAssets/Icon10 (6).png'
import Icon7 from './assets/EngineeringAssets/Icon10 (7).png'
import Icon8 from './assets/EngineeringAssets/Icon10 (8).png'
import Icon9 from './assets/EngineeringAssets/Icon10 (9).png'
import Icon10 from './assets/EngineeringAssets/Icon10 (10).png'
import Icon11 from './assets/EngineeringAssets/Icon10 (11).png'
import Icon12 from './assets/EngineeringAssets/Icon10 (12).png'
function Engineering() {
  const items =[
    {
      icon:Icon1,
      title:'Front-End Development (HTML, CSS, JavaScript)'
    },
    {
      icon:Icon2,
      title:'Back-End Development (PHP, Python, Ruby)'
    },
    {
      icon:Icon3,
      title:'Content Management System (CMS) Development (WordPress, Drupal)'
    },
    {
      icon:Icon4,
      title:'Native iOS and Android App Development'
    },
    {
      icon:Icon5,
      title:'Cross-Platform App Development (React Native, Flutter)'
    },
    {
      icon:Icon6,
      title:'App Prototyping and UI/UX Design Integration'
    },
    {
      icon:Icon7,
      title:'Database Management (MySQL, MongoDB, PostgreSQL)'
    },
    {
      icon:Icon8,
      title:'Enterprise Software Development'
    },
    {
      icon:Icon9,
      title:'Custom Web Application Development'
    },
    {
      icon:Icon10,
      title:'Integration with Third-Party APIs and Systems'
    },
    {
      icon:Icon11,
      title:'Legacy System Modernization and Migration'
    },
    {
      icon:Icon12,
      title:'Legacy System Modernization and Migration'
    }
  ]
  return (
    <div  className='w-full flex flex-col bg-[#1e1e1e95]'>
      <ServiceDetails title={'Engineering'} 
      btn={'Our design services include:'}
      Desc={'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.'} />

      <ServicesIconSection items={items} />

      </div>
  )
}

export default Engineering