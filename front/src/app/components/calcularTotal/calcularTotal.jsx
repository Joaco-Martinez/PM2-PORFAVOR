import Button from "../../components/button/index";


function CalcularTotal({ products }) {

  const total = products.reduce((acc, product) => acc + product.price, 0);

    const iva = total * 0.21;
    const ivaRedondeado = Math.round(iva * 100) / 100;

    const totalConIva = total + ivaRedondeado;

    const handleCart = () => {products.map((product) => {
      let cart = [];
      cart.push(product.id);
      console.log(cart);
    })}
  return (
     <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>${total}</dd>
              </div>

              <div className="flex justify-between">
                <dt>IVA</dt>
                <dd>${ivaRedondeado}</dd>
              </div>


              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>${totalConIva}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
            
            </div>

           
          </div>
        </div>
  );
}

export default CalcularTotal;