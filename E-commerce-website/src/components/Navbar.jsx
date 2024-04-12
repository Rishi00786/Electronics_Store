import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useStateContext } from '../context/context';

const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const { switchh , setswitchh } = useStateContext();

    const handleonswitchh = () => {
        setswitchh(!switchh);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplay(true);
            } else {
                setDisplay(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check for display when component mounts
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='first w-screen h-12 bg-gray-600 flex text-white items-center justify-between font-thin text-sm'>
                <div id='forml2' className='flex gap-4 ml-12'>
                    <div><i className="fa-solid fa-kaaba"></i></div>
                    <div>Free Shipping for orders over $50</div>
                </div>
                <div className='flex gap-12 mr-12' id='firstdetails'>
                    <div><Link to="/about-us"><u>About</u></Link></div>
                    <div><Link to="/contact-us"><u>Contact</u></Link></div>
                    <div><Link to="/help-centre"><u>Help</u></Link></div>
                    <div><Link to="/call">Call us <u>123-456-7890</u></Link></div>
                </div>
            </div>
            <div id='second' className='second w-screen h-20 bg-white flex flex-col gap-4  justify-center'>
                <div className='flex items-center justify-between text-black'>
                    <div id='forml1' className='flex gap-12 ml-12'>
                        <div className='text-4xl font-semibold'>TechShed</div>
                        <div className='flex justify-center' id='input1'>
                            <input type="text" placeholder='Search..' className='bg-gray-200 rounded-l-full text-center w-72' />
                            <div className='w-20 h-12 bg-purple-500 flex items-center justify-center rounded-r-full'>
                                <button><i className="fa-solid fa-magnifying-glass text-white"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='flex mr-12 gap-12'>
                        <div id='login' className='flex gap-2'>
                            <div className=''><i className="fa-solid fa-user text-2xl"></i></div>
                            <Link to="/login"><div className='font-light'>Log In</div></Link>
                        </div>
                        <div id='heart'><i className="fa-regular fa-heart text-2xl"></i></div>
                        <div id='formr1' className='gap-8 flex'>
                            <i className="fa-solid fa-cart-shopping text-2xl"></i>
                            {!switchh && <div id='bars' onClick={handleonswitchh} className='hidden text-2xl'><i className="fa-solid fa-bars"></i></div>}
                            {switchh && <div id='bars' onClick={handleonswitchh} className='text-2xl'><i className="fa-solid fa-x"></i></div>}
                        </div>
                    </div>
                </div>
                {display && <div className='justify-center' id='input2'>
                    <input type="text" placeholder='Search..' className='bg-gray-200 rounded-l-full text-center w-72' id="inp" />
                    <div className='w-20 h-12 bg-purple-500 flex items-center justify-center rounded-r-full'>
                        <button><i className="fa-solid fa-magnifying-glass text-white"></i></button>
                    </div>
                </div>}
            </div>
            {!display && <div id='third' className='w-screen h-12 bg-gray-200 flex items-center gap-8 font-light text-sm'>
                <div className='ml-12'><Link to="/Shop All">Shop All</Link></div>
                <div><Link to="/Computers">Computers</Link></div>
                <div><Link to="/Tablets">Tablets</Link></div>
                <div><Link to="/Drones & Cameras">Drones and Cameras</Link></div>
                <div><Link to="/Mobiles">Mobiles</Link></div>
                <div><Link to="/T.V & Home Cinema">T.V & Home Cinema</Link></div>
                <div><Link to="/Wearable Watch">Wearable Watch</Link></div>
                <div><Link to="/Sale">Sale</Link></div>
            </div>}
        </>
    );
}

export default Navbar;
