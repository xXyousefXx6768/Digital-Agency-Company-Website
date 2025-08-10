import React from 'react'
import ServiceDetails from '../Sections/ServiceDetails'
import ServicesIconSection from '../Sections/ServicesIconSection'
import Icon from './assets/DesignAssets/Icon.png'
import Icon1 from './assets/DesignAssets/Icon (1).png'
import Icon2 from './assets/DesignAssets/Icon (2).png'
 import Icon3 from './assets/DesignAssets/Icon (3).png'
 import Icon4 from './assets/DesignAssets/Icon (4).png'
 import Icon5 from './assets/DesignAssets/Icon (5).png'
 import Icon6 from './assets/DesignAssets/Icon (6).png'
 import Icon7 from './assets/DesignAssets/Icon (7).png'
 import Icon8 from './assets/DesignAssets/Icon (8).png'
 import Icon9 from './assets/DesignAssets/Icon (9).png'
 import Icon10 from './assets/DesignAssets/Icon (10).png'
 import Icon11 from './assets/DesignAssets/Icon (11).png'
function DesignSection() {
  const items =[
    {
      icon:Icon,
      title:'User Research and Persona Development'
    },
    {
      icon:Icon1,
      title:'Information Architecture and Wireframing'
    },
    {
      icon:Icon2,
      title:'Interactive Prototyping and User Testing'
    },
    {
      icon:Icon3,
      title:'UI Design and Visual Branding'
    },
    {
      icon:Icon4,
      title:'Intuitive and Visually Appealing Interface Design'
    },
    {
      icon:Icon5,
      title:'Custom Iconography and Illustration'
    },
    {
      icon:Icon6,
      title:'Typography and Color Palette Selection'
    },
    {
      icon:Icon7,
      title:'Responsive Design for Various Devices'
    },
    {
      icon:Icon8,
      title:'Brand Strategy and Positioning'
    },
    {
      icon:Icon9,
      title:'User Experience Optimization'
    },
    {
      icon:Icon10,
      title:'Brand Guidelines and Style Guides'
    },
    {
      icon:Icon11,
      title:'Marketing Collateral Design (Brochures, Business Cards, etc.)'
    }
  ]
  return (
    <div className='w-full flex flex-col bg-[#1e1e1e95] '>
         <ServiceDetails title={'Design'} 
         Desc={"At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "} 
         btn={'Our design services include:'} />
         <ServicesIconSection  items={items} />
    </div>
  )
}

export default DesignSection