// src\app\home1\page.tsx
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import { Box } from "@/constant/boxdiv"
import { Productpic } from '@/constant/product'
// import { fetchData } from '@/script/migration'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home1 = async() => {
  return (
    <>
      <section className='w-full 
      xsm:overflow-x-hidden md:w-full'>
         <Navbar/>
         <Hero/>
              {/* four box */}
              <div className='w-full'>
              <h1 className='mt-[80px] xsm:mt-[50px] md:mt-[80px]
                 ml-[529px]  xsm:ml-[50px] md:ml-[529px]
                 mr-[545px]   xsm:mr-[50px] md:mr-[529px]
                mb-[36px] 
                text-[18px] '>What makes our brand different</h1>
              <div className='grid grid-cols-4 gap-[18px] mb-[82px] xsm:grid-cols-1 w-full xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
           
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

                            </div>
                                 <h1 className='p-[48px] text-3xl'>New ceramics</h1>
                            <div className='w-full grid grid-cols-4 gap-[20px] xsm:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                              
                        {/* child */}
                     {Productpic.map((item,index)=>{
                              return(
                                <div className='w-[305px] h-[462px] p-[48px]'  key={index}>
                                  <Image src={item.src} alt="delivery" width={305} height={462}></Image>
                                  <h1 className=' mt-[24px] mb-[12px]  text-[19px]'>{item.heading}</h1>
                                  <p>{item.price}</p>
                                </div>
                              )
                            })}
                     </div>
                     <div className=' w-[170px] h-[56px] mx-[635px] bg-[#c4baba]'><Link href={"/productlist2"}>
                     <button className='w-[170px] h-[56px]'>View  collection</button></Link></div>

                    <div className='w-full 
                    px-[80px] xsm:px-3 md:px-[80px]
                    mt-[64px] xsm:mt-6 md:mt-[64px]
                    mr-[1030px] '>
                        <h1 className='mb-[25px] text-2xl'>Our popular products</h1>
                        <div className='flex xsm:flex-col md:flex-row
                         gap-[20px] xsm:gap-[40px] md:gap-[20px]
                         '>
                            <div className='
                            w-[630px]  xsm:w-full  md:w-[630px]
                            h-[462px] xsm:h-full md:h-[462px]'>
                                <Image src={"/Large.png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='
                                mb-[8px] xsm:mb-[30px]
                                '>The Poplar suede sofa</p>
                                <p> £980</p>
                            </div>
                            <div className='
                            w-[305px] xsm:w-full  md:w-[305px]
                             h-[462px] xsm:h-full md:h-[462px]'>
                                <Image src={"/Photo1.png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='  mb-[8px] xsm:mb-[30px]'>The Dandy chair</p>
                                <p> £250</p>
                            </div>
                            <div className='
                             w-[305px] xsm:w-full  md:w-[305px]
                              h-[462px] xsm:h-full md:h-[462px]'>
                                <Image src={"/Parent (1).png"} alt='sofa' width={630} height={462} className='mb-[24px]'></Image>
                                <p className='  mb-[8px] xsm:mb-[30px]'>The Dandy chair</p>
                               <p> £250</p>
                            </div>

                        </div>
                    </div>


                    <div className='
                    pt-[52px] xsm:pt-[32px] md:pt-[52px]
                    pl-[93px]
                     pr-[74px]
                      pb-[65px] xsm:pb-3
                    px-2 xsm:px-2 md:px-[10px]
                    py-2 xsm:py-4 md:py-[10px]
                    '>
                       <Image src={"/Container (1).png"} alt="delivery" width={1440} height={704}></Image>
                    </div>
    
                    <div className='flex py-[80px] xsm:py-3 px-[0px]  flex-col xs:flex-col sm:flex-row md:flex-row '>
                    <div className='
                     pl-[64px]
                    pt-[64px]
                     pr-[75px] '>
                              <h1 className='mb-[12px] font-semibold'>From a studio in London to a global brand with <br />
                              over 400 outlets</h1>
                              <p className='mb-[100px] xsm:mb-[10px]  md:mb-[100px]'>
                                When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                                <br />
                                <br />
                                <br />
                                 Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                             <Link href={"/productlist2"}>
                             <button className=' mb-[54px] mr-[400px]  h-[56px] w-[170px] bg-[#c4baba] xsm:mb-2 md:mb-[54px]'>
                          View collection
                    </button>
                             </Link>
                    </div>

                    <div  className='w-[100%]  '>
                       <Image src={"/block.png"} alt='image' width={634} height={598}></Image>
                    </div>
                   
                </div>
                <Footer/>
      </section>
    </>
  )
}

export default Home1

