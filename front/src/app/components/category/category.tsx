"use client"
import { IProduct } from "../../../../interfaces"
import { useState } from "react"
import Card from "../card/card"
// import ProductsPage from "../productsPage/productsPage"
//      { name: "Smartphones" },    1
//     { name: "Laptops" },     2
//     { name: "Tablets" },     3
//     { name: "Smartwatches" },   4
//     { name: "Headphones" },   5
//     { name: "Speakers" },      6 
//     { name: "AR Devices" },    7
//     { name: "Keyboards" },      8
//     { name: "Streaming Devices" } 9
interface ProductsProps {
    products: IProduct[]
}

function Category ({products} : ProductsProps) {
    const [category, setCategory] = useState<number | null>(null);
    const [page, setPage] = useState(1);
    const AllProducts = products
    const productsPorPage = 8;
    const filteredProducts = AllProducts.filter(product => {
        if(category === null) return true
        return product.categoryId === category;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPorPage);
    const startIndex = (page - 1) * productsPorPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPorPage);

    

    return (
            <div className="flex flex-row ">
        <div className="basis-1/6 flex flex-col gap-4 mb-4 items-start">
    <button onClick={() => {setCategory(null); setPage(1)}} className={`font-bold ${category === null ? 'underline' : ''}`}>
    All
    </button>
    <button onClick={() => {setCategory(1); setPage(1)}} className={`font-bold ${category === 1 ? 'underline' : ''}`}>
    Smartphones
    </button>
    <button onClick={() => {setCategory(2); setPage(1)}} className={`font-bold ${category === 2 ? 'underline' : ''}`}>
    Laptops
    </button>
    <button onClick={() => {setCategory(3); setPage(1)}} className={`font-bold ${category === 3 ? 'underline' : ''}`}>
    Tablets
    </button>
    <button onClick={() => {setCategory(4); setPage(1)}} className={`font-bold ${category === 4 ? 'underline' : ''}`}>
    Smartwatches
    </button>
    <button onClick={() => {setCategory(5); setPage(1)}} className={`font-bold ${category === 5 ? 'underline' : ''}`}>
    Headphones
    </button>
    <button onClick={() => {setCategory(6); setPage(1)}} className={`font-bold ${category === 6 ? 'underline' : ''}`}>
    Speakers
    </button>
    <button onClick={() => {setCategory(7); setPage(1)}} className={`font-bold ${category === 7 ? 'underline' : ''}`}>
    AR Devices
    </button>
    <button onClick={() => {setCategory(8); setPage(1)}} className={`font-bold ${category === 8 ? 'underline' : ''}`}>
    Keyboards
    </button>
    <button onClick={() => {setCategory(9); setPage(1)}} className={`font-bold ${category === 9 ? 'underline' : ''}`}>
    Streaming Devices
    </button>
</div>
        <div className="basis-5/6">
        <div>
        <h2>Productos</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {currentProducts.map((product: IProduct) => (
            <Card key={product.id} product={product} />
        ))}
        </div>
        </div>

        <>
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
        </>
        </div>
        </div>
    );
}

export default Category