import React, { useRef } from 'react';
import Slider from 'react-slick';
import tab from '../assets/sale.webp';
import {Link} from 'react-router-dom'
import s1 from '../assets/SALE/s1.webp'
import s2 from '../assets/SALE/s2.webp'
import s3 from '../assets/SALE/s3.webp'
import s4 from '../assets/SALE/s4.webp'
import s5 from '../assets/SALE/s5.webp'
import s6 from '../assets/SALE/s6.webp'
import s7 from '../assets/SALE/s7.webp'
import s8 from '../assets/SALE/s8.webp'
import s9 from '../assets/SALE/s9.webp'
import s10 from '../assets/SALE/s10.webp'
// SVG star icon
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

const pproducts = [
  {
    title: "Product 1",
    imageUrl: s1,
    price: 20+'$',
    ratings: 4.5
  },
  {
    title: "Product 2",
    imageUrl: s2,
    price: 20+'$',
    ratings: 5
  },
  {
    title: "Product 3",
    imageUrl: s3,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 4",
    imageUrl: s4,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 5",
    imageUrl: s5,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 6",
    imageUrl: s6,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 7",
    imageUrl: s7,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 8",
    imageUrl: s8,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 9",
    imageUrl: s9,
    price: 20+'$',
    ratings: 4
  },
  {
    title: "Product 10",
    imageUrl: s10,
    price: 20+'$',
    ratings: 4
  },
];

// Function to generate an individual slide
const generateSlide = (product) => {
  return (
    <div>
    <div key={product.title} className="p-4 flex flex-col items-center justify-center">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="mx-auto w-64 h-64 object-cover border border-red-300"
      />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
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
  );
};

// Function to generate multiple slides
const generateSlides = (products) => {
  return products.map(product => generateSlide(product));
};

const Slick = () => {
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
        },
      },
      {
        breakpoint: 1024, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white flex flex-col h-[80vh] justify-center m-8 overflow-hidden gap-4">
      <h1 className='self-center text-4xl font-medium'>Sale</h1>
      <div className="px-4 relative"> {/* Add custom padding here */}
        <Slider {...settings} ref={sliderRef}>
          {generateSlides(pproducts)}
        </Slider>
        <button className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-600 text-white px-4 py-2 rounded-md ml-2 hidden sm:block" onClick={goToPrev}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hidden sm:block" onClick={goToNext}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <Link to="/Sale" className='self-center'><div className='cursor-pointer bg-purple-500 text-white text-xl font-bold rounded-full w-32 h-12 flex items-center justify-center mt-8'>View All</div></Link>
    </div>
  );
};

export default Slick;
