import React, { useState, useEffect, useRef } from 'react';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import './Body_1.css'; // Import CSS file for styling

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
      imgElement.classList.remove('fade-in');
      setTimeout(() => {
        imgElement.classList.add('fade-in');
      }, 10);
    }
  }, [currentBg]);

  return (
    <div className="container relative w-screen h-max">
      <div id='textOverlay' className="text-overlay absolute text-black h-4/5 w-4/5">
        <div id='textbox' className="text flex flex-col gap-8 items-start md:ml-24 md:mt-12 lg:ml-40 lg:mt-20">
          <div  className='w-28 h-8 bg-red-500 flex items-center justify-center text-white'>Best Prices</div>
          <div id='t2' className='font-bold md:text-xl lg:text-3xl xl:text-6xl md:w-3/6 xl:w-8/12'>Incredible Prices on All Your Favorite Items</div>
          <div className='font-thin md:text-base lg:text-xl xl:text-2xl'>Get more for less on selected brands</div>
          <div id='t4' className='md:w-36 md:h-12 lg:w-48 rounded-full xl:w-56 bg-purple-500 flex items-center justify-center text-white'>Shop Now</div>
        </div>
      </div>
      <div id='img_box' className='w-screen'>
        <img ref={img_ele} className="bg-image object-cover fade-in" src={currentBg} alt="bg1" />
      </div>
    </div>
  );
};

export default Body_1;
