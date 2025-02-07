'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import Card2 from './card2'; // Assuming Card is a wrapper component
import { FaGreaterThan } from "react-icons/fa6";
import { PiLessThanThin } from "react-icons/pi";
import { four } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { Product } from '../../../types/products';
import { urlFor } from '@/sanity/lib/image';

// Renaming the interface to avoid conflict with the Card component
interface ProductCard {
  id: number;
  price: string;
  image: string;
  title: string;
  name: string;
}
const Shoes = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(()=>{
    async function fetchproduct(){
      const fetchedProduct: Product[] = await client.fetch(four)
      setProduct(fetchedProduct)

    }
    fetchproduct()

  },[])
  

  return (
    <div className='md:max-w-1440px px-12 my-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Our New Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {product.map((product)=>(
        <div key={product._id}>
          <h2 className='text-lg font-semibold mt-4'>{product.productName}</h2>
          {product.image && (
            <Image src={urlFor(product.image).url()} alt="image" width={200} height={200} className=' h-48 object-cover rounded-md ' /> 
          )}
          <p className='text-gray-500 mt-2'>
          {product.price}
          
          </p>
          <p  className='text-gray-500 mt-2'>
          {product.description}
          </p>
        </div>

      ))} 
</div>
  </div>
  );
};

export default Shoes;

