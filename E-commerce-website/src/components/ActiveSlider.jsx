import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
// import { RiArrowRightLine } from "react-icons/ri";
import './Body_1.css'

import phone2 from '../assets/phone_2.webp';
import phone3 from '../assets/phone_3.webp';
import led1 from '../assets/LED_!.webp';
import watch from '../assets/WATCH.webp';
import phone4 from '../assets/phone3.webp'
import buds1 from '../assets/buds1.webp'
import buds2 from '../assets/buds3.webp'
import cam1 from '../assets/cam1.webp'
import drone2 from '../assets/drone2.webp'
import lap2 from '../assets/lap2.webp'


const ServiceData = [
    { title: "Ocean Pro 11 - 12.3' Touch Screen", OldPrice: "85$", price: "70$", img: phone4, ratings: 3.5, OnSale: true },
    { title: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking", OldPrice: "90$", price: "70$", img: watch, ratings: 3, OnSale: true },
    { title: "HKI Tech Quadcopter Drone With 360 Camera & Controller", price: "70$", img: drone2, ratings: 4, OnSale: false },
    { title: "JP - Space Tablet 10.4' Wi-Fi 32GB", OldPrice: "80$", price: "60$", img: phone3, ratings: 5, OnSale: true },
    { title: "Shel 50' Class LED 4K UHD Smart TV", OldPrice: "95$", price: "60$", img: led1, ratings: 4.3, OnSale: true },
    { title: "White Buds Wireless Earbud Headphones", price: "75$", img: buds1, ratings: 3.9, OnSale: false },
    { title: "Megapixel Waterproof Mini Digital Camera", OldPrice: "90$", price: "60$", img: cam1, ratings: 5, OnSale: true },
    { title: "JP Gaming Laptop 15.6' Laptop 256GB", OldPrice: "90$", price: "70$", img: lap2, ratings: 4.9, OnSale: true },
    { title: "In-ear Noise Cancelling & Isolating Wireless Earbuds", price: "70$", img: buds2, ratings: 4.5, OnSale: false }
];

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = Math.floor(5 - rating);

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<StarIcon key={i} />);
    }

    // Add half star if needed
    if (halfStar) {
        stars.push(<HalfStarIcon key="half" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<EmptyStarIcon key={i + fullStars + 1} />);
    }

    return stars;
};

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.778 1.65l1.944 3.889 4.333.631c.795.115 1.112.887.41 1.347l-3.17 3.098.752 4.369c.137.798-.68 1.41-1.4 1.003L10 14.28l-3.815 2.01c-.722.381-1.546-.206-1.4-1.003l.753-4.369-3.17-3.098c-.601-.586-.282-1.586.41-1.347l4.333-.63 1.944-3.889zm-.978 10.354l-.77 4.494-4.11-.596 4.512-4.395L5.56 6.898l4.7-.681-2.586-5.148 4.512 4.394-.77-4.494L10 5.037l-4.107.604z" clipRule="evenodd" />
    </svg>
);

const HalfStarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.176l1.821 3.604 4.055.589c.746.108 1.043.825.385 1.253l-2.972 2.904.701 4.071c.128.743-.637 1.31-1.307.927l-3.266-1.724-3.266 1.724c-.67.383-1.434-.184-1.307-.927l.701-4.071-2.972-2.904c-.658-.428-.36-1.145.385-1.253l4.055-.589L10 3.176zm0 8.856V3.177l-3.208 5.344L3.77 12.032l2.65-.385L10 14.564l3.58-1.918 2.65.385-3.022-3.51L10 11.032z"/>
    </svg>
);

const EmptyStarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.778 1.65l1.944 3.889 4.333.631c.795.115 1.112.887.41 1.347l-3.17 3.098.752 4.369c.137.798-.68 1.41-1.4 1.003L10 14.28l-3.815 2.01c-.722.381-1.546-.206-1.4-1.003l.753-4.369-3.17-3.098c-.601-.586-.282-1.586.41-1.347l4.333-.63 1.944-3.889zm-.978 10.354l-.77 4.494-4.11-.596 4.512-4.395L5.56 6.898l4.7-.681-2.586-5.148 4.512 4.394-.77-4.494L10 5.037l-4.107.604z" clipRule="evenodd" />
    </svg>
);



const ActiveSlider = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[90vh] bg-white gap-12 m-10">
            <h1 className="text-black font-light sm:text-4xl text-2xl">Best Sellers</h1>
            <Swiper
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    390:{
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                    },
                    500: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    965: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item, index) => (
    <SwiperSlide key={index}>
        <div className="flex flex-col gap-6 mb-20 group relative shadow-inner shadow-black text-white rounded-xl px-6 py-8 h-[350px] w-[215px] lg:h-[400px] lg:w-[250px] overflow-hidden cursor-pointer">
            {item.OnSale && <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-4 rounded-tr-xl rounded-bl-xl text-md z-10 font-semibold">Sale</div>}
            <div id="i_box" className="relative overflow-hidden h-36 lg:h-56 md:h-36">
                <img className="object-cover w-full h-full" src={item.img} alt={item.title} />
            </div>
            <div className="flex flex-col gap-1 absolute bottom-0 left-0 p-4 text-black">
                <h1 className="text-lg lg:text-2xl font-light">{item.title}</h1>
                <p className="text-sm lg:text-xl font-thin text-pink-500">{item.OnSale && <strike>{item.OldPrice}</strike>}&nbsp;&nbsp;{item.price}</p>
                <div className="flex">
                    {renderStars(item.ratings)}
                </div>
            </div>
        </div>
    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActiveSlider;
