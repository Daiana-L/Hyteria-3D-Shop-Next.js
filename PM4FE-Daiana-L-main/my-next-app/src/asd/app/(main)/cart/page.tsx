"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCartContext } from "@/context/cartContext";
import { Product } from "../../../types/index";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../context/authContex";
import { createOrder } from "../../../components/api/auth/fetchOrders";
import { FaTrashAlt } from "react-icons/fa";
import CardImage from "../../../../public/assets/img/metodos de pago.png";
import CardImage2 from "../../../../public/assets/img/envios.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Cart() {
    const router = useRouter();
    const { token, user, saveUserData } = useAuthContext();
    const { cart, total, removeFromCart, clearCart } = useCartContext();
    const [loading, setLoading] = useState(false);
    const showCartItems = cart.length > 0;

    const handleCreateOrder = async () => {
        if (!user || !token) {
            toast.error("Debes iniciar sesión para crear una orden.");
            return;
        }

        try {
            setLoading(true);
            const userId = user.id;
            const products = cart.map((item) => item.id as number);
            const newOrder = await createOrder(userId, products, token);

            const updatedUser = {
                ...user,
                orders: [...(user.orders || []), newOrder],
            };

            saveUserData({ user: updatedUser, token, login: true });
            clearCart();
            toast.success("¡Orden creada con éxito!");
            setTimeout(() => {
                router.push("/orders");
            }, 2300);
        } catch (error) {
            console.error("Error al crear la orden:", error);
            toast.error("Hubo un problema al crear la orden.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            easing: "ease-out",
        });
    }, []);

    return (
        <section className="py-6 w-[120vh] h-[70vh]" data-aos="fade-down">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-3 mb-4 text-indigo-600">
                    Carrito de compras
                    <Image
                        src="/assets/img/pet8.png"
                        alt="Avatar de usuario"
                        width={100}
                        height={128}
                        className="object-contain"
                    />{" "}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-10 ml-3">
                            Productos seleccionados
                        </h2>
                        {showCartItems ? (
                            cart.map(
                                (product: Partial<Product>, index: number) => (
                                    <div
                                        key={product.id ?? index}
                                        className="flex items-center justify-between p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={
                                                    product.image ||
                                                    "/fallback.jpg"
                                                }
                                                alt={product.name || "Producto"}
                                                width={80}
                                                height={80}
                                                className="rounded-lg object-cover"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    Precio:{" "}
                                                    {product.price?.toLocaleString(
                                                        "es-AR",
                                                        {
                                                            style: "currency",
                                                            currency: "ARS",
                                                        }
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                if (product.id) {
                                                    removeFromCart(product.id);
                                                    toast.success(
                                                        "Producto eliminado."
                                                    );
                                                }
                                            }}
                                            className="text-red-500 hover:text-red-600 transition text-xl ml-4"
                                            title="Eliminar"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                )
                            )
                        ) : (
                            <p className="text-gray-600">
                                No hay productos en el carrito.
                            </p>
                        )}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-10 ml-3">
                            Resumen del pedido
                        </h2>

                        <div className="p-8 bg-indigo-50 rounded-2xl shadow-lg flex flex-col">
                            <div className="flex flex-col gap-1">
                                <div>
                                    <p className="text-gray-800">
                                        Métodos de pago
                                    </p>
                                    <Image
                                        src={CardImage}
                                        alt="Métodos de pago"
                                        width={300}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium mb-2">
                                        Métodos de envío
                                    </p>
                                    <Image
                                        src={CardImage2}
                                        alt="Métodos de envío"
                                        width={110}
                                        className="rounded-xl mb-4"
                                    />
                                </div>
                            </div>

                            <p className="text-xl text-gray-800 font-semibold mt-2">
                                Total:{" "}
                                <span className="text-indigo-600">
                                    {total.toLocaleString("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                    })}
                                </span>
                            </p>

                            <button
                                onClick={handleCreateOrder}
                                disabled={loading}
                                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-sky-500 transition disabled:opacity-50"
                            >
                                {loading
                                    ? "Creando orden..."
                                    : "Finalizar compra"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
