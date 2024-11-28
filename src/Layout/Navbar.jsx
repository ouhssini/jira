import { Menu, ShoppingBag, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className='w-full flex lg:px-10 justify-between items-center h-20'>
      <div className='w-[50%] px-2 lg:px-0 lg:w-[30%] h-full flex items-center'> <img className='w-[150px]' src="/logo.png" alt="" /> </div>
      <ul className='hidden lg:w-[40%] lg:h-full lg:flex lg:items-center lg:justify-center lg:gap-10'>
        <Tabs>Home</Tabs>
        <Tabs>Shop</Tabs>
        <Tabs>About Us</Tabs>
        <Tabs>Contact Us</Tabs>
        <Tabs>Blog</Tabs>
      </ul>
      <div className='w-[50%] gap-2 lg:w-[30%] h-full flex items-center justify-end px-5 lg:gap-10'>
        <User className='text-white lg:size-8 size-8' />
        <ShoppingBag className='text-white lg:size-8 size-8' />
        <Menu onClick={() => setOpen(!open)} className='text-white lg:size-8 size-8 lg:hidden' />
        {open && <MobileView click={() => setOpen(false)} />}
      </div>
    </nav>
  )
}

export default Navbar


const Tabs = ({ children }) => {
  return (
    <li>
      {children}
    </li>
  )
}

const MobileView = ({ click }) => {
  const tabs = ['Home', 'Shop', 'About Us', 'Contact Us', 'Blog']
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
      exit={{ x: '100%', transition: { duration: 0.5, ease: 'easeInOut' } }}
      className='w-[80%] z-[100] h-screen bg-neutral-900 absolute top-0 right-0 flex flex-col lg:hidden'>
      <div className='w-full h-20 flex items-center justify-end px-4'>
        <X onClick={click} className='text-white lg:size-8 size-8' />
      </div>
      <ul className='w-full h-[80%] flex gap-6 flex-col px-4 justify-center'>
        {tabs.map((tab) => (<li className='text-2xl hover:border-b-2 hover:border-yellow-600 uppercase transition-all duration-300 ease-in-out'>{tab}</li>))}
      </ul>
    </motion.div>
  )
}