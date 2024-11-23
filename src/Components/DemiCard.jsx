import { Rate } from 'antd'
import React from 'react'

function DemiCard({img, title, click, category, price, rating}) {
  return (
    <div onClick={click} className='w-[300px] h-[400px] cursor-pointer bg-gray-600/15 hover:scale-105 transition-all duration-150 ease-in-out rounded p-5 flex flex-col'>
        <img src={img} className='w-full h-[70%]' alt="" />
        <div className='w-full flex items-center mt-1 justify-end'>
            <Rate allowHalf className='text-sm ' disabled value={rating} />
        </div>
        <div className='w-full flex flex-col'>
                <p className='text-xs mb-1 font-light'>{category}</p>
                <h1 className='font-bold text-xl'>{title}</h1>
                <h1 className='font-bold text-yellow-400'>${price}.00</h1>
        </div>
    </div>
  )
}

export default DemiCard