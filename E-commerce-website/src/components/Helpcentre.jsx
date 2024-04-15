import React, { useState } from 'react';

const Helpcentre = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const generateFAQ = (question, description, isOpen, setIsOpen) => {
    return (
      <>
        <button
          className="flex items-center justify-between w-full p-4 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium">{question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`${isOpen ? 'rotate-180' : ''} w-6 h-6 ml-2 transition-transform`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 text-gray-700 bg-white rounded-md">
            <p className='text-sm font-light'>{description}</p>
            <div className="flex text-2xl gap-4 mt-2">
              <a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/sshui_bnaeh/" target='_blank'><i className="fa-brands fa-square-instagram"></i></a>
              <a href="https://github.com/Rishi00786" target='_blank'><i className="fa-brands fa-square-github"></i></a>
            </div>
          </div>
        )}
        <hr className="w-full border-gray-300" />
      </>
    );
  };

  return (
    <div className="p-6 w-screen h-max mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 gap-24">
      <h1 className="md:text-5xl font-semibold text-center text-3xl text-gray-900 mt-12">TechShed Help Centre</h1>
      <div className='flex flex-col gap-12'>
        <h2 className="text-xl font-semibold text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4 w-full max-w-md flex flex-col gap-4 mb-44">
          {generateFAQ(
            "What is an FAQ Section?",
            "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'.",
            isOpen1,
            setIsOpen1
          )}
          {generateFAQ(
            "Why do FAQs matter?",
            "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
            isOpen2,
            setIsOpen2
          )}
          {generateFAQ(
            "Where can I add my FAQs?",
            "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
            isOpen3,
            setIsOpen3
          )}
        </div>
      </div>
    </div>
  );
};

export default Helpcentre;
