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
import Category from './components/Category';
import products from './components/data';
import ProductDetail from './components/Productdetail';
import Slick2 from './components/Slick2';
import Contact from './components/Contact';
import ShipRet from './components/ShipRet';
import TermsCondn from './components/TermsCondn';
import Cart from './components/Cart';
import Login from './components/Login';

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
      path: "/login",
      element: <>
      <Navbar/>
      {!switchh && <Login/>}            
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
    {
      path: "/contact-us",
      element: <>
      <Navbar/>
      {!switchh && <Contact/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/shipping-returns",
      element: <>
      <Navbar/>
      {!switchh && <ShipRet/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/terms-conditions",
      element: <>
      <Navbar/>
      {!switchh && <TermsCondn/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/payment-methods",
      element: <>
      <Navbar/>
      {!switchh && <TermsCondn/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/careers",
      element: <>
      <Navbar/>
      {!switchh && <About/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/my-cart",
      element: <>
      <Navbar/>
      {!switchh && <Cart/>}            
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Drones & Cameras",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.dronesAndCameras} heading="Drones and Cameras"/>} 
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Mobiles",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.mobile} heading="Mobiles"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Computers",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.computers} heading="Computers"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Tablets",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.tablets} heading="Tablets"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Wearable Watch",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.wearableTech} heading="Wearable Tech"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Sale",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.sale} heading="Sale Products"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Shop All",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.shopAll} heading="All Products"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/T.V & Home Cinema",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.tvAndHomeCinema} heading="T.V & Home Cinema"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Best Sellers",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.computers} heading="Best Sellers"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Speakers",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.computers} heading="Speakers"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    {
      path: "/Headphones",
      element: <>
      <Navbar/>
      {!switchh && <Category products={products.computers} heading="Headphones"/>}      
      {!switchh && <Imgtxt3/>}      
      {!switchh && <Footer/>}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    },
    ...Object.entries(products).flatMap(([category, productList]) => (
      [
        {
          path: `/${category.replace(/\s+/g, '-').toLowerCase()}`,
          element: (
            <>
              <Navbar />
              {!switchh && <Category products={productList} heading={category} />}
              {!switchh && <Imgtxt3 />}
              {!switchh && <Footer />}
              {switchh && (
                <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}>
                  <Sidebar />
                </div>
              )}
            </>
          )
        },
        // Define routes for each product
        ...productList.map(product => ({
          path: `/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`,
          element: (
            <>
              <Navbar />
              {switchh && (
                <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}>
                  <Sidebar />
                </div>
              )}
              <ProductDetail product={product} />
              <Slick2/>
              <Imgtxt3/>
              <Footer />
            </>
          )
        }))
      ]
    )),
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
