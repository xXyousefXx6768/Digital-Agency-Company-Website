import React from 'react'
import Form from '../Sections/Form'
import { Link } from 'react-router-dom'
import FacebookIcon from '../assets/Icons/FacebookIcon'
import LinkedinIcon from '../assets/Icons/LinkedinIcon'
import TwitterIcon from '../assets/Icons/TwitterIcon'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
function ContactInfoComponent() {
  const contactInfo= [
    {
      icon: faPhone,
      text: "+91 91813 23 2309"
    },
    {
      icon: faLocationDot,
      text: "Get Location"
    },
    {
      icon: faEnvelope,
      text: "hello@squareup.com"
    },
  ]

  const SocialIcons =[
      {
          
          icon:<FacebookIcon />
      },
      {
          
          icon:<TwitterIcon />
      },
      {
          
          icon:<LinkedinIcon />
      }

  ]
  return (
    <div className='flex flex-col   bg-[#1e1e1e95] gap-4 w-full'>
        <div className='flex flex-wrap !p-7 items-center justify-center gap-4 w-full'>
      {
        contactInfo.map((item,index) => {
          return (
            <div className='flex  bg-[#262626] !p-4  rounded-[7px] items-center' key={index}>
              <FontAwesomeIcon icon={item.icon} className='w-7 h-7 text-2xl text-[#9EFF00]' />  
              <p>{item.text}</p>
            </div>
          )
        })
      }
       <Form/>
        </div>
        <div className='flex flex-wrap  items-center   justify-evenly'>
           
                <div className='flex items-center    !p-6 rounded-2xl !border border-[#4f4e4e]  '>
                  <p>
                    Operating Days
                  </p>
                  <div className='bg-[#262626] !p-4 !ml-5  rounded-[7px] items-center'>
                      Monday to Friday
                  </div>
                </div>
              {/* Stay Connected */}
             <div className="flex items-center !p-5 rounded-2xl !border border-[#4f4e4e]  gap-4">
          <span className="font-semibold text-sm">Stay Connected</span>
          <div className="flex  gap-3">
            {SocialIcons.map((icon, index) => (
                 <div 
             className="relative rounded-[7px] w-[58px] 
             h-[58px] !p-4 overflow-hidden  icon-2 bg-[#1e1e1e]">
                <div 
            className="absolute inset-0 bg-gradient-to-b 
           from-[#83857f] to-transparent opacity-16 z-0">
                </div>
              <Link key={index} to={'#'} 
              className="hover:text-lime-400">
                {icon.icon}
              </Link>
            </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default ContactInfoComponent