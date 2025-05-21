import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white  shadow-sm fixed bottom-0 w-full dark:bg-gray-800">
      <div className="container mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a className="hover:underline">
            Manzana Tech™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:justify-center sm:flex-row">
          <li className="sm:mr-6 md:mr-12 lg:mr-20">
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li className="sm:mr-6 md:mr-12 lg:mr-20">
            <a href="/register" className="hover:underline">
              Register
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              FAQ

            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

