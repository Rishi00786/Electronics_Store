// Body_1.js

import React, { useState, useEffect, useRef } from 'react';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import './Body_1.css'; // Import CSS file for styling
import phone from '../assets/phone.webp'
import phone2 from '../assets/phone_1.webp'
import headphones from '../assets/headphones.webp'
import tab from '../assets/phone_1.webp'
import led1 from '../assets/LED_!.webp'
import led2 from '../assets/led_2.webp'
import watch from '../assets/WATCH.webp'
import ArticleSlider from './ArticleSlider';
import { Link } from 'react-router-dom';

const Body_1 = () => {
  const [currentBg, setCurrentBg] = useState(bg1);
  const img_ele = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentBg === bg1) {
        setCurrentBg(bg2);
      } else if (currentBg === bg2) {
        setCurrentBg(bg3);
      } else {
        setCurrentBg(bg1);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentBg]);

  useEffect(() => {
    const imgElement = img_ele.current;
    if (imgElement) {
      imgElement.classList.remove('fade-in-image');
      setTimeout(() => {
        imgElement.classList.add('fade-in-image');
      }, 10);
    }
  }, [currentBg]);

  const icon_txt=(type,name,text)=>{
    return(
        <div className='flex flex-col gap-4 items-center justify-center lg:ml-2'>
            <div id='ic' className='text-5xl'><i className={`fa-${type} fa-${name}`}></i></div>
            <div id="txxt" className='font-medium text-md text-center'>{text}</div>
        </div>
    )
  }

  return (
    <>
    <div id='first_cont' className="container relative w-screen h-max">
      <div id='textOverlay' className="absolute text-black h-4/5 w-4/5">
        <div id='textbox' className="text flex flex-col gap-8 items-start md:ml-24 md:mt-12 lg:ml-40 lg:mt-20">
          <div className='w-28 h-8 bg-red-500 flex items-center justify-center text-white'>Best Prices</div>
          <div id='t2' className='font-bold md:text-xl lg:text-3xl xl:text-6xl md:w-3/6 xl:w-8/12'>Incredible Prices on All Your Favorite Items</div>
          <div className='font-thin md:text-base lg:text-xl xl:text-2xl'>Get more for less on selected brands</div>
          <Link to="/Shop All"><div id='t4' className='md:w-36 md:h-12 lg:w-48 rounded-full xl:w-56 bg-purple-500 flex items-center justify-center text-white'>Shop Now</div></Link>
        </div>
      </div>
      <div id='img_box' className='w-screen'>
        <img ref={img_ele} id='img_ele' className="bg-image object-cover fade-in-image" srcSet={currentBg} alt="bg1" />
      </div>
    </div>
    <div id='second_cont' className='md:h-11/12 flex flex-col gap-8 items-center justify-center bg-gray-200 md:flex-row'>
        <div className='md:ml-2'>
            <div id='tb' className='flex flex-col gap-4 absolute text-white md:mt-8 md:ml-16 lg:mt-12 lg:ml-20 xl:ml-28 xl:mt-16'>
            <div id='a1' className='font-thin md:text-sm lg:text-xl'>Holiday Deals</div>
            <div id='a21' className='font-semibold md:text-2xl md:w-32 lg:text-4xl lg:w-40 xl:text-5xl xl:w-48'>Up to 30% off</div>
            <div id='a3' className='font-thin md:text-sm md:w-36 lg:text-lg lg:w-48'>Selected Smartphone Brands </div>
            <Link to="/Shop All"><div id='a4' className='md:w-24 md:h-8 font-extralight w-32 h-12 rounded-full bg-white flex items-center justify-center text-black'>Shop</div></Link>
            </div>
            <div><img className='object-cover' id='img_boxx' srcSet={phone} alt=""  /></div>
        </div>
        <div className='md:mr-2'>
        <div id='tb' className='flex flex-col gap-4 absolute text-white md:mt-8 md:ml-16 lg:mt-12 lg:ml-20 xl:ml-28 xl:mt-16'>
            <div id='a1' className='font-thin md:text-sm  lg:text-xl'>Just In</div>
            <div id='a22' className='font-semibod md:text-2xl md:w-56 lg:text-4xl lg:w-60 xl:text-5xl'>Take Your Sound Anywhere</div>
            <div id='a3' className='font-thin md:text-sm md:w-36 lg:text-lg'>Top Headphone Brands</div>
            <Link to="/Shop All"><div id='a4' className='md:w-24 md:h-8 font-extralight w-32 h-12 rounded-full bg-white flex items-center justify-center text-black'>Shop</div></Link>
            </div>
            <div ><img id='img_boxx' srcSet={headphones} alt=""  /></div>
        </div>
    </div>
    <div className='flex flex-col sm:flex-row items-center justify-center'>
    <div id='icon_text' className='flex flex-wrap gap-4 sm:gap-16 items-center justify-center'>
        {icon_txt("solid","truck-pickup","Curb-side pickup")}
        {icon_txt("solid","money-bill-trend-up","Low prices guaranteed")}
        {icon_txt("regular","clock","Available to you 24/7")}
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div id='ic' className='text-5xl'><i className="fa-solid fa-kaaba"></i></div>
            <div id="txxt" className='font-medium text-md text-center w-36 '>Free shipping on orders over $50</div>
        </div>
    </div>
</div>

    {/* <div>
      <ArticleSlider/>
    </div> */}
    </>
  );
};

export default Body_1;
