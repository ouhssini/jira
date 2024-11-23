import React from 'react'

function DemiCard({img}) {
  return (
    <div className='w-[350px] h-[400px] flex flex-col'>
        <img src={img} className='w-full h-[50%]' alt="" />
    </div>
  )
}

export default DemiCard