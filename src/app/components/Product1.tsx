'use client';
import React, { useEffect, useState } from 'react';
import { allProducts, three } from '@/sanity/lib/queries';
import Image from 'next/image';
import { Product } from '../../../types/products';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '../Process/process';
import Swal from 'sweetalert2';

const Shoes = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      title: 'Added to Cart!',
      text: 'Check your cart to see the items.',
      icon: 'success',
      confirmButtonText: 'Go to Cart',
      timer: 3000,
      position: 'bottom-end',
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-white text-center mb-8">Our New Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={250}
                  height={250}
                  className="w-full h-52 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              )}
            </Link>
            <p className="text-gray-600 mt-3 text-lg font-medium">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 mt-2 text-sm">{product.description}</p>
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-5 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-teal-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
