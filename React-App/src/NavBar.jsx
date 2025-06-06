import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'

function NavBar() {
  const NavItems=[
      {
          name:"Home",
          path:"/"
      },
      {
         name:'Services',
         path:'/services'
      },
      {
        name:'Works',
        path:'/works'
      },
      {
        name:'process',
        path:'/process'
      },
      {
        name:'About',
        path:'/about'
      },
      {
        name:'Carrers',
        path:'/careers'
      }
  ]
  return (
    <section className='flex justify-between items-center !p-2'>
    <img src={logo} alt="logo" className='w-28 ' />
    <div className='flex gap-4'>
    {
      NavItems.map((item,index)=>{
        return(
          <div key={index}>
          <Link className='focus:bg-[#262626] font-barlow  !p-3 !rounded-md' to={item.path}>{item.name}</Link>
        </div>
        )
      })
    }
    </div>
    <div className=' bg-[#9EFF00]  font-barlow font-semibold text-[#262626] !p-3 !rounded-md'>
     <Link to="/contact">
      Contact Us</Link>
    </div>
    </section>
  )
}

export default NavBar
