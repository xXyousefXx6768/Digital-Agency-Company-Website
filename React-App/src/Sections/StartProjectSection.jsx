import React from 'react'
import AbstractDesign from '../assets/Abstract Design.png'
function StartProjectSection() {
  return (
    <div className='flex flex-col items-center !p-6  bg-[#1e1e1e95] gap-4 w-full'>
        <div className='flex items-center'>
        <img src={AbstractDesign} className='w-26 h-26'/>
         <div className=' w-3/4 opacity-25 !ml-4'>
            <p>
                Today, 
                SquareUp Continues to Thrive as a Leading Digital Product Agency.....
            </p>
            <p>
                Combining the power of design, engineering, and project management 
                to create transformative digital experiences. 
                They invite you to join them on their journey and discover 
                how they can help bring your digital ideas to life.
            </p>
         </div>
        </div>
         <section className='lg:flex-row flex-col flex gap-4 items-center'>
              <p className='opacity-25'>
                Welcome to SquareUp
              </p>
              <div className='bg-[#262626] rounded-2xl !p-3'>
                <p>
                    Where collaboration, Expertise, and 
                    Client-Centricity Intersect to Shape the Future of Digital 
                    Innovation.
                </p>
              </div>
              <button className='bg-[#9EFF00] !p-3 rounded-[10px] font-barlow font-semibold text-[#262626]'>
                Start Project
              </button>
         </section>
    </div>
  )
}

export default StartProjectSection