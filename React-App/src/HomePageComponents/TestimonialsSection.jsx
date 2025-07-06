import React from 'react'
import BannerSection from '../Sections/BannerSection'
import continerBg from '../HomePageComponents/assets/Container.png'
import Profile from '../HomePageComponents/assets/Profile.png'
import Profile1 from '../HomePageComponents/assets/Profile1.png'
import Profile2 from '../HomePageComponents/assets/Profile2.png'
import Profile3 from '../HomePageComponents/assets/Profile3.png'
import Profile4 from '../HomePageComponents/assets/Profile4.png'
import Profile5 from '../HomePageComponents/assets/Profile5.png'
import { text } from '@fortawesome/fontawesome-svg-core'
function TestimonialsSection() {


   const testimonials = [
  {
    name: "John Smith",
    title: "CEO of Chic Boutique",
    text: "SquareUp has been instrumental in transforming our online presence. Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn’t be happier.",
    image: Profile,
  },
  {
    name: "Sarah Johnson",
    title: "Founder of HungryBites",
    text: "Working with SquareUp was a breeze. They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.",
    image: Profile1,
  },
  {
    name: "Mark Thompson",
    title: "CEO of EventMasters",
    text: "SquareUp developed a comprehensive booking and reservation system for our event management company. Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project.",
    image: Profile2,
  },
  {
    name: "Laura Adams",
    title: "COO of ProTech Solutions",
    text: "ProTech Solutions turned to SquareUp to automate our workflow. They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors.",
    image: Profile3,
  },
  {
    name:'Michael Anderson',
    title:'Founder of Dream Homes Realty.',
    text: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings.',
    image:Profile4
  },
  {
    name:'Emily Turner',
    title:'CEO of FitLife Tracker',
    text:'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
    image:Profile5

  }
];


  return (
    <section className='w-full bg-[#1e1e1e95]  relative bottom-22'>
      <BannerSection 
      image={continerBg} 
      title='What our Clients say About us' 
      Desc="At SquareUp, 
      we take pride in delivering exceptional 
      digital products and services that drive 
      success for our clients. 
      Here's what some of our satisfied clients have to 
      say about their experience working with us" />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 !mt-8  gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" !p-6  shadow-md">
              <h4 className='font-bold text-[#D8FF99] !mb-6 !p-2 text-2xl'>
                {testimonial.title}
              </h4>
              <p className="text-white h-40 !p-2">{testimonial.text}</p>
              
              <div className="flex items-center justify-between  w-full !rounded-2xl bg-[#262626] !p-5 !mt-8">
                <div className='flex items-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-2xl !mr-4"
                />
                <div className='justify-around flex flex-col'>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-white">{testimonial.title}</p>
                </div>
                </div>
                 <button className='bg-[#303030] !p-4  ' >
                  Open Website
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </section>
  )
}

export default TestimonialsSection
