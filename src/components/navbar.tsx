// src\components\navbar.tsx
"use client";
import React from 'react'
// import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const [menuOpen , setMenuOpen] = React.useState(false);

  return (
    <>     
 <section className='w-full h-[132px] xsm:h-[110px] md:h-[132px]'>
  <div className='flex justify-between py-[20px] px-[26px] items-center'>
    <div className='pl-[26px]'>
      <CiSearch />
    </div>
    <h1 className='text-2xl'>Avion</h1>
    <div className="flex gap-4 pr-[26px] h-[16px]">
      <FiShoppingCart size={16} />
      <UserButton afterSignOutUrl="/"/>
    </div>
    {/* Hamburger Icon for Mobile */}
    <div className='md:hidden flex items-center'>
      <FiMenu size={24} onClick={() => setMenuOpen(!menuOpen)} />
    </div>
  </div>
  <div className='border-[1px] border-black mx-[50px]'></div>
  <nav className='px-[382px] py-[20px] flex justify-center xsm:py-[0px] md:py-[20px]'>
    {/* Desktop Navigation Menu */}
    <ul className='flex gap-5 xsm:hidden xs:hidden sm:hidden md:flex'>
      <Link href={"/"}> <li>Plant pots</li></Link>
      <Link href={"/home2"}> <li>Ceramics</li></Link>
      <Link href={"/about"}><li>Tables</li></Link>
      <Link href={"/productlist2"}> <li>Chairs</li></Link>
      <Link href={"/productlist2"}> <li>Crockery</li></Link>
      <Link href={"/shoppingbasket"}><li>Tableware</li></Link>
      <Link href={"/"}><li>Cutlery</li></Link>
    </ul>

    {/* Mobile Navigation Menu (Hidden by default) */}
    <ul
      className={`absolute top-[132px] left-0 w-full bg-white z-10 md:hidden ${menuOpen ? 'block' : 'hidden'}`}
    >
      <Link href={"/"}> <li className='py-2 px-4 border-b'>Plant pots</li></Link>
      <Link href={"/home2"}> <li className='py-2 px-4 border-b'>Ceramics</li></Link>
      <Link href={"/about"}><li className='py-2 px-4 border-b'>Tables</li></Link>
      <Link href={"/productlist2"}> <li className='py-2 px-4 border-b'>Chairs</li></Link>
      <Link href={"/productlist2"}> <li className='py-2 px-4 border-b'>Crockery</li></Link>
      <Link href={"/shoppingbasket"}><li className='py-2 px-4 border-b'>Tableware</li></Link>
      <Link href={"/"}><li className='py-2 px-4 border-b'>Cutlery</li></Link>
    </ul>
  </nav>
</section>


    </>
  )
}

export default Navbar
