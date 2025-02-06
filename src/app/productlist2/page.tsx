// src\app\productlist2\page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import {sanityFetch , ICard } from "@/services/sanityApi";
// import  {res  , IProduct} from "@/services/sanityApi";

export default function Productv1() {
  const [products, setProducts] = useState<ICard[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ICard[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

 

  useEffect(() => {
    const fetchProducts = async () => {
     const res = await sanityFetch('*[_type == "product"]');
     const products=await res

      setProducts(products);
      setFilteredProducts(products);
    };
    fetchProducts();
  },[]);


  function filtterProduct(name: string) {
    setSearchTerm(name);
    const filtered = products.filter((product) => 
      product.slug.current.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <>
      <Navbar />
      <div
        className="xsm:w-full 
  md:w-full"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {filtterProduct(e.target.value)}} // Update search term
          style={{
            padding: "8px",
            marginBottom: "20px",
            width: "300px",
            border: "1px solid #ccd6dd",
          }}
        />
        <Image
          src={"/all-product.png"}
          alt="product_pic"
          width={1440}
          height={704}
        />
      </div>
      <div className="flex justify-between">
        {/* left side */}
        <div className="my-[8px] ml-[24px] flex gap-[12px] xsm:hidden md:flex">
          <div className="flex py-[8px] px-[24px]">
            <h2>Cetagory</h2>
            <MdArrowDropDown size={24} />
          </div>
          <div className="flex py-[8px] px-[24px]">
            <h2>Product type</h2>
            <MdArrowDropDown size={24} />
          </div>
          <div className="flex py-[8px] px-[24px]">
            <h2>Price</h2>
            <MdArrowDropDown size={24} />
          </div>
          <div className="flex py-[8px] px-[24px]">
            <h2>Brand</h2>
            <MdArrowDropDown size={24} />
          </div>
        </div>
        {/* right side */}
        <div className="flex xsm:ml-[30px] md:ml-[0px] md:flex">
          <div className="py-[8px] px-[24px]">
            <h2>Sorting by:</h2>
          </div>
          <div className="flex py-[8px] px-[24px]">
            <h2>Date added</h2>
            <MdArrowDropDown size={24} />
          </div>
        </div>
      </div>

      <div className="flex ">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 gap-6 ml-6">
          {filteredProducts.map((product3: ICard, index: number) => (
            <Link
              href={`/productlist/id?name=${product3.slug.current}&image=${product3.image}&category=${product3.category}&price=${product3.price}&description=${product3.description}&features=${product3.features}&dimensions={width=${product3.dimensions.width},height=${product3.dimensions.height},depth=${product3.dimensions.depth}}`}
              key={index}
            >
              <div
                className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
                key={index}
              >
                <Image
                  src={product3.image || product3.image}
                  alt="Product Image"
                  width={305}
                  height={375}
                  className="w-full h-[375px] object-cover rounded-md"
                />
                <h4 className="font-bold mt-4 mb-2">{product3.category}</h4>
                <p className="text-gray-600">{product3.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-11 mb-[36px]">
        <button className="bg-gray-500 hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
          Load More
        </button>
      </div>

      <Footer />
    </>
  );
}
