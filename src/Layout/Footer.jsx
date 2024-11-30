import { Facebook, Instagram, Locate, Mail, MapPinned, Phone, Send, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='w-full border-t border-gray-500 p-4 flex h-[50vh] relative bottom-0 flex-col gap-5 lg:gap-0 lg:flex-row'>
        <Holder>
            <h1 className='text-xl font-bold'>Contact us</h1>
            <ul className='w-full mt-3 flex flex-col'>
                <Tabs><MapPinned size={20}/> <h3 className='font-semibold text-sm'>Ouarzazate, Tarmigte, 45 NEwest 56</h3></Tabs>
                <Tabs><Phone size={20} /> <h3 className='font-semibold'>+212-566-7890</h3></Tabs>
                <Tabs><Mail size={20} /> <h3 className='font-semibold'>BOASHOP@email.com</h3></Tabs>
            </ul>
        </Holder>
        <Holder>
            <h1 className='text-xl font-bold'>Quick Links</h1>
            <ul className='w-full mt-3 flex flex-col'>
                <Tabs>Search</Tabs>
                <Tabs>Delivery Information</Tabs>
                <Tabs>About Us</Tabs>
                <Tabs>Privacy Policy</Tabs>
                <Tabs>Shipping</Tabs>
            </ul>
        </Holder>
        <Holder>
            <h1 className='text-xl font-bold'>Informations</h1>
            <ul className='w-full mt-3 flex flex-col'>
                <Tabs>Shipping & Refund</Tabs>
                <Tabs>Terms & Conditions</Tabs>
                <Tabs>Sitemap</Tabs>
                <Tabs>Policy for Buyers</Tabs>
                <Tabs>Policy for Sellers</Tabs>
            </ul>
        </Holder>
        <Holder>
            <h1 className='text-xl font-bold'>Newsletter</h1>
            <p className='mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='w-full h-20 flex items-center justify-center'>
                <div className='w-full h-[60%] flex items-center px-5 border-2 border-white rounded-md'>
                    <input type="text" placeholder='Enter your email' className='w-full placeholder:text-gray-300 h-full outline-none bg-transparent' />
                    <Send size={25} className='text-white hover:scale-110 cursor-pointer' />
                </div>
            </div>
            <div className='w-[70%] h-14 flex items-center justify-between'>
                    <Twitter size={20} className='text-white hover:scale-110 cursor-pointer' />
                    <Facebook size={20} className='text-white hover:scale-110 cursor-pointer' />
                    <Instagram size={20} className='text-white hover:scale-110 cursor-pointer' />
                    <Youtube size={20} className='text-white hover:scale-110 cursor-pointer' />
            </div>
        </Holder>
    </footer>
  )
}

export default Footer


const Holder = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col justify-start px-10 text-white'>{children}</div>
  )
}

const Tabs = ({children}) => {
  return (
    <li className='flex h-10 items-center gap-3'>
        {children}
    </li>
  )
}