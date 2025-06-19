"use client";

import React, { createContext, useContext, useEffect } from "react";
import { Product } from "../Types/index";

type CartItem = Partial<Product> & { quantity: number };

type CartContextType = {
    cart: CartItem[];
    total: number;  
    itemsCount: number; 
    addToCart: (product: Partial<Product>) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const total = cart.reduce(
        (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
        0
    );

    const itemsCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const addToCart = (product: Partial<Product>) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex].quantity += 1;
                return updatedCart;
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                itemsCount,
                addToCart,
                removeFromCart,
                clearCart, 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext debe estar dentro de un CartProvider");
    }
    return context;
};
