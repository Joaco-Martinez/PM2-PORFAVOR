"use client"
import ItemsCart from "../itemsCart/itemsCart";
import CalcularTotal from "../calcularTotal/calcularTotal";
import { UseCartContext } from "../../../../context/CartContext";
import ButtonBuyNow from "../buttonBuyNow/ButtonBuyNow";
function ContenedorCalculareItems() {
    const { products } = UseCartContext();

    return (
        <div className="mt-8">
            <ul className="space-y-4">
              <ItemsCart products={products} />
            </ul>

            <div className="mt-12 mb-24">
              <CalcularTotal products={products} />
              <ButtonBuyNow products={products}/>

            </div>
          </div>
    )
}

export default ContenedorCalculareItems;
