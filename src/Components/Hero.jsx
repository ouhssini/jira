import React, { useEffect, useState } from 'react'

function Hero() {
    const [img, setImg] = useState('/slider1.png')

    if (img === '/slider1.png') {
        setTimeout(() => {
            setImg('/slider2.png')
        }, 3000)
    } else if (img === '/slider2.png') {
        setTimeout(() => {
            setImg('/silder3.png')
        }, 3000)
    } else if (img === '/silder3.png') {
        setTimeout(() => {
            setImg('/slider4.png')
        }, 3000)
    } else if (img === '/slider4.png') {
        setTimeout(() => {
            setImg('/slider5.png')
        }, 3000)
    } 
    else if (img === '/slider5.png') {
        setTimeout(() => {
            setImg('/slider1.png')
        }, 3000)
    } 
  return (
    <div className='w-full h-[60vh]'>
        <img src={img} className='w-full h-full object-cover' alt="" />
    </div>
  )
}

export default Hero