import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useStateContext } from '../context/context';
import useNavigation from './useNavigation';
import SearchAlert from './SearchAlert'; // Import the SearchAlert component
const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const [heartFilled, setHeartFilled] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert
    const { switchh, setswitchh } = useStateContext();
    const { navigateTo } = useNavigation(); // Using custom hook for navigation

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Dern Galaxy";
        } else {
            let pathname = decodeURIComponent(location.pathname.replace(/[/-\s]/g, '')); // Remove '/', '-' and spaces, but keep '&'
            pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1); // Capitalize the first letter
            document.title = "Dern Galaxy - " + pathname;
        }
    }, [location.pathname]);
    

    

    const handleonswitchh = () => {
        setswitchh(!switchh);
        // console.log("triggered")
    }

    const toggleHeart = () => {
        setHeartFilled(!heartFilled);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault(); 
        if (searchQuery === "phones" || searchQuery === "mobiles" || searchQuery === "smartphones" || searchQuery === "cell phones") {
            navigateTo('/mobiles');
        } else if (searchQuery === "computers" || searchQuery === "pcs" || searchQuery === "laptops" || searchQuery === "desktops") {
            navigateTo('/computers');
        } else if (searchQuery === "drones" || searchQuery === "cameras" || searchQuery === "photography" || searchQuery === "camera equipment" || searchQuery === "camera accessories") {
            navigateTo('/drones & cameras');
        } else if (searchQuery === "sale" || searchQuery === "discount" || searchQuery === "clearance" || searchQuery === "special offers") {
            navigateTo('/sale');
        } else if (searchQuery === "tablets" || searchQuery === "ipads" || searchQuery === "tablet computers") {
            navigateTo('/tablets');
        } else if (searchQuery === "best sellers" || searchQuery === "popular" || searchQuery === "top sellers" || searchQuery === "trending") {
            navigateTo('/best sellers');
        } else if (searchQuery === "tv" || searchQuery === "home cinema" || searchQuery === "televisions" || searchQuery === "home theater") {
            navigateTo('/t.v. & home cinema');
        } else if (searchQuery === "wearable watch" || searchQuery === "smartwatch" || searchQuery === "fitness tracker" || searchQuery === "wearable technology") {
            navigateTo('/wearable watch');
        } else if (searchQuery === "speakers" || searchQuery === "audio systems" || searchQuery === "sound systems" || searchQuery === "home audio") {
            navigateTo('/speakers');
        } else if (searchQuery === "headphones" || searchQuery === "earphones" || searchQuery === "earbuds" || searchQuery === "wireless headphones") {
            navigateTo('/headphones');
        } else {
            setShowAlert(true); // Set showAlert to true if no matching category found
        }
        setSearchQuery('');
         // Reset searchQuery after submission
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

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Watch for changes in showAlert state and reset it after 3 seconds
    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showAlert]);

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
                    <div><Link to="/">Call us <u>123-456-7890</u></Link></div>
                </div>
            </div>
            <div id='second' className='second w-screen h-20 bg-white flex flex-col gap-4  justify-center'>
                <div className='flex items-center justify-between text-black'>
                    <div id='forml1' className='flex gap-12 ml-12'>
                        <div className='sm:text-4xl text-2xl font-semibold'><Link to="/">Dern Galaxy</Link></div>
                        <form onSubmit={handleSearchSubmit}>
                            <div className='flex justify-center' id='input1'>
                                <input
                                    type="text"
                                    placeholder='Search..'
                                    className='bg-gray-200 rounded-l-full text-center w-72'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className='w-20 h-12 bg-purple-500 flex items-center justify-center rounded-r-full'>
                                    <button type="submit"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex mr-12 gap-12'>
                        <div id='login' className='flex gap-2'>
                            <div className=''><i className="fa-solid fa-user text-2xl"></i></div>
                            <Link to="/login"><div className='font-light'>Log In</div></Link>
                        </div>
                        <div id='heart' onClick={toggleHeart}>
                            {heartFilled ? <i className="fa-solid fa-heart text-2xl text-red-500"></i> : <i className="fa-regular fa-heart text-2xl"></i>}
                        </div>
                        <div id='formr1' className='gap-8 flex'>
                            <Link to="/my-cart"><i className="fa-solid fa-cart-shopping text-2xl"></i></Link>
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
                <div><Link to="/T.V. & Home Cinema">T.V & Home Cinema</Link></div>
                <div><Link to="/Wearable Watch">Wearable Watch</Link></div>
                <div><Link to="/Sale">Sale</Link></div>
            </div>}
            {/* Conditionally render the SearchAlert component if showAlert is true */}
            {showAlert && <SearchAlert />}
        </>
    );
}

export default Navbar;
