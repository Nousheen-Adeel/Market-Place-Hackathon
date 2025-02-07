import React from 'react'
import Image from 'next/image';


interface Propstype{
    available:string;
    name:string;
    title:string;
    color:string
    price:string;
    image:any;
}
const Card1:React.FC<Propstype> = ({image,available,title,name,color,price}:Propstype) => {
  return (
    <div>
      
      <div className='px-8'>
        <Image src={image} alt="Product Image" width={400} height={250} className='p-4' />
        <div className='px-8'>
        <p className='text-[#9E3500]'>{available}</p>
        <p>{title}</p>
        <p className='text-gray-500'>{name}</p>
        <p className='text-gray-500'>{color}</p>
        <br />
        <p>{price}</p>
        </div>
        
     
      </div>
    
      
    </div>
  )
}

export default Card1