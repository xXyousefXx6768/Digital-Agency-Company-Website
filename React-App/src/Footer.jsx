import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from './assets/Icons/FacebookIcon'
import TwitterIcon from './assets/Icons/TwitterIcon'
import LinkedinIcon from './assets/Icons/LinkedinIcon'
import MapMarkerIcon from './assets/Icons/MapMarkerIcon'
import PhoneAltIcon from './assets/Icons/PhoneAltIcon'
import MdEmail from './assets/Icons/MdEmailIcon'
import logo from './assets/logo.png'
function Footer() {
  
  const Items=[
      {
          name:"Home",
          path:"/"
      },
      {
         name:'Services',
         path:'/services'
      },
      {
        name:'About',
        path:'/about'
      },
      {
        name:'Contact',
        path:'/contact'
      }
  ]
    
  const ContactIcons =[
      {
         
          icon:<MapMarkerIcon />
      },
      {
          
          icon:<PhoneAltIcon />
      },
      {
         
          icon:<MdEmail />
      }
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
    <footer 
    className=" text-white !py-10 !px-6 !mt-20">
      <div 
      className="max-w-7xl mx-auto flex 
      flex-col md:flex-row justify-between 
      items-center gap-10 border-b border-gray-700 !pb-10">
       
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex  items-center gap-2">
            <img src={logo} className="w-36" alt="logo" />
          </div>
        </div>

        {/* Middle Section */}
        <div 
        className="flex gap-5 h-8  text-sm text-gray-400">
          {Items.map((item, index) => (
            <Link to={item.path} key={index} 
            href={item.path} 
            className="  !pb-1  hover:text-lime-400">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex  gap-4">
          <span className="font-semibold text-sm">Stay Connected</span>
          <div className="flex  gap-3">
            {SocialIcons.map((icon, index) => (
              <Link key={index} to={'#'} 
              className="hover:text-lime-400">
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center flex justify-between  !pt-6">

       <div className='flex gap-2'> 
          {
            ContactIcons.map((item, index) => (
              <div key={index} 
              className="flex items-center gap-2 text-sm text-gray-300">
                {item.icon}
                <span>hello@squareup.com</span>
              </div>
            ))
          }
        </div>
      

        <p className='text-xs text-gray-500'>
        © 2023 SquareUp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
