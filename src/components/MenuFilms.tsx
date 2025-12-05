import React from 'react';
import { FilmsItemType, Item } from './Item';



export interface MenuFilmsType {
  title:string
  items: FilmsItemType[]
}
export const MenuFilms: React.FC<MenuFilmsType> = ({title,items}) => {
return (
    <section className='w-full  px-10 py-10'>
        <h1 className='text-[24px] font-bold mb-5'>{title}</h1>
        <div className="flex gap-4 flex-wrap justify-center">
            {items.map((el)=><Item key={el.id} id={el.id} title={el.title} rating={el.rating}></Item>)}
        </div>
        
    </section>
);
};