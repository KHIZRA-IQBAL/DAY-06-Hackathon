// src\app\about\page.tsx
'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/footer';
import { Box } from '@/constant/boxdiv';


function Productpage() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (  
  <>
  <section className='w-full xsm:overflow-x-hidden md:w-full'>
    <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-[136px]">
          {/* content-1 */}
          <div className="flex justify-between text-center gap-2  ml-[309px]">
            Free delivery on all orders over £50 with code easter checkout 
            <div className='text-right'> <Link href="/" className=" font-semibold hover:underline">
              X
            </Link></div>
          </div>
            </div>
      <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">
          <Link href="/">Avion</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="about" className="text-black">About Us</Link>
          <Link href="/about" className="text-black">Contact</Link>
          <Link href="/productlist2" className="text-black">Blog</Link>
          <div className='relative w-8 h-8'> <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
         <div className='relative w-8 h-8'><ShoppingCart className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div> 
         <div className='relative w-8 h-8'><CircleUserRound  className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 ' /></div>
               
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
        <Link href="/about" className="block text-white py-2">About Us</Link>
        <Link href="/contact" className="block text-white py-2">Contact</Link>
        <Link href="/services" className="block text-white py-2">Blog</Link>

      </div>
    </nav>
    <div className='flex items-center justify-center gap-[16px] xsm:ml-[10px] md:ml-[0px] mt-[20px] '>
          <nav className="xsm:flex md:flex items-center gap-8">
                 <Link
                    href={"/productlist2"}
                    className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black "
                  >
                    All Products
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Plant Pots
                  </Link>
                  <Link
                    href={"/"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Ceramics
                  </Link>
                  <Link
                    href={"/home2"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Tables
                  </Link>
                  <Link
                    href={"/productlist2"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Chairs
                  </Link>

                  <Link
                    href={"/productlist"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Crockery
                  </Link>

                  <Link
                    href={"/shoppingbasket"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Tableware
                  </Link>

                  <Link
                    href={"/about"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Cutlery
                  </Link>
                  </nav>
                  </div>

                  <div className='flex xsm:flex-col md:flex-row '>
                    <div className="flex flex-col items-center justify-center my-[80px] font-serif text-[#2A254B] width-[704px] 
                   xsm:ml-[20px] md:ml-[128px]
                   xsm:mr-[10px] md:mr-[160px]">
                        <h1 className='text-[40px] leading-[70px]'>A brand built on the love 
                          of craftmanship,
                        <br/> quality and outstanding customer service</h1>
                        
                    </div>
                    <button className='xsm:w-[300px] md:w-[170px]  h-[56px] xsm:mt-[40px] md:mt-[95px] xsm:mr-[20px] ml-[20px] md:mr-[128px] xsm:mb-[10px] md:mb-[133px] bg-[#c4baba]'>View  Products</button>
                  </div>

         <section className="xsm:mt-[10px] md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 xsm:p-4 md:p-8 ">
        <div className="flex flex-col justify-center bg-[#2A254B]">
          <h2 className="text-[24px] text-white leading-[33.6px] md:text-[30px] font-sans xsm:mt-[20px]
          md:mt-[64px] xsm:ml-[10px] md:ml-[64px] xsm:mr-[10px] md:mr-[187px] mb-[12px]">
          It started with a small idea
          </h2>
          <p className="xsm:mb-[80px] md:mb-[145px] text-white text-[16px] leading-[21.5px] 
          mt-[25px] 
          xsm:ml-[10px] md:ml-[64px] ">
          A global brand with local beginnings, our story begain in a small studio in South London in early 2014
          </p>
          <button className='xsm:w-[300px] md:w-[170px]  h-[56px] xsm:mr-[20px] md:mr-[0px]
         xsm:mt-[10px] md:mt-[41px] bg-[#c4baba] xsm:ml-[10px] md:ml-[64px] xsm:mb-[10px]  md:mb-[0px]'>View  collection</button>
        </div>
        <div>
          <Image
            src="/block.png"
            alt="pink Chair"
            width={720} height={603}
            className="w-full h-auto object-cover rounded-lg"/>
          
        </div>
       
      </section>

      <section className="xsm:mt[0px] md:mt-[60px] grid grid-cols-1 md:grid-cols-2 xsm:gap-1 md:gap-8 xsm:p-2 md:p-8">
      <div>
          <Image
            src="/overall.png"
            alt="Modern Chair"
            width={720}
            height={603}
          />
          </div>
        
        <div className="flex flex-col justify-center">
          <h2 className=" text-[#2A254B] text-[32px] leading-[44.8px] md:text-5xl font-sans mb-4">
          Our service isnt just personal, its actually
          hyper personally exquisite
          </h2>
         
          <p className="mt-[30px] text-[#2A254B]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available 
          for the mass market. <br/><br/><br/>
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design 
          so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
          <div className="text-left xsm:mt-[30px] md:mt-[176px] xsm:ml-[10px] md:ml-[64px]">
          <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
           Get in touch</button>
        </div>
        </div>
      
      </section>

      <h1 className='mt-[80px]
       ml-[529px] xsm:ml-[48px] md:ml-[120px] lg:ml-[529px]
        mr-[545px] xsm:mr-[10px] md:mr-[10px] lg:mr-[529px]
        mb-[36px]
        text-[18px] '>What makes our brand different</h1>
           
           {/* four box */}
           <div className='grid 
           grid-cols-4 xsm:grid-cols-1 xs:grid-cols-2 md:grid-cols-4
           gap-[18px] xsm:gap-[5px]  md:gap-[18px]
          mb-[82px] xsm:mb-[12px] xs:mb-[20px] md:mb-[82px]
           w-full 
           '>
          {Box.map((item,index)=>{
                         return(
                           <div className='w-[305px] h-[244px] p-[48px]'  key={index}>
                             <Image src={item.src} alt="delivery" width={48} height={48}></Image>
                             <h1 className=' mt-[24px] mb-[12px]  text-[19px]'>{item.heading}</h1>
                             <p>{item.paragraph}</p>
                           </div>
                         )
                       })}
                       </div>

                       <div className='
                       pt-[52px] xsm:pt-[10px] md:pt-[32px] lg:pt-[52px]
                        pl-[93px] xsm:pl-[10px] md:pl-[32px] lg:pl-[52px]
                        pr-[74px] xsm:pr-[10px] md:pr-[32px] lg:pr-[52px]
                        pb-[65px] xsm:pb-[10px] md:pb-[32px] lg:pb-[52px]'>
                       <Image src={"/Container (1).png"} alt="delivery" width={1440} height={704}></Image>
                    </div>



      <Footer/>
      </section>
    </>
  );
};


    


export default Productpage
