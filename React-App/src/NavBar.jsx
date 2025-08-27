import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { NavBarStatusContext } from './Contexts/NavBarStatus.jsx'
import ResponsiveNav from './ResponsiveSections/ResponsiveNav.jsx'


function NavBar() {
  const {isOpen,setIsOpen}=useContext(NavBarStatusContext)
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
        name:'About',
        path:'/about'
      }
  ]
  return (
    <>
    <section className='flex  justify-between bg-[#1e1e1e95]  items-center !p-3'>
    <img src={logo} alt="logo" className='w-28 ' />
    <div className=' lg:flex  sm:hidden   gap-4 '>
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
    <div className=' bg-[#9EFF00] lg:flex  sm:hidden font-barlow font-semibold text-[#262626] !p-3 !rounded-md'>
     <Link to="/contact">
      Contact Us</Link>
    </div>
     {/* Hamburger */}
    <div className=' lg:hidden  sm:flex '>
    <FontAwesomeIcon onClick={()=>setIsOpen(!isOpen)} icon={faBars} className='text-[#9EFF00] '/>
    </div>
    </section>
 </>
  )
}

export default NavBar
