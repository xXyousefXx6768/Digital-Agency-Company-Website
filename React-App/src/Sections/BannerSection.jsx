import React from 'react'

function BannerSection({image,title,Desc}) {
  return (
    <div className="w-full bg-black text-white !py-16 relative">
                <div className="absolute inset-0 bg-[#ACFF24] opacity-20 mix-blend-hard-light pointer-events-none z-0" >
                    <img src={image} alt="bg" className="w-full h-full object-cover opacity-30" />
                </div>
                 <div className="relative z-10 max-w-7xl !mx-auto !px-7 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold !mb-5">{title}</h2>
                     <p className="text-gray-300 max-w-2xl  !mx-auto !mb-12">
                     {Desc}
                     </p>
                 </div>
                 
              </div>
  )
}

export default BannerSection
