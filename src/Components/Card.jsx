import React from 'react'
import { Rate } from 'antd';
function Card({ image, title, price, reviews, click }) {
    return (
        <div onClick={click} className='w-[300px] bg-neutral-800 rounded cursor-pointer hover:shadow hover:scale-105 transition-all duration-150 ease-in-out basis-80 h-[60vh] gap-2 flex flex-col items-center shadow-white p-4'>
            <img src={image} className='w-full h-[70%] rounded-xl object-fill' alt="" />
            <div className='w-full h-full flex flex-col items-center gap-2'>
                <div className='w-full flex items-center justify-center'>
                    <Rate disabled className='text-md' allowHalf defaultValue={reviews} />
                    <h1 className='font-bold text-md'>({reviews})</h1>
                </div>
                <h1 className='font-bold'>{title}</h1>
                <h1 className='font-bold text-md text-yellow-500'>${price}</h1>
            </div>
        </div>
    )
}

export default Card