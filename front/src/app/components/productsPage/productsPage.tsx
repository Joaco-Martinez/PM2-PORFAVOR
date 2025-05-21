"use client"
import { useState } from "react";
import { IProduct } from "../../../../interfaces";
import Card from "../card/card";

interface ProductsProps {
    products: IProduct[]
}
const ProductsPage = ({ products }: ProductsProps) => {
    const [page, setPage] = useState(1);
    const productsPorPage = 8;

    const totalPages = Math.ceil(products.length / productsPorPage);
    const startIndex = (page - 1) * productsPorPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPorPage);

     return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {currentProducts.map((product: IProduct) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx + 1)}
            className={`px-3 py-1 rounded mt-4 mr-2
                ${
              page === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


export default ProductsPage