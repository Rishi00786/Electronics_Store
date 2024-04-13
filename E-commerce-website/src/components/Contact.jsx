import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center">
    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center relative mt-16 mb-32">
      <span className="relative z-10">Get in Touch</span>
    </h2>
    <div className="w-full border-b border-gray-700 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="md:col-span-1">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 text-center md:text-start">Opening Hours</h3>
            <div className="flex flex-col justify-between md:items-start items-center mb-4">
              <div className="w-full md:w-2/3 text-center md:text-left mb-4 md:mb-0">
                <h4 className="text-lg mb-2"><b>Mon-Fri</b> : 8am-8pm</h4>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left mb-4 md:mb-0">
                <h4 className="text-lg mb-2"><b>Saturday</b> : 9am - 7pm</h4>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h4 className="text-lg mb-2"><b>Sunday</b> : 9am - 8pm</h4>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 md:text-left text-center">Store Location</h3>
            <p className="text-gray-600 md:text-left text-center">500 Terry Francine Street</p>
            <p className="text-gray-600 md:text-left text-center">San Francisco, CA 94158</p>
            <p className="text-gray-600 md:text-left text-center">info@mysite.com</p>
            <p className="text-gray-600 md:text-left text-center">123-456-7890</p>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col items-start">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 md:text-left text-center self-center">We're here to help!</h3>
            <p className="text-gray-600 w-full lg:w-96 md:text-left text-center">Fill out the form with any query on your mind and we'll get back to you as soon as possible</p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md bg-transparent flex flex-col items-center justify-center self-center mt-12">
            <div className="flex flex-wrap -mx-4 w-full">
              <div className="w-full md:w-1/2 px-4 mb-4 md:text-center">
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 md:text-left text-center">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent appearance-none rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ borderBottom: '1px solid #ccc' }}
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:text-center">
                <label htmlFor="lastName" className="md:text-left text-center block text-gray-700 font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className="bg-transparent appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ borderBottom: '1px solid #ccc' }}
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:text-center">
                <label htmlFor="email" className="md:text-left text-center block text-gray-700 font-bold mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="appearance-none bg-transparent rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ borderBottom: '1px solid #ccc' }}
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:text-center">
                <label htmlFor="subject" className="md:text-left text-center block text-gray-700 font-bold mb-2">
                  Subject*
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  className="appearance-none bg-transparent rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ borderBottom: '1px solid #ccc' }}
                />
              </div>
              <div className="w-full px-4 mb-4 md:text-center">
                <label htmlFor="message" className="md:text-left text-center  block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleInputChange}
                  className="appearance-none bg-transparent rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  style={{ borderBottom: '1px solid #ccc' }}
                ></textarea>
              </div>
            </div> 
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="bg-blue-500 p-6 md:p-10 shadow-lg shadow-black flex flex-col items-center justify-center gap-2 m-8">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Newsletter</h2>
          <p className="text-white text-center mb-6">Sign up to receive updates on new arrivals and special offers</p>
          <form className="flex flex-col items-center w-full md:w-auto">
            <div className="flex flex-col items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Your Email Here"
                className="w-full md:w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-blue-800 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default Contact;
