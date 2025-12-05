import React from 'react';


export const Footer: React.FC = () => {
return (
    <footer className='bg-neutral-800 text-white flex justify-between px-10 py-10 '>
        <section>
            <div className="">logo</div>
            <div className="">lordfilm.com@gmail.com - почта для обратной связи. </div>
        </section>
        <section>
            <div className="">фильмы</div>
            <div className="">сериалы</div>
            <div className="">мультфильмы</div>
        </section>
    </footer>
);
};