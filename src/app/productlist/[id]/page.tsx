// // src\app\productlist\[id]\page.tsx
// import Navbarproduct from '@/components/productlisting/navbar';
// import Productlisting from '@/components/productlisting/productlist';
// import React from 'react'


// const Product = async({params}:{params: Promise<{id:number}>}) => {
//   const {id} = await params
//   return (
//     <>
//     <section  className='w-full xsm:overflow-x-hidden md:w-full'>
//     <Navbarproduct/>
//     <Productlisting cardid={id}/>
//     </section>
//     </>
//   )
// }

// export default Product;

// src\components\productlisting\productlist.tsx
import React from 'react'
import Image from 'next/image'
import { Productpic } from '@/constant/product'
import { Box } from '@/constant/boxdiv'
import Footer from '@/components/footer'
import Link from 'next/link'



const Productlisting = async({searchParams}:{searchParams:Promise<{
  image:string,name:string,price:number,description:string,dimensions:{width:string,height:string,depth:string}}>}) => {
    const {name,price,image,description,dimensions}=await searchParams
    // console.log(dimensions);
  return (
    <>
     <section className='w-full'>
         <div className='flex  
         xsm:flex-col xs:flex-col sm:flex-col md:flex-row
         xsm:hidden xs:hidden sm:hidden md:flex'>
          <Image src={image|| "/Photo1.png"} alt="product" width={721} height={759} className='w-[721px] h-[759px] p-[48px]'></Image>
          <div className='my-[51px] ml-[62px] mr-[55px]'>
             <h1 className='mb-[13px] text-2xl'>{name}</h1>
             <p className='mb-[54px]'>{price}</p>
             <h1>Description</h1>
            <p className='mb-[20px]'>{description}</p>
              <ul className='mb-[30px]'>
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
              <div className='pt-[20px] pr-[321px] pb-[15px]'>
                           <h1 className='mb-[28px]'>Dimensions</h1>
                         <div className='flex flex-col gap-[12px] mb-[22px]'>
                         <div className='flex gap-[57px]'>
                               <p>Height</p>
                               <p>Width</p>
                               <p>Depth</p>
                           </div>
                           <div className='flex gap-[57px]'>
                               <p>{dimensions.width}</p>
                               <p>{dimensions.height}</p>
                               <p>{dimensions.depth}</p>
                           </div>
                         </div>


                         <div className='flex gap-[22px]  items-center'>
                              <h1>Amount</h1>
                              <button className='px-[56px] py-[12px]  bg-slate-300'>1</button>

                             <Link href={`/shoppingbasket?name=${name}&price=${price}&image=${image}&description=${description}`}>
                              <button className='py-[10px] px-[32px] w-[165px] h-[56px] bg-[#4E4D93] text-white ml-[170px]'>Add to cart</button>
                             </Link>
                         </div>



                         
                           

              </div>

          </div>
           
         </div>

         <div className='w-full'>
         <h1 className='p-[48px] 
         text-3xl'>You might also like</h1>
                            <div className='w-full grid 
                            xsm:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                            gap-[20px] '>
                              
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
         </div>
         <div className=' w-[170px] h-[56px] mx-[635px] bg-[#c4baba]'> <button className='w-[170px] h-[56px] '>View  collection</button> </div>
         <h1 className='text-center  pt-[60px] xsm:pl-[25px] pr-[92px] md:p-[48px] text-2xl'>What makes our brand different</h1>
         <div className='grid 
                            xsm:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                            gap-[18px] 
                            mb-[82px]  xsm:mb-[20px] md:mb-[82px]
                            w-full '>
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


                            
                    <div className='pt-[52px] 
                    pl-[93px] xsm:pl-[20px] md:pl-[93px]
                    pr-[74px] xsm:pr-[20px] md:pr-[74px]
                     pb-[65px] xsm:pb-[20px] md:pb-[65px]'>
                       <Image src={"/Container (1).png"} alt="delivery" width={1440} height={704}></Image>
                    </div>

                    <Footer/>
     </section>
          
      
    </>
  )
  }

export default Productlisting
