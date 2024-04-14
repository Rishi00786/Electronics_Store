import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Sidebar = () => {

    const generate=(name)=>{
        return(
            <div className='flex flex-col gap-2 items-center justify-center lg:gap-6'>
                <Link to={"/"+name}><div className='font-thin text-sm'>{name}</div></Link>
                <div id='line' className='w-full bg-black'></div>
            </div>
        )
    }

  return (
    <>
    <div id="main" className='flex flex-col gap-20 lg:gap-8 h-max w-screen lg:w-max'>
        <div className='flex flex-col gap-12'>
        <div className='flex gap-4 mt-4 ml-4 lg:hidden'>
            <div className='font-thin text-xl'>Log In</div>
            <div><i className="fa-solid fa-user text-2xl"></i></div>
        </div>
        <div className='flex gap-16 overflow-scroll font-thin text-sm flex-wrap ml-4 lg:hidden'>
            <div><Link to="/about-us"><u>About</u></Link></div>
            <div><Link to="/contact-us"><u>Contact</u></Link></div>
            <div><Link to="/help-centre"><u>Help</u></Link></div>
            <div><Link to="/">Call us <u>123-456-7890</u></Link></div>
            <div><i className="fa-regular fa-heart text-2xl"></i></div>
        </div>
        </div>
        <div className='flex flex-col gap-4 justify-center lg:items-start font-thin text-sm'>
            {generate("Shop All")}
            {generate("Computers")}
            {generate("Tablets")}
            {generate("Drones & Cameras")}
            {generate("Audio")}
            {generate("Mobile")}
            {generate("T.V. & Home Cinema")}
            {generate("Wearable Watch")}
            {generate("Sale")}
        </div>
    </div>
    </>
  )
}

export default Sidebar
