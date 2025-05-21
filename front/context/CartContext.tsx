"use client"
import { createContext, useEffect, useContext, ReactNode, useState } from "react";
import { IProduct } from "../interfaces";

interface CartContextType {
    products: IProduct[];
    addToCart: (product: IProduct) => boolean;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartContextType["products"]>([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    const clearCart = () => {
    setProducts([]);
    localStorage.removeItem('products');
};
    const addToCart = (product: IProduct): boolean  => {
        const user = localStorage.getItem('user');
        if (!user) {
            
            return false;
        }

        const exists = products.some(p => p.id === product.id);
        if (exists) {
        return false;
    }

        const cleanProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            description: product.description,
            categoryId: product.categoryId,
        };


        const updatedProducts = [...products, cleanProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        return true;
    };

    const removeFromCart = (productId: number) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <CartContext.Provider value={{ products, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const UseCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('UseCartContext must be used within a CartProvider');
    }
    return context;
};