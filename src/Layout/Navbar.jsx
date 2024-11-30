import { Menu, ShoppingBag, User, X } from 'lucide-react'
import React, { useContext, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../lib/CartContext'

function Navbar({ }) {
  const [open, setOpen] = useState(false)
  const { panier } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className='w-full flex lg:px-10 justify-between items-center h-20'>
      <div className='w-[50%] px-2 lg:px-0 lg:w-[30%] h-full flex items-center'> <img className='w-[150px]' src="/logo.png" alt="" /> </div>
      <ul className='hidden lg:w-[40%] lg:h-full lg:flex lg:items-center lg:justify-center lg:gap-10'>
        <Tabs path={'/'}>Home</Tabs>
        <Tabs path={'/shop'}>Shop</Tabs>
        <Tabs path={'/about'}>About Us</Tabs>
        <Tabs path={'/contact'}>Contact Us</Tabs>
        <Tabs path={'/blog'}>Blog</Tabs>
      </ul>
      <div className='w-[50%] gap-2 lg:w-[30%] h-full flex items-center justify-end px-5 lg:gap-10'>
        <User className='text-white lg:size-8 size-8' />
        {panier.length == 0 ? <ShoppingBag onClick={() => navigate('/panier')} className='text-white lg:size-8 size-8 cursor-pointer' /> :
          <div onClick={() => navigate('/panier')} className='text-white lg:size-8 size-8 relative'>
            <span class="items-center absolute top-0 right-0 bg-red-50 w-4 flex justify-center h-4 text-xs font-medium rounded-full text-red-700 ring-1 ring-inset ring-red-600/10">{panier.length}</span>
            <ShoppingBag className='text-white lg:size-8 size-8 cursor-pointer' />
          </div>
        }
        <Menu onClick={() => setOpen(!open)} className='text-white lg:size-8 size-8 lg:hidden' />
        {open && <MobileView click={() => setOpen(false)} />}
      </div>
    </nav>
  )
}

export default Navbar


const Tabs = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      end
      key={children}
      className={({ isActive }) =>
        isActive
          ? 'border-b-4 border-yellow-600 text-white uppercase font-semibold'
          : 'text-white uppercase font-semibold lg:text-sm hover:border-b-2 hover:border-yellow-600 transition-all duration-300 ease-in-out'
      }
    >
      {children}
    </NavLink>
  )
}

const MobileView = ({ click }) => {
  const tabs = ['Shop', 'About Us', 'Contact Us', 'Blog']
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
        <Link to={'/'} className='text-2xl hover:border-b-2 hover:border-yellow-600 uppercase transition-all duration-300 ease-in-out'>home</Link>
        {
          tabs.map((tab) => (<Link key={tab} to={`/${tab.toLowerCase()}`} className='text-2xl hover:border-b-2 hover:border-yellow-600 uppercase transition-all duration-300 ease-in-out'>{tab}</Link>))
        }
      </ul>
    </motion.div>
  )
}