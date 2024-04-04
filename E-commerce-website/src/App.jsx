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


function App() {

  const { switchh } = useStateContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar/>
      <Body_1/>
      {switchh && <div id='sidebar' className={switchh ? 'sidebar-visible' : 'sidebar-hidden'}><Sidebar/></div>}
      </>
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
