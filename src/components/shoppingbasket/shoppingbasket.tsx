"use client"
// src\components\shoppingbasket\shoppingbasket.tsx
import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../navbar'
import Image from "next/image";
import Footer from '../footer';
import { useSearchParams ,useRouter} from 'next/navigation';
import { IoTrashOutline } from 'react-icons/io5';
import Link from 'next/link';
import { sanityUserPost } from '@/services/userApi';

interface IProduct{
  name: string;
  image: string;
  description: string;
  quantity: number;
  price: number
 }
const Shoppingbasket = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
   const [cardItem, setCardItem] = useState<IProduct[]>([]);
   console.log("Search ",searchParams);

   useEffect(() => {
    sanityUserPost();
   }, []);
   
  //  const [qty, setQty] = useState(1);
   useEffect(() => {
    // localStorage.setItem("card",JSON.stringify(cardItem))
   const card = localStorage.getItem('card')
   const updatedCard = card ? JSON.parse(card) : [];
   const name=searchParams.get('name');
  const image=searchParams.get('image');
  const description=searchParams.get('description');
  const price=searchParams.get('price')
  if(name && image && description && price){
    const isDuplicate= updatedCard.some((item:IProduct) => item.name === name);
    if(!isDuplicate){
    updatedCard.push({
      name,
      image,
      description,
      price,
      quantity:1
    })
    }
    localStorage.setItem('card',JSON.stringify(updatedCard))
    setCardItem(updatedCard);
    router.replace("/shoppingbasket")
  }
}, [searchParams,router]);

function handleremoveitem(index:number){
  const  removecard=[...cardItem]
  removecard.splice(index,1)
  localStorage.setItem('card',JSON.stringify(removecard))
  setCardItem(removecard)
}

function handleQuantity(index:number,num:number){
  const qtyArray=[...cardItem]
  qtyArray[index].quantity=+num
  localStorage.setItem('card',JSON.stringify(qtyArray))
  setCardItem(qtyArray)
}
  return (
    <>
  <section className="w-full xsm:overflow-x-hidden md:w-full">
  <Navbar />
  {/* Maindiv */}
  <div className="w-full h-auto md:h-full">
    <h1 className="xsm:pt-[64px] text-2xl pl-[20px] md:pl-[188px] pr-[20px] md:pr-[188px] pb-[48px] md:pb-[50px]">
      Your shopping cart
    </h1>

    {/* Table Header */}
    <div className="flex items-center space-x-4 xsm:hidden md:flex md:space-x-10 md:pl-[188px] md:pr-[188px] ">
      <p className="w-[40%]">Product</p>
      <p className="w-[20%]">Quantity</p>
      <p className="w-[30%] pl-[120px] xsm:pl-0 md:pl-[120px]">Total</p>
    </div>

    {/* Line */}
    <div className="border-[1px] border-gray mx-[20px] md:mx-[188px] my-[20px] hidden md:block"></div>

    {/* Product 1 */}
 {cardItem.map((item:IProduct,index)=>(
   (
    <div className="flex flex-col md:flex-row items-center justify-between md:items-center md:ml-[188px] md:mr-[341px] mb-8" key={index}>
    <div className="flex flex-col md:flex-row items-center space-x-4">
      <Image src={item.image} alt="product" width={109} height={134} className='xsm:w-full md:w-[109px]' />
      <div className="flex flex-col ml-4">
        <h1 className="pt-2">{item.name}</h1>
        <p className="pt-2">A timeless ceramic vase with <br /> a tri color grey glaze.</p>
        <p className="pt-2">{(`£${item.price * item.quantity}`).toLocaleString()}</p>
        <div>
              <button onClick={()=>{handleremoveitem(index)}}>
              <IoTrashOutline className="pt-2" size={25} />
              </button>
            </div>
      </div>
    </div>
    <div className="xsm:flex items-center space-y-2 md:space-y-0 md:flex-row">
    <input type="number"className="xsm:mt-0  md:mt-0 
           pr-[320px]   xsm:pr-[70px] md:pr-[320px]  bg-white text-black
           " min={1}  value={item.quantity}  onChange={(e) =>{ 
              handleQuantity(index, +e.target.value)
            }}/>
      <p className="xsm:mt-0 md:mt-0">{(`£${item.price * item.quantity}`).toLocaleString()}</p>
    </div>
  </div>
   )
 ))}
    {/* Line */}
    <div className="border-[1px] border-gray mx-[20px] md:mx-[188px] my-[20px] hidden md:block"></div>

    {/* Pricing Information */}
    <div className="flex flex-col ml-[20px] md:ml-[970px] mr-[20px] md:mr-[188px] mt-[28px] mb-[8px] h-[100px] w-[300px]">
      <Image
        src={"/Pricing-information.png"}
        alt="Group4"
        width={282}
        height={67}
        className="mt-[20px]"
      />
    </div>

    {/* Checkout Button */}
  <Link href={"/checkout"}>
  <button className="xsm:py-[10px] px-[30px] bg-[#2A224C] text-white mb-[48px] mx-[20px] md:mx-[1090px]
    md:py-[0px] md:px-[50px]">
      Go to Checkout
    </button>
  </Link>
  </div>

  <Footer />
</section>

    </>
  )
}

export default Shoppingbasket;
