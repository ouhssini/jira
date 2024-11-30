import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ScrollRestoration } from 'react-router-dom'

function Layout({ children }) {
  return (
    <section className='w-full flex flex-col'>
      <Navbar />
      <main className='w-full h-full'>
        
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout