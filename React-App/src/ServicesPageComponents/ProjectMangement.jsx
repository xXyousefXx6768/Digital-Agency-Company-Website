import React from 'react'
import ServiceDetails from '../Sections/ServiceDetails'
import ServicesIconSection from '../Sections/ServicesIconSection' 
import Icon1 from './assets/ProjectMangementAssets/Icon.png'
import Icon2 from './assets/ProjectMangementAssets/Icon (1).png'
import Icon3 from './assets/ProjectMangementAssets/Icon (2).png'
import Icon4 from './assets/ProjectMangementAssets/Icon (3).png'
import Icon5 from './assets/ProjectMangementAssets/Icon (4).png'
import Icon6 from './assets/ProjectMangementAssets/Icon (5).png'
import Icon7 from './assets/ProjectMangementAssets/Icon (6).png'
import Icon8 from './assets/ProjectMangementAssets/Icon (7).png'
import Icon9 from './assets/ProjectMangementAssets/Icon (8).png'
import Icon10 from './assets/ProjectMangementAssets/Icon (9).png'
import Icon11 from './assets/ProjectMangementAssets/Icon (10).png'
import Icon12 from './assets/ProjectMangementAssets/Icon (11).png'

function ProjectMangement() {
  const items =[
    {
      icon:Icon1,
      title:'Requirements Gathering and Analysis'
    },
    {
      icon:Icon2,
      title:'Project Roadmap and Timeline Development'
    },
    {
      icon:Icon3,
      title:'Resource Allocation and Task Assignment'
    },
    {
      icon:Icon4,
      title:'Risk Assessment and Mitigation Strategies'
    },
    {
      icon:Icon5,
      title:'Iterative Development and Sprints'
    },
    {
      icon:Icon6,
      title:'Scrum or Kanban Methodology Implementation'
    },
    {
      icon:Icon7,
      title:'Regular Progress Updates and Demos'
    },
    {
      icon:Icon8,
      title:'Continuous Improvement and Feedback Incorporation'
    },
    {
      icon:Icon9,
      title:'Test Planning and Execution'
    },
    {
      icon:Icon10,
      title:'Functional and Usability Testing'
    },
    {
      icon:Icon11,
      title:'Performance and Security Testing'
    },
    {
      icon:Icon12,
      title:'Bug Tracking and Issue Resolution'
    },
  ]
  return (
    <div  className='w-full flex flex-col bg-[#1e1e1e95] '>
       <ServiceDetails title={'Project Management'} 
      btn={'Our design services include:'}
      Desc={'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.'} />

      <ServicesIconSection items={items} />
    </div>
  )
}

export default ProjectMangement