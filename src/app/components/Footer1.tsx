import React from 'react';

const Footer1 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white text-black px-6 md:px-12 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
        <ul className="space-y-2">
          <li className="font-semibold">Icons</li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Shoes</li>
          <li>All Shoes</li>
          <li>Jordan Shoes</li>
          <li>Custom Shoes</li>
          <li>Running Shoes</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Clothes</li>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Kids</li>
          <li>Infant & Toddler Shoes</li>
          <li>Kids Shoes</li>
          <li>Kids Jordan Shoes</li>
          <li>Kids Basketball Shoes</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer1;
