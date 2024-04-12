import React from 'react';
import drone from '../assets/drone2.webp'
import p1 from '../assets/p1.webp'
import c1 from '../assets/c1.webp'
import cam from '../assets/camm1.webp'
import sale from '../assets/sale.webp'
import tab from '../assets/tabb.webp'
import bs from '../assets/bs.webp'
import tvnhc from '../assets/tvnhc.webp'
import ww from '../assets/ww.webp'
import sp from '../assets/sp.webp'
import hp from '../assets/hp.webp'
import {Link} from 'react-router-dom'

const NextComp = () => {

    const generate_ = (title, img) => {
        return (
            <div className="w-full md:w-3/12 p-4 rounded-full">
                <div className="bg-gray-200 rounded-full p-8 flex flex-col items-center">
                    <Link to={title}><img id='i_box2' src={img} alt="Computers" className="w-56 h-60 md:w-32 md:h-36 rounded-full mb-4" /></Link>
                    <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center m-8">
            <div className='md:text-4xl m-12  sm:text-3xl text-[1.2rem]'>Shop by Category</div>
            <div className="w-full max-w-5xl flex flex-col md:flex-row flex-wrap items-center justify-center bg-white">
                {generate_("Computers",c1)}
                {generate_("Mobiles",p1)}
                {generate_("Drones & Cameras",cam)}
                {generate_("Sale",sale)}
                {generate_("Tablets",tab)}
                {generate_("Best Sellers",bs)}
                {generate_("T.V. & Home Cinema",tvnhc)}
                {generate_("Wearable Watch",ww)}
                {generate_("Speakers",sp)}
                {generate_("Headphones",hp)}
            </div>
        </div>
    );
};

export default NextComp;