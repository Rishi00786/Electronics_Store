import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import f1 from '../assets/f1.webp';
import f2 from '../assets/p2.webp';
import f3 from '../assets/p3.webp';
import f4 from '../assets/p4.webp';
import f5 from '../assets/p5.webp';
import f6 from '../assets/p6.webp';
import f7 from '../assets/p7.webp';
import f8 from '../assets/p8.webp';

const Footer = () => {
  return (
    <footer className="bg-white text-black flex flex-col justify-between h-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-8">Store Location</h3>
            <p className="mb-2">500 Terry Francine Street</p>
            <p className="mb-2">San Francisco, CA 94158</p>
            <p className="mb-2">info@mysite.com</p>
            <p className="mb-2">123-456-7890</p>
            <div className='flex gap-4 mt-4'>
                <p><i className="fa-brands fa-instagram text-2xl"></i></p>
                <p><i className="fa-brands fa-linkedin text-2xl"></i></p>
                <p><i className="fa-brands fa-square-youtube text-2xl"></i></p>
                <p><i className="fa-brands fa-x-twitter text-2xl"></i></p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Shop</h3>
            <Link to="/Shop All">Shop All</Link>
            <Link to="/Computers">Computers</Link>
            <Link to="/Tablets">Tablets</Link>
            <Link to="/Drones & Cameras">Drones & Cameras</Link>
            <Link to="/Wearable Watch">Audio</Link>
            <Link to="/Mobile">Mobile</Link>
            <Link to="/T.V & Home Cinema">T.V & Home Cinema</Link>
            <Link to="/Wearable Watch">Wearable Tech</Link>
            <Link to="/Sale">Sale</Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Customer Support</h3>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/help-centre">Help Centre</Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Policy</h3>
            <Link to="/shipping-returns">Shipping & Returns</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/payment-methods">Payment Methods</Link>
            <Link to="/help-centre">FAQ</Link>
          </div>
        </div>
        <div className='bg-gray-200 h-1 w-screen'></div>
        <div>
          We accept the following paying methods
        </div>
        <div className="flex gap-12 items-center justify-center flex-wrap">
          <img src={f1} alt="" />
          <img src={f2} alt="" />
          <img src={f3} alt="" />
          <img src={f4} alt="" />
          <img src={f5} alt="" />
          <img src={f6} alt="" />
v         <img src={f7} alt="" />
          <img src={f8} alt="" />
        </div>
      </div>
      <div className="bg-gray-200 text-black w-full text-center py-4">
        © 2035 by TechShed. Powered and secured by <a href="https://www.instagram.com/sshui_bnaeh/" target='_blank'><u>Rishi</u></a>
      </div>
    </footer>
  );
};

export default Footer;
