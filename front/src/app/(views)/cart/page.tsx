// import ItemsCart from "@/app/components/itemsCart/itemsCart";
import React, { FC } from "react";

// import CalcularTotal fom "../../components/calcularTotal/calcularTotal";
import ContenedorCalculareItems from "@/app/components/contenedorCalculareItems/ContenedorCalculareItems";


const Cart: FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <ContenedorCalculareItems />
        </div>
      </div>
    </section>
  );
};

export default Cart;
