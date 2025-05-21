/* eslint-disable @next/next/no-img-element */
// import Styles from "./page.module.css";
// import productsToPreLoad from "../../helper/items";
import { getProductsService } from "@/services/products";
// import { IProduct } from "../../../interfaces";
// import Card from "../components/card/card";
// import ProductsPage  from "../components/productsPage/productsPage";
// import productsToPreLoad from "@/helpers/preLoadProducts";
import Category from "../components/category/category";


const getData = async () => {
 const products = await getProductsService();
//  const products = productsToPreLoad

 return products
}




export default async function Home() {
  const  products = await getData();

  return (
    <div className="mb-24">
      <div className="relative h-[300px] bg-white overflow-hidden">
  <img
    src="https://apple.econocom.co.uk/images/general/_width600px/I-Phone-16-Pro-Hero-Horizontal.png"
    alt="iPhone girando"
    className="absolute top-1/2 left-1/2 w-74 h-auto -translate-x-1/2 -translate-y-1/2 opacity1"
  />

  
</div>
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div>
        <Category products={products}/>
          {/* <ProductsPage products={products} /> */}
          {/* {products.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
          </div>
  );
}
