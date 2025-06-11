import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
import ExpertiseIcon from '../HomePageComponents/assets/ExpertiseIcon.png'
import ClientCentricApproachIcon from '../HomePageComponents/assets/ClientCentricApproachIcon.png'
import ResultsDrivenSolutionsIcon from '../HomePageComponents/assets/ResultsDrivenSolutionsIcon.png'
import CollaborativePartnershipIcon from '../HomePageComponents/assets/CollaborativePartnershipIcon.png'

function WhyChooseUsSection() {

  const reasons = [
  {
    title: "Expertise",
    desc: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends.",
    icon: ExpertiseIcon,
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize our clients and their strategic needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements.",
    icon: ClientCentricApproachIcon,
  },
  {
    title: "Results-Driven Solutions",
    desc: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth.",
    icon: ResultsDrivenSolutionsIcon,
  },
  {
    title: "Collaborative Partnership",
    desc: "We form long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support and updates.",
    icon: CollaborativePartnershipIcon,
  },
];
  return (
    <section className='w-full relative bottom-22'>
      <BannerSection 
      title='Why Choose SquareUp?' 
      Desc='Experience excellence 
      in digital craftsmanship with 
      our team of skilled professionals 
      dedicated to delivering exceptional results.' image={continerBg}  />
       <div className='flex flex-wrap justify-center items-center w-full'>
        {/** 4 sections here */}
        <div className="w-full !mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 ">
        {reasons.map((item, index) => (
          <div key={index} className="bg-[#1e1e1e95] !p-6  shadow-md flex flex-col gap-4 border border-[#2C2C2C]">
            <div className='flex items-center'>
               <div className='bg-[#262626] icon rounded-xl w-[58px] !p-4  shadow-inner'>
              <img src={item.icon} alt="icon" className="h-6 w-6 object-contain" />
              </div>
            <h3 className="text-xl !ml-3 font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400 !mt-4 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
       </div>
    </section>
  )
}

export default WhyChooseUsSection
