import React from 'react'
import dron from '../assets/drone.webp'
import { Link } from 'react-router-dom';

const Imgtxt2 = () => {
  return (
    <div>
      <div className="relative bg-white text-black p-0 m-4 md:m-8 flex flex-col md:flex-row items-start md:items-center justify-center h-[75vh]">
      <div className="flex flex-col md:w-5/12 items-start justify-center md:mb-4 md:p-8 xl:gap-10 md:gap-8 gap-0  self md:ml-12  ml-4">
        <p className='lg:text-3xl md:text-xl text-xl font-medium flex flex-col items-start gap-4'>
        <div className='bg-red-500 md:mt-0 mt-4'>
        <div className='md:text-xl text-sm text-white p-2'>Today's Special</div>
        </div>
        <div>
          <div>Best Arial View in Town</div>
          <div className='font-bold xl:text-8xl lg:text-7xl md:text-5xl text-4xl mt-4 mb-4'>30% OFF</div>
          <div className='text-left'>on professional camera drones</div>
          </div>
          </p>

          <div className='flex flex-col items-start gap-2'>
        <p className="text-xs md:text-sm text-center md:mt-0 mt-4">Limited quantities.</p>
        <p className="text-xs md:text-sm text-center md:text-left">See product detail pages for availability.</p>
        <Link to="/all-products">
          <button className="bg-blue-500 text-white py-2 px-8 rounded-full mt-auto mb-4 md:mb-0">Shop</button>
        </Link>
        </div>
      </div>
      <div className="md:w-7/12 h-full overflow-hidden w-full relative">
        <img id='poly2' src={dron} alt="Laptop and Tablet" className="w-full h-full lg:object-right md:object-center object-cover object-left" />
      </div>
    </div>
    </div>
  )
}

export default Imgtxt2
