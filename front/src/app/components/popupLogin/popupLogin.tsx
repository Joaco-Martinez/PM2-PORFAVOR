import React from"react"
import { FC } from "react";
import { IUser

 } from "../../../../interfaces";

 interface PopupLoginProps {
    user: IUser;
  }
const PopupLogin: FC<PopupLoginProps> = ({ user }) => {
    console.log(user)
    
    return (
        <div
      id="info-popup"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
        <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
          <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Hello {user?.name}</h3>
          <p>
            You have successfully logged in, you can go to the main page using the button below.
          </p>
        </div>
        <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
          
          <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
            <button
              id="close-modal"
              type="button"
              className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => { window.location.href = '/'; }}
            >
              Home
            </button>
           
          </div>
        </div>
      </div>
    </div>
    );
}

export default PopupLogin
