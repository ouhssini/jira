import { ShoppingBag, User } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <nav className='w-full flex px-10 justify-between items-center h-20'>
        <div className='w-[30%] h-full flex items-center'> <img className='w-[150px]' src="/logo.png" alt="" /> </div>
        <ul className='w-[40%] h-full flex items-center justify-center gap-10'>
            <Tabs>Home</Tabs>
            <Tabs>Shop</Tabs>
            <Tabs>About Us</Tabs>
            <Tabs>Contact Us</Tabs>
            <Tabs>Blog</Tabs>
        </ul>
        <div className='w-[30%] h-full flex items-center justify-end px-5 gap-10'>
            <User size={25} className='text-white' />
            <ShoppingBag size={25} className='text-white' />
        </div>
    </nav>
  )
}

export default Navbar


const Tabs = ({children}) => {
  return (
    <li>
        {children}
    </li>
  )
}