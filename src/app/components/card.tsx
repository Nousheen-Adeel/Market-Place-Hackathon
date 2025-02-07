import React from 'react'
import Image from 'next/image';


interface Propstype{
    name:string;
    price:string;
    title:string;
    image:any;
}
const Card:React.FC<Propstype> = ({image,name,price,title}:Propstype) => {
  return (
    <div>
      
      <div className='px-8'>
        <Image src={image} alt="Product Image" width={400} height={250} className='p-4' />
        <div className='px-8 flex justify-between'>
        <p>{title}</p>
        <p>{price}</p>
        </div>
        <h3 className='px-8'>{name}</h3>
     
      </div>
    
      
    </div>
  )
}

export default Card
