// ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="product-detail">
      <button onClick={onClose}>Close</button>
      <img src={product.imageSrc} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <div>Ratings: {product.starRatings}</div>
      {/* Add reviews section */}
    </div>
  );
};

export default ProductDetail;
