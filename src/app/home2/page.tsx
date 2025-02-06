// src\app\home2\page.tsx
import Herosection from '@/components/home2/herosection'
import Navbar from '@/components/navbar'
import React from 'react'

const Home2 = () => {
  return (
    <>
     <section className='w-full  xsm:overflow-x-hidden md:w-full'>
        <Navbar/>
        <Herosection/>
    </section> 
    </>
  )
}

export default Home2
