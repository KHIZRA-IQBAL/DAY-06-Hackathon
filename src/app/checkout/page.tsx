"use client";
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

interface ICard{
    name: string;
    image: string;
    price: number;
    quantity: number
}

const Checkout = () => {
    const [cardItem, setCardItem] = useState<ICard[]>([]);
    useEffect(() => {
     const data=  localStorage.getItem('card'); 
     const cart = data ? JSON.parse(data) : [];
     setCardItem(cart)
    },[])
    
    function handlePayment() {
       alert('Payment Successful')
       localStorage.setItem('card',JSON.stringify([]))
       setCardItem([])
      }
 

  return (
    <>
     <section className="w-full xsm:overflow-x-hidden md:w-full">
      <Navbar/>
      <div className="w-full h-auto md:h-full">
      <h1 className="xsm:pt-[64px] text-2xl pl-[20px] md:pl-[188px] pr-[20px] md:pr-[188px] pb-[48px] md:pb-[50px]">
      Your shopping Billing
    </h1>
  <div className='flex flex-col gap-10'>
  <div  className='flex justify-between xsm:justify-between md:justify-between pl-[20px] md:pl-[188px] pr-[20px] md:pr-[188px]  mb-[50px]'>
   <h2>Total</h2>
   <p>{cardItem.reduce((acc:number, item:ICard) => acc + Number(item.price * item.quantity), 0)}</p>
        <div className='flex gap-2 items-center'>
     <h1>Billing Address/Shipping</h1>
    <Link href={'/shipment'}>
    <button>
    <FaLongArrowAltRight/>
    </button>
    </Link>
     </div>
   </div>
  </div>
      <div className=" flex-col md:flex   md:ml-[188px] md:mr-[341px] mb-8  gap-10">
    {cardItem.map((item: ICard, index:number) => (
          <div className="flex flex-col md:flex-row items-center space-x-4" key={index}>
          <Image src={item.image} alt="product" width={120} height={120} className='xsm:w-full md:w-[109px]'/>
          <div className="flex flex-col ml-4">
            <h1 className="pt-2">{item.name}</h1>
            <p className="pt-2">Beautiful and simple this is <br /> one for the classics</p>
            <p className="pt-2">{`Price: ${item.price}`}</p>
            <p>{`Quantity: ${item.quantity}`}</p>
            <p>{`Total: ${item.price * item.quantity}`}</p>
          </div>
        </div>
    ))}
       <button onClick={handlePayment} className="bg-[#1d193a] text-white px-4 py-2 rounded-md">
       <p>Lets Payment</p>
       </button>
          </div>
          </div>
       <div>
    </div>
    <div>
       
    </div>
    <Footer/>
      </section>
    </>
  )
}

export default Checkout
