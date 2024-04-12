import React from 'react';
import { Link } from 'react-router-dom';
import deskk from '../assets/desk_2.webp';

const Imgtxt3 = () => {
  return (
    <div>
      <div className="relative text-black p-0 flex flex-col md:flex-row items-start md:items-center justify-center h-[60vh] bg-gray-800">
        <div className="flex flex-col md:w-5/12 items-start justify-center md:mb-4 md:p-8 xl:gap-10 md:gap-8 gap-0 self md:ml-12 ml-4 mt-8">
          <div className='max-w-md'> {/* Adjust the max-width here */}
            <p className='lg:text-3xl md:text-xl text-xl font-medium flex flex-col items-start gap-8 text-white'>
              <div>
                <div className='text-xl md:text-3xl lg:text-4xl'>Need Help? Check Out Our Help Center</div>
              </div>
              <div>
                <div className='text-base md:text-lg lg:text-xl'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
              </div>
            </p>
          </div>

          <div className='flex flex-col mt-4'>
            <Link to="/help-centre">
              <button className="bg-blue-500 text-white py-2 px-8 rounded-full mt-auto mb-4 md:mb-0">Go to Help Centre</button>
            </Link>
          </div>
        </div>
        <div className="md:w-7/12 h-full overflow-hidden w-full relative">
          <img id='poly3' src={deskk} alt="Laptop and Tablet" className="w-full h-full lg:object-right md:object-center object-cover object-left" />
        </div>
      </div>
    </div>
  );
};

export default Imgtxt3;
