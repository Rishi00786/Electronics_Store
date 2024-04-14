import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import useNavigation from './useNavigation';
import s4 from '../assets/SALE/s4.webp'
import s5 from '../assets/SALE/s5.webp'
import a2 from '../assets/Shop All/a2.webp';
import a3 from '../assets/Shop All/a3.webp';
import t1 from '../assets/Tablets/t1.webp';
import t2 from '../assets/Tablets/t2.webp';
import t3 from '../assets/Tablets/t3.webp';

const StarIcon = ({ className, filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const products = [
  {
    title: "Product 1",
    imageUrl: s4,
    price: 20 + '$',
    ratings: 4.5
  },
  {
    title: "Product 2",
    imageUrl: s5,
    price: 20 + '$',
    ratings: 5
  },
  {
    title: "Product 3",
    imageUrl: t1,
    price: 20 + '$',
    ratings: 4
  },
  {
    title: "Product 4",
    imageUrl: t2,
    price: 20 + '$',
    ratings: 4
  },
  {
    title: "Product 5",
    imageUrl: t3,
    price: 20 + '$',
    ratings: 4
  },
  {
    title: "Product 6",
    imageUrl: a2,
    price: 20 + '$',
    ratings: 4
  },
  {
    title: "Product 7",
    imageUrl: a3,
    price: 20 + '$',
    ratings: 4
  },
];

// Function to generate an individual slide
const generateSlide = (product, setSelectedProduct) => {
  const { navigateTo } = useNavigation();

  const handleProductClick = () => {
    // Call setSelectedProduct to update the selected product
    setSelectedProduct(product);
    const path = `/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`;
    navigateTo(path);
  };

  return (
    <div>
      <div key={product.title} className="p-4 flex flex-col items-center justify-center " onClick={handleProductClick}>
        <img
          id='i_box2'
          src={product.imageUrl}
          alt={product.title}
          className="mx-auto w-full md:w-64 h-64 object-cover"
        />
        <div className='flex flex-col items-center justify-center bg-gray-400 text-white w-full md:w-64'>
          <h3 className="text-lg font-bold mt-6">{product.title}</h3>
          <p className="text-gray-700 mt-1">{product.price}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                className="text-yellow-400 w-8"
                filled={index < Math.floor(product.ratings)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to generate multiple slides
const generateSlides = (products, setSelectedProduct) => {
  return products.map(product => generateSlide(product, setSelectedProduct));
};

const Slick2 = ({ setSelectedProduct }) => {
  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center m-8 overflow-hidden gap-4">
      <h1 className='text-4xl font-medium text-center'>You might also like</h1>
      <div className="px-4 relative">
        <Slider {...settings} ref={sliderRef}>
          {generateSlides(products, setSelectedProduct)}
        </Slider>
        <button className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-600 text-white sm:px-4 sm:py-2 px-2 py-1 mr-12 rounded-md md:ml-2" onClick={goToPrev}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-600 text-white sm:px-4 sm:py-2 px-2 py-1 ml-12 rounded-md md:mr-2" onClick={goToNext}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slick2;
