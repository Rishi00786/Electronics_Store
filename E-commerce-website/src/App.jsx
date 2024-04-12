import React, { useState, useEffect } from 'react';
import './App.css';
// import Items from './components/Items';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useStateContext } from './context/context'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body_1 from './components/Body_1'
import ActiveSlider from './components/ActiveSlider';
import NextComp from './components/NetxComp';
import Imgtxt from './components/Imgtxt';
import Slick from './components/Slick';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Imgtxt2 from './components/Imgtxt2';
import Imgtxt3 from './components/Imgtxt3';
import Helpcentre from './components/Helpcentre';
import About from './components/About';

function App() {

  const { switchh } = useStateContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar/>
      {!switchh && <Body_1/>}
      {!switchh && <ActiveSlider/>}
      {!switchh && <NextComp/>}
      {!switchh && <Imgtxt/>}
      {!switchh && <Slick/>}
      {!switchh && <Imgtxt2/>}      
      {!switchh && <Brands/>}
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/help-centre",
      element: <>
      <Navbar/>
      {!switchh && <Helpcentre/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/about-us",
      element: <>
      <Navbar/>
      {!switchh && <About/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
