/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { IProduct } from "../../../../interfaces/index";
import { UseCartContext } from "../../../../context/CartContext";
import { useAuthContext } from "../../../../context/authContext";
import { toast } from 'react-toastify';

interface CardProps {
  product: IProduct;
}



function Card({ product }: CardProps) {
  const { addToCart } = UseCartContext();
  const { user } = useAuthContext();

  const handleAddToCart = (product: IProduct) => {
    if (!user) {
      toast.error('You must be logged in to buy.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

      const added: boolean  = addToCart(product);
    if (added) {
      toast.success("Product added to cart", {
        autoClose: 500,
      });
    } else {
      toast.error("This product is already in the cart", {
        autoClose: 1000,
      });
    }
    
  }

  return (
    <div>
      <div className="group relative">
        <a href={"/product-detail/" +  product.id + "/" + product.name}>
        <img
          alt={product.name}
          src={product.image}
          className="w-full h-48 object-contain rounded-md bg-gray-200 group-hover:opacity-75"
          />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
          </a>
      </div>
      <div className="flex justify-between flex-row-reverse pt-2
      ">
        <button
          className="px-2 py-1 text-xs text-black transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none z-1000"
           onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            window.location.href = "/product-detail/" + product.id + "/" + product.name;
          }}
          className="px-2 py-1 text-xs text-black transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none z-1000"
          
        >
          Description
        </button>
      </div>
    </div>
  );
}

export default Card;

