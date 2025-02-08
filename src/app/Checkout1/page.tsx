"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "../Process/process";
import Link from "next/link";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer1";

import { toast } from "react-hot-toast";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = !formValues[key as keyof typeof formValues].trim();
      return acc;
    }, {} as Record<string, boolean>);
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      toast.success("Order placed successfully!");
    } else {
      toast.error("Please fill in all the fields.");
    }
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
          Swal.fire("Success!", "Your order has been placed", "success");
          setCartItems([]);
        }
      });
    };

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-16 py-10">
        <Navbar1/>
        <Navbar2/>
              {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
        <Link href="/cart" className="hover:text-black">Cart</Link>
        <CgChevronRight className="w-4 h-4" />
        <span className="font-medium">Checkout</span>
      </nav>

      {/* Checkout Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Order Summary</h2>
          {cartItems.length ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-4 border-b">
                {item.image && (
                  <Image src={urlFor(item.image).url()} alt={item.productName} width={60} height={60} className="rounded-lg" />
                )}
                <div className="flex-1">
                  <h3 className="text-base font-medium">{item.productName}</h3>
                  <p className="text-sm text-gray-500">Quantity: {item.inventory}</p>
                </div>
                <p className="text-base font-semibold">${item.price * item.inventory}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="mt-6 text-right">
            <p className="text-base">Subtotal: <span className="font-medium">${subtotal}</span></p>
            <p className="text-base">Discount: <span className="font-medium">-${discount}</span></p>
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Billing Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.keys(formValues).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1").trim()}</label>
                <input
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formValues[field as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className={`w-full border px-4 py-3 mt-1 rounded-lg focus:ring-2 ${formErrors[field] ? "border-red-500" : "border-gray-300"}`}
                />
                {formErrors[field] && <p className="text-xs text-red-500">{field.replace(/([A-Z])/g, " $1")} is required.</p>}
              </div>
            ))}
          </div>
          <button
            className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
            onClick={handleProceed}
          >
            Place Order
          </button>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}
