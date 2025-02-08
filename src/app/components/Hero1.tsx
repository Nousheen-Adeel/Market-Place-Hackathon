import React from 'react';
import Image from 'next/image';
import Product from './Product';
import Product2 from './Product2';

const Hero1 = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="relative w-full">
        <Image src="/Images/shoemain.png" alt="Nike Air Max Pulse" layout="responsive" width={1440} height={700} />
      </div>

      <div className="container mx-auto text-center py-16 px-4">
        <p className="text-lg font-medium">First Look</p>
        <h5 className="text-4xl md:text-5xl font-bold">Nike Air Max Pulse</h5>
        <p className="text-base md:text-lg mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br />—designed to push you past your limits and help you go to the max.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm md:text-base">Notify Me</button>
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm md:text-base">Shop Air Max</button>
        </div>
      </div>
      
      <Product />

      <div className="container mx-auto text-center py-16 px-4">
        <h2 className="text-2xl font-semibold">Featured</h2>
        <Image src="/Images/man1.png" alt="Featured Shoes" layout="responsive" width={1440} height={700} />
        <h5 className="text-4xl md:text-5xl font-bold mt-6">STEP INTO WHAT FEELS GOOD</h5>
        <p className="text-base md:text-lg mt-4">Cause everyone should know the feeling of running in that perfect pair.</p>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm md:text-base">Find Your Shoe</button>
        </div>
      </div>

      <Product2 />

      <div className="container mx-auto text-center py-16 px-4">
        <h2 className="text-2xl font-semibold">Dont Miss</h2>
        <Image src="/Images/2men.png" alt="Flight Essentials" layout="responsive" width={1440} height={700} />
        <h5 className="text-4xl md:text-5xl font-bold mt-6">FLIGHT ESSENTIALS</h5>
        <p className="text-base md:text-lg mt-4">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm md:text-base">Shop</button>
        </div>
      </div>

      <div className="container mx-auto text-center py-16 px-4">
        <h2 className="text-2xl font-semibold">Dont Miss</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center">
            <button className="px-6 py-3 rounded-full bg-white text-black border border-black text-sm md:text-base">Mens</button>
            <Image src="/Images/ess1.png" alt="Men's Essentials" width={440} height={550} className="mt-4" />
          </div>
          <div className="text-center">
            <button className="px-6 py-3 rounded-full bg-white text-black border border-black text-sm md:text-base">Womens</button>
            <Image src="/Images/ess2.png" alt="Women's Essentials" width={440} height={550} className="mt-4" />
          </div>
          <div className="text-center">
            <button className="px-6 py-3 rounded-full bg-white text-black border border-black text-sm md:text-base">Kids</button>
            <Image src="/Images/ess3.png" alt="Kids' Essentials" width={440} height={550} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
