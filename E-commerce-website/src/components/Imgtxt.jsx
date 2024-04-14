import React from 'react';
import desk from '../assets/desk.webp';
import { Link } from 'react-router-dom';

const Imgtxt = () => {
  return (
    <div className="relative bg-white text-black p-0 m-4 md:m-8 flex flex-col md:flex-row items-center justify-center h-[75vh]">
      <div className="shadow-xl shadow-black absolute md:top-28 top-1/3 md:left-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white py-1 px-4 rounded-full flex items-center justify-center md:w-40 md:h-40 w-16 h-16 z-10">
          <div className='text-center md:text-4xl transform rotate-45'>Best Price</div>
        </div>
      <div className="md:w-7/12 h-full overflow-hidden w-full relative">
        <img id='poly' src={desk} alt="Laptop and Tablet" className="w-full h-full lg:object-left md:object-center object-cover object-left" />
      </div>
      <div className="flex flex-col md:w-5/12 md:items-start items-center justify-center md:mb-4 md:p-8 gap-8 self">
        <p className='text-2xl font-medium flex flex-col items-center md:items-start'>
          <div>Save up to</div>
          <div className='font-bold text-5xl mt-4 mb-4'>$150</div>
          <div className='text-center md:text-left'> on selected laptop & tablets brands</div></p>
        <p className="text-xs md:text-sm mb-4 text-center">Terms and conditions apply</p>
        <Link to="/Shop All">
          <button className="bg-blue-500 text-white py-2 px-8 rounded-full mt-auto mb-4 md:mb-0">Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default Imgtxt;
