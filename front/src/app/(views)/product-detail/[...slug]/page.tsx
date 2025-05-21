/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getProductsById } from "@/services/products";
import { IProduct } from "../../../../../interfaces/index";
import { UseCartContext } from "../../../../../context/CartContext";
import { useAuthContext } from "../../../../../context/authContext";
import { toast } from 'react-toastify';
import Loading from "@/app/components/loading/loading";

function ProductDetail({ params }: { params: Promise<{ slug: string[] }> }) {
  const { addToCart } = UseCartContext();
  const { user } = useAuthContext();
  const [product, setProduct] = useState<IProduct | null>(null);
  const router = useRouter();

  const { slug } = use(params);

  useEffect(() => {
    const fetchProduct = async () => {
      const [id] = slug;
      const prod = await getProductsById(Number(id));
      if (!prod) {
        router.push("/404");
        return;
      }
      setProduct(prod);
    };
    fetchProduct();
  }, [slug, router]);

  const handleAddToCart = () => {
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
    if (product) {
      addToCart(product);
      toast.success('Product added to cart', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  if (!product) return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Loading />
    </div>
  ) 

  return (
    <>
      <section className="relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 items-center">
            <div className="img flex items-center justify-center h-[500px] w-[500px] mt-20">
              <div className="img-box h-[500px] w-[500px] max-lg:mx-auto bg-gray-50 rounded-2xl border-4 border-[#464545] flex items-center justify-center">
                <img
                  src={product.image}
                  alt="Product image"
                  className="h-full object-cover self-center"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                </p>
                <h2 className="font-manrope font-bold text-3xl leading-10 text-white-900 mb-2 capitalize">
                  {product.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h2 className="font-manrope font-semibold text-2xl leading-9 text-white-900 pr-5 sm:border-r border-gray-200 mr-5">
                    ${product.price}
                  </h2>
                  <div className="flex items-center gap-2">
                    
                  </div>
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  {product.description}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;