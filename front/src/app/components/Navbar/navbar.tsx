/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
// import NavbarContext from "./navbarcontext/NavbarContext";
import AuthNav from "./navbaitem/AuthNav.";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen((prev) => !prev);
  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:px-6 lg:py-4">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center">
          <img
            src="https://images.seeklogo.com/logo-png/0/2/apple-logo-png_seeklogo-9832.png"
            alt="logo"
            className="h-12 lg:h-16"
            />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white lg:text-3xl">
            Manzana Tech
          </span>
            </a>
        </div>
        <div className="flex space-x-3 lg:space-x-0 lg:order-2">
          <div className="flex items-center space-x-2 lg:hidden">
            {/* <NavbarContext /> */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'flex' : 'hidden'} items-center justify-around w-full lg:flex lg:w-auto lg:order-1 lg:min-w-[400px]`} id="navbar-cta">
            <ul className="flex flex-row items-center font-medium justify-between w-full p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 lg:p-0 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 lg:p-0 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="/cart" className="block py-2 px-3 lg:p-0 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">View Cart</a>
              </li>
              <li>
                <AuthNav />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

