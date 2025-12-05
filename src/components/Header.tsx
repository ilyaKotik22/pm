import Link from 'next/link';
import React from 'react';

type Podbor = {
    name: string
    logo: string
}

export const Header: React.FC = () => {
    const podbor:Podbor[] = [
        {name: 'фильмы', logo: ''},
        {name: 'недельный топ 50', logo: ''},
        {name: 'новости', logo: ''},
        {name: 'netflix', logo: ''},
        {name: 'marvel', logo: ''},
        {name: 'сериалы', logo: ''},
        {name: 'подборки', logo: ''},
    ]


return (
    <header className='flex flex-wrap justify-between w-full bg-white text-black font-bold px-10 py-5'>
        <section className='flex justify-between w-full'>
            <section className='flex items-center'>
            <nav className='flex gap-10'>
                <Link href={'/'}>лого</Link>
                <Link href={'/filmy'}>фильмы</Link>
                <Link href={'/serialy'}>сериалы</Link>
                <Link href={'/mult'}>мультфильмы</Link>
            </nav>
        </section>
        <section className='flex gap-10'>
            <input placeholder='введите название фильма,сериала' className='bg-gray-200 h-10 w-[30vw] px-4 rounded-lg ' type="text" />
            <Link href={'/vhod'} className=''>войти</Link>
        </section>
        </section>
        <section className='flex gap-4 mt-5'>
            {podbor.map((el)=><Link key={el.name} href={'/'}> <div className=' border-2 rounded-lg px-4 py-2'>{el.name}</div></Link>)}
        </section>
    </header>
);
};