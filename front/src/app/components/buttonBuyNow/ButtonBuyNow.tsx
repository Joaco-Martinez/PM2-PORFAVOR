import Button from "../../components/button/index";
import { postOrdersWithArray } from "@/services/auth";
import { IProduct } from "../../../../interfaces";
import { toast } from 'react-toastify';
import { useAuthContext } from "../../../../context/authContext";
import { UseCartContext } from "../../../../context/CartContext";


interface ButtonBuyNowProps {
    products: IProduct[]
}

function ButtonBuyNow({ products }: ButtonBuyNowProps) {
    const { user } = useAuthContext();
    const { clearCart } = UseCartContext();

    const NoLoggeado = () => {
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
    };
    
    const NoProducts = () => {
        toast.error('You must add products to your cart.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    }

    const OrderCheta = () => {
        toast.success('Order successful!', {
                position: "top-right",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    }

    const ProblemaDesconocido = () => {
        toast.error('There was a problem with your order.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    }

    const handleCart = async () => {
        if (!user) {
            NoLoggeado()
            return;
        }
        if (products.length === 0) {
            NoProducts()
            return;
        }
        const productIds = products.map(product => product.id);
        try {
            await postOrdersWithArray(productIds);
            OrderCheta();
            clearCart();
        } catch  {
            ProblemaDesconocido();
        }
    };

    return (
        <div className="flex justify-end">
            <Button textContent="Buy Now" variant="secondary" onClick={handleCart} />
        </div>
    );
}

export default ButtonBuyNow