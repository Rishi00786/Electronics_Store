import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Body_1 from './components/Body_1';
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
import { useStateContext } from './context/context';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {switchh, setSwitchh} = useStateContext(); // Assuming this state is defined in your context
 
  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname;
      document.title = "Electronics Store - " + pathname;
    };

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          {!switchh && (
            <>
              <Body_1 />
              <ActiveSlider setSelectedProduct={setSelectedProduct} />
              <NextComp />
              <Imgtxt />
              <Slick setSelectedProduct={setSelectedProduct} />
              <Imgtxt2 />
              <Brands />
              <Imgtxt3 />
              <Footer />
            </>
          )}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>
        } />
        <Route path="/help-centre"
        element={<>
          <Navbar />
          {!switchh && <Helpcentre />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/login" element={<>
          <Navbar />
          {!switchh && <Login />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/about-us" element={<>
          <Navbar />
          {!switchh && <About />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/contact-us" element={<>
          <Navbar />
          {!switchh && <Contact />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/shipping-returns" element={<>
          <Navbar />
          {!switchh && <ShipRet />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/terms-conditions" element={<>
          <Navbar />
          {!switchh && <TermsCondn />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/payment-methods" element={<>
          <Navbar />
          {!switchh && <TermsCondn />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/careers" element={<>
          <Navbar />
          {!switchh && <About />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/my-cart" element={<>
          <Navbar />
          {!switchh && <Cart />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/drones & cameras" element={<>
          <Navbar />
          {!switchh && <Category products={products.dronesAndCameras} heading="Drones and Cameras" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/mobiles" element={<>
          <Navbar />
          {!switchh && <Category products={products.mobile} heading="Mobiles" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/computers" element={<>
          <Navbar />
          {!switchh && <Category products={products.computers} heading="Computers" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/tablets" element={<>
          <Navbar />
          {!switchh && <Category products={products.tablets} heading="Tablets" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Wearable Watch" element={<>
          <Navbar />
          {!switchh && <Category products={products.wearableTech} heading="Wearable Tech" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Sale" element={<>
          <Navbar />
          {!switchh && <Category products={products.sale} heading="Sale Products" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Shop All" element={<>
          <Navbar />
          {!switchh && <Category products={products.shopAll} heading="All Products" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/T.V. & Home Cinema" element={<>
          <Navbar />
          {!switchh && <Category products={products.tvAndHomeCinema} heading="T.V & Home Cinema" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Best Sellers" element={<>
          <Navbar />
          {!switchh && <Category products={products.computers} heading="Best Sellers" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Speakers" element={<>
          <Navbar />
          {!switchh && <Category products={products.computers} heading="Speakers" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/Headphones" element={<>
          <Navbar />
          {!switchh && <Category products={products.computers} heading="Headphones" />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        <Route path="/product/:productName" element={<>
          <Navbar />
          {!switchh && <ProductDetail product={selectedProduct} />}
          {!switchh && <Imgtxt3 />}
          {!switchh && <Footer />}
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
        </>} />
        {Object.entries(products).flatMap(([category, productList]) => [
          <Route
            key={category}
            path={`/${category.replace(/\s+/g, '-').toLowerCase()}`}
            element={
              <>
                <Navbar />
                {!switchh && <Category products={productList} heading={category} />}
                {!switchh && <Imgtxt3 />}
                {!switchh && <Footer />}
            {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
              </>
            }
          />,
          ...productList.map(product => (
            <Route
              key={product.title}
              path={`/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`}
              element={
                <>
                  <Navbar />
              {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
                  <ProductDetail product={product} />
                  <Slick2 setSelectedProduct={setSelectedProduct} />
                  <Imgtxt3 />
                  <Footer />
                </>
              }
            />
          )),
        ])}
      </Routes>
    </Router>
  );
}

export default App;
