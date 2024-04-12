import React from 'react';

const Brands = () => {
  return (
    <div className="m-8">
      <div className="flex flex-col gap-8">
        <div className="bg-white py-10 md:py-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
          <h1 className="text-4xl font-bold text-center mb-10">Brands</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">ZODIAC</span>
            </div>
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">zoro</span>
            </div>
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">PJK</span>
            </div>
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">GXL</span>
            </div>
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">HORIZON</span>
            </div>
            <div className="text-center">
              <span className="text-xl md:text-2xl font-bold p-3 md:p-4 block border border-gray-400 ">Brand 6</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 p-6 md:p-10 shadow-lg shadow-black flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Newsletter</h2>
          <p className="text-white text-center mb-6">Sign up to receive updates on new arrivals and special offers</p>
          <form className="flex flex-col items-center w-full md:w-auto">
            <div className="flex flex-col items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Your Email Here"
                className="w-full md:w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-blue-800 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brands;
