"use client";
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../../context/authContext.tsx';
import YourInfo from './YourInfo/YourInfo.tsx';
import { toast, ToastContainer } from 'react-toastify';
import Orders from './orders/orders.tsx';
import axios from 'axios';
import { getOrdersService } from '../../../services/auth.ts';

const notifySuccess = () => toast.success('Logout successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

function FtoAndName() {
  const { user } = useAuthContext();
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrdersService();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const { ResetUserData } = useAuthContext();
  const [showOrders, setShowOrders] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleButtonHistorialOrders = async () => {
    const data = await getOrdersService();
    setOrders(data);
    setShowOrders(!showOrders);
    setShowInfo(false);
  };



  const handleButtonYourInfo = () => {
    setShowInfo(!showInfo);
    setShowOrders(false);
  };


    const handleButtonLogOut = () => {
        notifySuccess();
        ResetUserData();
        localStorage.removeItem('products');
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);

    setTimeout(() => {
        window.location.href = '/';
    }, 3000);
  };

  return (
    <div className='flex flex-row items-center justify-center space-x-64 gap-3 m-[100px]'>
      <div className='border-2 border-gray-300 rounded-lg p-4 min-w-[400px] h-96'>
      <div className='flex flex-col items-center justify-center space-x-4 '>
        <div className='flex items-center justify-center'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
            alt="User Photo"
            className="w-24 h-24 items-center justify-center"
        />
        </div>
        {!user ? (
        <div>Loading user...</div>
        ) : (
            <p className="text-black text-3xl m-4">{user.name}</p>
            )}
      </div>
      <div className='flex flex-col items-center justify-center space-y-4 m-[50px]'>
        <button onClick={handleButtonHistorialOrders} className='
        w-full flex items-center justify-center'>
          <p className='hover:border-b-2'>Historial</p>
        </button>
        <button onClick={handleButtonYourInfo} className='w-full flex items-center justify-center'>
          <p className='hover:border-b-2'>Your Info</p>
        </button>
        <button className='w-full text-red-500 flex items-center justify-center' onClick={handleButtonLogOut}>
          <p className='hover:border-b-2'>Log Out</p>
        </button>
      </div>
      </div>
      <div className='border-2 border-gray-300 rounded-lg p-4 '>
        <div className='flex flex-col items-center justify-center space-y-4 m-[50px] min-w-[400px]  min-h-[400px]'>

        {showOrders && (
          <div className='flex items-center justify-center'>
            <Orders orders={orders} />
          </div>
        )}
        {showInfo && (
          <div className='w-full'>
            <YourInfo user={user} />
        </div>
      )}
      {!showOrders && !showInfo && (
        <div className='flex flex-col items-center justify-center space-y-4'>
            <img src="https://images.seeklogo.com/logo-png/0/2/apple-logo-png_seeklogo-9832.png" className="w-40 h-40 rounded-full" />
            <p className="text-black text-3xl m-4"> Thanks for visiting our website!</p>
        </div>
      )}
      </div>
        </div>
        <ToastContainer />
    </div>

  );
}

export default FtoAndName;

