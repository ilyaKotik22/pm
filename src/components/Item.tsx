import React from 'react';
import img from '../../public/d459b681689394765d2fc7a9ad5db24a.jpg'
import Image from "next/image";
export type FilmsItemType = {
    id: string
    title:string
    originalTitle?:string
    year?: number
    country?: string
    quality?: string[]
    categories?: string[]
    director?: string
    actors?: string[]
    image?: string
    rating: {like: number, dislike: number}

}
export const Item: React.FC<FilmsItemType> = ({id,title,rating}) => {
return (
    <li key={id} className='list-none min-w-[200px] w-[15vw] relative text-white'
    >   
     <div className="absolute bottom-20 z-10 text-center w-full">{title}</div>
         
        <section className='absolute bottom-10 z-10  flex justify-between w-full px-7'>
            <div className="">{rating.like}</div>
            <div className="">{rating.dislike}</div>
        </section>
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black/100 to-transparent"></div>
        <Image
            src={img}    
            alt="Логотип"
        />
       
    </li>
);
};