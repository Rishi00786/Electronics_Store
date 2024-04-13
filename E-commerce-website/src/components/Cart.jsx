import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/context';
import BuyingAlert from './BuyingAlert'; // Import the BuyingAlert component

const Cart = () => {
    const { cartItems } = useStateContext();
    const [showBuyingAlert, setShowBuyingAlert] = useState(false); // State to control the visibility of BuyingAlert
    const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item

    // Define the StarRating component inside the Cart component
    const StarRating = ({ rating }) => {
        // Round the rating to the nearest 0.5
        const roundedRating = Math.round(rating * 2) / 2;

        // Function to render a single star
        const renderStar = (filled) => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${filled ? 'text-yellow-500' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1l2.9 6.744L19 7.9l-5.6 4.5L15.8 19 10 15.4 4.2 19l1.4-6.6L1 7.9l6.1-.156L10 1z" clipRule="evenodd" />
                </svg>
            );
        };

        // Function to render star rating
        const renderStarRating = () => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
                if (i < roundedRating) {
                    stars.push(renderStar(true)); // Push filled star
                } else {
                    stars.push(renderStar(false)); // Push empty star
                }
            }
            return stars;
        };

        return (
            <div className="flex items-center">
                {renderStarRating()}
            </div>
        );
    };

    // Function to handle Buy Now button click
    const handleBuyNowClick = (item) => {
        setSelectedItem(item); // Set the selected item
        setShowBuyingAlert(true); // Show BuyingAlert component
    };

    return (
        <>
            {cartItems.length !== 0 && (
                <div className="cart flex flex-col items-center justify-center">
                    <h2 className="lg:text-5xl text-3xl font-semibold mb-20 mt-20">Your Cart</h2>
                    {showBuyingAlert && <BuyingAlert item={selectedItem} />} {/* Render BuyingAlert component if showBuyingAlert is true */}
                    <div className="cart-items flex flex-wrap justify-center gap-8">
                        {cartItems.map((item, index) => (
                            <div className="cart-item flex flex-col items-center justify-center mb-8" key={index}>
                                <img src={item.img} alt={item.title} className="object-cover rounded-lg mb-2" />
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700 mb-2">{item.price}</p>
                                    <StarRating rating={item.rating} /> {/* Display star ratings */}
                                    <button onClick={() => handleBuyNowClick(item)} className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md">Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {cartItems.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[50vh]">
                    <h2 className="lg:text-5xl text-3xl font-semibold mb-20 mt-20">Your Cart</h2>
                    <p className="text-lg mb-4">Your cart is empty</p>
                    <Link to="/" className="text-blue-500 underline">Explore Products</Link>
                </div>
            )}
        </>
    );
};

export default Cart;
