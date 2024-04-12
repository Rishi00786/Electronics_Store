// Category.jsx

import React from 'react';
import useNavigation from './useNavigation';
import ProductDetail from './Productdetail';

const renderStarRatings = (starRatings) => {
    const stars = [];
    for (let i = 0; i < starRatings; i++) {
        stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
    }
    return stars;
};

const Category = ({ heading, products }) => {
    const { navigateTo } = useNavigation();

    const handleProductClick = (product) => {
        const path = `/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`;
        navigateTo(path);
    };

    return (
        <div className="category mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">{heading}</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative" onClick={() => handleProductClick(product)}>
                        {product.onSale && <span className="bg-red-500 text-white font-bold py-1 px-2 rounded-full absolute top-0 left-0 m-4">On Sale!</span>}
                        <img src={product.imageSrc} alt={product.title} className="w-full h-56 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <div className="text-gray-700 mb-2">{product.price}</div>
                            <div className="flex items-center mb-2">
                                {renderStarRatings(product.starRatings)}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
