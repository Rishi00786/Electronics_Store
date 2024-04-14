import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Animation.css'; // Import CSS file for animations
import drone from '../assets/drone2.webp';
import p1 from '../assets/p1.webp';
import c1 from '../assets/c1.webp';
import cam from '../assets/camm1.webp';
import sale from '../assets/sale.webp';
import tab from '../assets/tabb.webp';
import bs from '../assets/bs.webp';
import tvnhc from '../assets/tvnhc.webp';
import ww from '../assets/ww.webp';
import sp from '../assets/sp.webp';
import hp from '../assets/hp.webp';

const NextComp = () => {
    const [animate, setAnimate] = useState(false);
    const nextCompRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // use the viewport as the root
            rootMargin: '0px', // no margin
            threshold: 0.5 // trigger when 50% of the element is visible
        };

        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setAnimate(true);
                observer.unobserve(nextCompRef.current);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (nextCompRef.current) {
            observer.observe(nextCompRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const items = [
        { title: 'Computers', img: c1 },
        { title: 'Mobiles', img: p1 },
        { title: 'Drones & Cameras', img: cam },
        { title: 'Sale', img: sale },
        { title: 'Tablets', img: tab },
        { title: 'Best Sellers', img: bs },
        { title: 'T.V. & Home Cinema', img: tvnhc },
        { title: 'Wearable Watch', img: ww },
        { title: 'Speakers', img: sp },
        { title: 'Headphones', img: hp }
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center m-8" ref={nextCompRef}>
            <div className='md:text-4xl m-12  sm:text-3xl text-[1.2rem]'>Shop by Category</div>
            <div className="w-full max-w-5xl flex flex-col md:flex-row flex-wrap items-center justify-center bg-white">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full md:w-3/12 p-4 rounded-full animated-item ${animate ? 'animate' : ''}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="bg-gray-200 rounded-full p-8 flex flex-col items-center">
                            <Link to={item.title}>
                                <img
                                    id='i_box2'
                                    src={item.img}
                                    alt={item.title}
                                    className="w-56 h-60 md:w-32 md:h-36 rounded-full mb-4"
                                />
                            </Link>
                            <h2 className="text-xl font-bold mb-2 text-center">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextComp;
