import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-6 text-gray-600">
          <a href="#" className="hover:text-gray-800">About</a>
          <a href="#" className="hover:text-gray-800">Blog</a>
          <a href="#" className="hover:text-gray-800">Jobs</a>
          <a href="#" className="hover:text-gray-800">Press</a>
          <a href="#" className="hover:text-gray-800">Accessibility</a>
          <a href="#" className="hover:text-gray-800">Partners</a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.6c-.9.4-1.9.6-2.9.7 1.1-.7 1.9-1.8 2.3-3-1 .6-2.1 1-3.3 1.3-.9-.9-2.2-1.4-3.5-1.4-2.7 0-4.9 2.3-4.9 5 0 .4 0 .8.1 1.1-4.1-.2-7.8-2.2-10.2-5.3-.4.7-.6 1.6-.6 2.5 0 1.7.8 3.2 2.2 4.1-.7 0-1.4-.2-2-.5v.1c0 2.4 1.7 4.4 3.9 4.9-.8.2-1.6.3-2.5.1.7 2.2 2.7 3.7 5.1 3.7-2.2 1.8-5.1 2.9-8.2 2.9H0c2.9 1.9 6.3 3 10 3 12 0 18.5-10.2 18.5-19.1v-.9c1.3-.9 2.3-2.1 3.1-3.4z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2C6.5 2.2 2 6.7 2 12.2c0 4.6 3.4 8.4 7.9 9.2v-6.5H7.3V12h2.7v-1.8c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.7h-1.4c-1.4 0-1.9.9-1.9 1.9v1.2h3.2l-.5 2.9h-2.7v6.5c4.5-.8 7.9-4.6 7.9-9.2 0-5.5-4.5-10-10-10z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.8 6.1c.1-.4.1-.9.1-1.3 0-.3 0-.6-.1-.9-.3-1.2-1.1-2.1-2.3-2.5-.3-.1-.6-.1-.9-.1H4.4c-1.3 0-2.3.7-2.9 1.8-.2.4-.4.9-.4 1.4v12.5c0 .5.1 1 .4 1.4.6 1.1 1.6 1.8 2.9 1.8h14.2c1.3 0 2.4-.8 2.9-1.9.2-.3.3-.7.4-1.1V6.1zM9.4 14.8V9.2l5.6 2.8-5.6 2.8z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.1 9.4 7.5 11v-7.8H5.5V12h2v-2.5c0-2.3 1.4-3.5 3.5-3.5.7 0 1.4 0 2 .1v2.3h-1.3c-1.1 0-1.3.5-1.3 1.2V12h2.5l-.3 2.2h-2.2v7.8c4.4-1.6 7.5-5.9 7.5-11 0-6.6-5.4-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.9c-.8.4-1.6.6-2.5.7.9-.6 1.5-1.3 1.8-2.3-.9.5-1.9.9-2.9 1.1-.8-.9-1.9-1.4-3.1-1.4-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.3.6-.5 1.3-.5 2 0 1.4.7 2.7 1.8 3.5-.6 0-1.3-.2-1.9-.5v.1c0 1.9 1.4 3.5 3.1 3.9-.6.1-1.3.2-1.9.1.5 1.6 2 2.8 3.7 2.8-1.4 1.1-3.2 1.7-5 1.7-.3 0-.6 0-.9-.1 1.8 1.2 4 2 6.4 2 7.7 0 11.9-6.4 11.9-12v-.5c.8-.6 1.4-1.3 2-2.1z"/>
            </svg>
          </a>
        </div>


       {/* Newsletter Subscription Section */}
       <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-800"> Get the Milk Subscribed</h2>
          <p className="text-gray-600 mb-4">Get the daily fresh milk choose from a diverse menu</p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
        </div>


        <div className="text-gray-600 text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer
