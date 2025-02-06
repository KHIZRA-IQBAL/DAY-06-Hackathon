// src\components\hero.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () =>{
  return (
    <>
      <section className='w-[100%]  xsm:overflow-x-hidden md:w-[100%] 
        h-[704px]
        xsm:h-[250px]
        md:h-[704px] '>
         <div className='flex xsm:flex flex-col md:flex-row
          w-[100%] xsm:overflow-x-hidden md:w-[100%]
         py-[60px] xsm:py-0 md:py-[60px]
         px-[80px] xsm:px-0 md:px-[80px]
        //  h-[704px] xsm:h-[250px] md:h-[704px]
          '>
          <div className='pt-[60px] pl-[60px] pr-[187px] bg-[#2A254B] text-white'>
            <h1 className='leading-[140%] text-[30px]'>The furniture brand for the <br />future, with timeless designs</h1>
            <Link href={"/productlist2"}><button className='w-[170px]  h-[56px] mt-[41px] bg-[#c4baba]'>View  collection</button></Link>
             <p className='mt-[196px] text-white'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
            
          </div>
            <Image src={"/Photo1.png"} alt="Hero" width={520} height={704} className='xsm:hidden md:block'></Image>
          </div>
         
      </section>
    </>
  )
}

export default Hero
