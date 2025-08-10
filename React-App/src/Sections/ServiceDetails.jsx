import React from 'react'

function ServiceDetails({title, Desc,btn}) {
  return (
    <div className=' font-barlow !p-4 w-full'>
        <h4 className='text-3xl font-bold '>
            {title}
        </h4>
        <p className='w-3/4 !mt-5'>
            {Desc}
        </p>
        <button className='!p-3  bg-[#1e1e1e95] font-barlow font-semibold  !mt-5'>
            {btn}
        </button>
        </div>
  )
}

export default ServiceDetails