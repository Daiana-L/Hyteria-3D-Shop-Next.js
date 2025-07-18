
"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContex";
import { useCartContext } from "@/context/cartContext";
import { routes } from "@/routes";
import { Product } from "../../types/index";
import { toast } from "react-toastify";

interface Props {
    product: Product;
    className?: string;
}

export default function AddToCartButton({ product, className = "" }: Props) {
    const { isAuth } = useAuthContext();
    const { addToCart, cart } = useCartContext();
    const router = useRouter();
    const isInCart = cart.some(item => item.id === product.id);

    const handleAddToCart = () => {
        if (!isAuth) {
            router.push(routes.login);
            return;
        }
        if (isInCart) return;
        addToCart(product);
        toast.success("Producto añadido al carrito!");
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`bg-indigo-500 text-white rounded-md transition-all hover:bg-sky-500
                ${isInCart ? "opacity-50 cursor-not-allowed hover:bg-indigo-500" : ""}
                ${className}`}
        >
            {isInCart ? "Ya en el carrito" : "Agregar al Carrito"}
        </button>
    );
}
