import React, { Children } from 'react'
import Navbar from '../Components/Navbar'

function Layout({children}) {
  return (
    <section className='w-full flex flex-col'>
        <Navbar />
        <main className='w-full h-full'>
            {children}
        </main>
    </section>
  )
}

export default Layout