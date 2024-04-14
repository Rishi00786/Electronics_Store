import React, { useState } from 'react';
import AddToCartAlert from './AddToCartAlert'; // Import the AddToCartAlert component
import { useStateContext } from '../context/context';

const ProductDetail = ({ product }) => {

  

  const productToAdd = {
    img: product.imageSrc,
    title: product.title,
    price: product.price,
    // ratings: product.ratings // Assuming product.ratings is available
  };

  const [quantity, setQuantity] = useState(1);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false); // State to control the visibility of the AddToCartAlert

  const { cartItems, setcartItems } = useStateContext();

  const handleAddToCart = () => {
    // Add product to cartItems array
    setcartItems(prevCartItems => [...prevCartItems, productToAdd]);
    setShowAddToCartAlert(true); // Show the AddToCartAlert
  };

  const generateDropdown = (title, content, isOpen, setIsOpen) => {
    return (
      <>
        <button
          className="flex items-center justify-between w-full p-4 text-gray-900  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium">{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`${isOpen ? 'rotate-180' : ''} w-6 h-6 ml-2 transition-transform`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 text-gray-700 rounded-md">
            <p className='text-sm font-light'>{content}</p>
          </div>
        )}
        <hr className="w-full border-gray-300" />
      </>
    );
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
      <div className="product-detail flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <img src={product.imageSrc} alt={product.title} className="w-[70vw] h-[50vh] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] object-cover rounded-lg shadow-md mb-4 sm:mb-0 mt-12" />
          {product.description && (
            <div className="max-w-[80%] sm:max-w-96 text-center">{product.description}</div>
          )}
        </div>
        <div className="flex flex-col ml-0 sm:ml-8 items-start mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 text-lg sm:text-xl font-medium mb-2">{product.price}</p>
          <div className="flex flex-col items-start mb-4">
            <span className="mr-4">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 h-10 border border-gray-300 rounded-md px-3"
            />
          </div>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md mb-4">Add to Cart</button>
          <div className="dropdowns mb-4 flex flex-col gap-4">
            {generateDropdown(
              "Product Info",
              "Product info details go here.",
              isOpen1,
              setIsOpen1
            )}
            {generateDropdown(
              "Shipping Info",
              "Shipping info details go here.",
              isOpen2,
              setIsOpen2
            )}
            {generateDropdown(
              "Return and Refund Policy",
              "Return and refund policy details go here.",
              isOpen3,
              setIsOpen3
            )}
          </div>
        </div>
      </div>
      {showAddToCartAlert && <AddToCartAlert item={productToAdd} />} {/* Render AddToCartAlert if showAddToCartAlert is true */}
      <div className="text-center mb-8">
        <div className="text-lg font-medium">No Reviews Yet</div>
        <div className="text-sm text-gray-500 mb-4">Share your thoughts. Be the first to leave a review.</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">Leave a Review</button>
      </div>
    </div>
  );
};

export default ProductDetail;
