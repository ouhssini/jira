import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
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