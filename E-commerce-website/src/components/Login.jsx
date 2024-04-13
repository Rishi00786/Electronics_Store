import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const labelRef1 = useRef();
  const labelRef2 = useRef();
  const labelRef3 = useRef();

  const handleOnClick = (labelRef) => {
    const viewportWidth = window.innerWidth;
    let translateX, translateY;

    if (viewportWidth < 768) {
      translateX = '-8.5vw'; // Adjust as needed
      translateY = '-0.3vh'; // Adjust as needed
    } else {
      translateX = '-4.6vw'; // Default value for larger screens
      translateY = '-0.2vh'; // Default value for larger screens
    }

    labelRef1.current.style.transition = "transform 0s ease-in";
    labelRef2.current.style.transition = "transform 0s ease-in";
    labelRef3.current.style.transition = "transform 0s ease-in";

    labelRef.current.style.transition = "transform 0.2s ease-in";
    labelRef.current.style.transform = `translateX(${translateX}) translateY(${translateY}) scale(0.75)`;
  };

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/mail/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone })
      });
      const json = await response.json();
      console.log(json);
      localStorage.setItem('Details', JSON.stringify(json)); // Store as string
      history("/"); // Navigate to "/"
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center bg-black h-screen -z-50 containerr'>
        <div id='details' className='flex justify-center items-center font-bold italic'>
          <h1 className='text-green-400 text-center self-center'>Enter Details for Contact</h1>
        </div>
        <div id='boxe' className="box z-20 flex flex-col items-center justify-center border-4 rounded-3xl  sm:w-9/12 sm:h-96 sm:mt-12 sm:gap-16 md:w-3/5">
          <div className='flex flex-col'>
            <label htmlFor='name' ref={labelRef1} className='text-black'>Name</label>
            <div><input onChange={onChange} name="name" onClick={() => handleOnClick(labelRef1)} type="text" required="" className='bg-transparent text-black outline-none w-full' /></div>
            <div className='bg-black  h-1' id='line'></div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' ref={labelRef2} className='text-black'>Email</label>
            <div><input onChange={onChange} name="email" onClick={() => handleOnClick(labelRef2)} type="email" required="" className='bg-transparent text-black outline-none w-full' /></div>
            <div className='bg-black  h-1' id='line'></div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' ref={labelRef3} className='text-black'>Phone</label>
            <div><input onChange={onChange} name="phone" onClick={() => handleOnClick(labelRef3)} type="phone" required="" className='bg-transparent text-black outline-none w-full' /></div>
            <div className='bg-black  h-1' id='line'></div>
          </div>
          <div onClick={handleSubmit} className=''>
            <div  id='btn' className='w-36 h-12 bg-black text-white border-4 border-gray-500 text-center flex items-center justify-center'>Send</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
