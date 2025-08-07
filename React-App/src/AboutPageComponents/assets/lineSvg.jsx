import React from 'react'
import { useRef } from 'react';
function LineSvg({className, style}) {
    const containerRef = useRef(null);
  return (
    <div ref={containerRef}>
<svg  
style={{...style}} className={className} 
width="319" height="3" viewBox="0 0 319 3" 
fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1.5" x2="319" y2="1.5" 
className="animated-line"
stroke="url(#paint0_linear_53_1244)" 
stroke-width="3"/>
<defs>
<linearGradient id="paint0_linear_53_1244" x1="319" 
y1="2.99999" x2="0" y2="3" gradientUnits="userSpaceOnUse">
<stop stop-color="#9EFF00"/>
<stop offset="1" stop-color="#9EFF00" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

    </div>
  )
}

export default LineSvg