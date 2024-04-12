import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phone2 from '../assets/phone_2.webp';
import phone3 from '../assets/phone_3.webp';
import led1 from '../assets/LED_!.webp';
import watch from '../assets/WATCH.webp';

const ArticleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { title: "JP - Space Tablet 10.4' Wi-Fi 32GB", OldPrice: "85$", NewPrice: "70$", img: phone2, ratings: 4, OnSale: true },
    { title: "Ocean Pro 11 - 12.3' Touch Screen", OldPrice: "90$", NewPrice: "70$", img: phone3, ratings: 4, OnSale: true },
    { title: "Shel 50' Class LED 4K UHD Smart TV", OldPrice: "90$", NewPrice: "70$", img: led1, ratings: 4, OnSale: true },
    { title: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking", OldPrice: "90$", NewPrice: "70$", img: watch, ratings: 4, OnSale: true }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const generate_card = (card) => {
    return (
      <div key={card.title} id='articles' className='text-black bg-white shadow-xl shadow-black flex flex-col items-center justify-center'>
        <div><img src={card.img} alt="" /></div>
        <div className='font-bold text-xl'>{card.title}</div>
        <div className='font-medium text-purple-600 text-xl'>{card.OnSale && <strike>{card.OldPrice} </strike>}{card.NewPrice}</div>
        <div>Ratings: {card.ratings}</div>
      </div>
    );
  };

  return (
    <div id='article_box' className=''>
      <Slider {...settings} className=''>
        <div className=''>
        {cards.map(card => generate_card(card))}
        </div>
      </Slider>
    </div>
  );
};

export default ArticleSlider;
