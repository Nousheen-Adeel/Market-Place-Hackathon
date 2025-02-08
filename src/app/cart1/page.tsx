"use client";

import { Product } from "../../../types/products";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateInventory } from "../Process/process";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Navbar1 from "../components/Navbar1";
import Navbar2  from "../components/Navbar2";
import Link from "next/link";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed from your cart.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateInventory(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed!", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <Navbar1/>
        <Navbar2/>
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Your Shopping Cart</h1>

      <div className="space-y-6 max-w-5xl mx-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center space-x-6">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-24 h-24 object-cover rounded-lg"
                    alt={item.productName}
                    width={500}
                    height={500}
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{item.productName}</h2>
                  <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center bg-gray-200 rounded-lg p-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-800"
                  >
                    -
                  </button>
                  <span className="mx-3 text-lg font-semibold">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-800"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center text-xl">Your cart is empty. 🛒</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">Total:</h2>
            <p className="text-2xl font-bold text-blue-600">${calculateTotal().toFixed(2)}</p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            <Link href="/Checkout1">Proceed to Checkout</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
