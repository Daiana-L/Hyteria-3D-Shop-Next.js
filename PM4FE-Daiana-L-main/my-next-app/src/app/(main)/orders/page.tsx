"use client";

import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/authContex";
import { Order, OrderStatus } from "../../../types/index";
import { toast } from "react-toastify";
import { getUserOrders } from "../../../components/api/auth/fetchOrders";
import { FaBoxOpen } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const statusLabels: Record<OrderStatus, string> = {
    [OrderStatus.PENDING]: "Pendiente",
    [OrderStatus.PROCESSING]: "Procesando",
    [OrderStatus.SHIPPED]: "Enviado",
    [OrderStatus.COMPLETED]: "Completado",
    [OrderStatus.CANCELLED]: "Cancelado",
};

export default function Orders() {
    const { token } = useAuthContext();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
            easing: "ease-out",
        });
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!token) return;

            try {
                const data = await getUserOrders(token);
                setOrders(data);
            } catch (error) {
                console.error(error);
                toast.error("No se pudieron cargar tus órdenes.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    if (loading) {
        return (
            <div className="w-full p-10 flex justify-center items-center">
                <p className="text-gray-500">Cargando pedidos...</p>
            </div>
        );
    }

    return (
        <section className="mt-28 px-4 max-w-6xl mx-auto">
            <div
                className="bg-white p-8 rounded-3xl shadow-lg"
                data-aos="fade-down"
            >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet11.png"
                            alt="Avatar de usuario"
                            width={228}
                            height={128}
                            className="object-contain"
                        />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center gap-3 justify-center">
                    <FaBoxOpen className="text-indigo-500" /> Mis Pedidos
                </h1>

                {orders.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        Aún no realizaste ningún pedido.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                            >
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    Orden #{order.id}
                                </h2>
                                <p className="text-sm text-gray-600 mb-1">
                                    Estado: {statusLabels[order.status]}
                                </p>
                                <p className="text-sm text-gray-600 mb-3">
                                    Fecha:{" "}
                                    {new Date(order.date).toLocaleDateString(
                                        "es-AR"
                                    )}
                                </p>

                                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                                    {order.products.map((product) => (
                                        <li key={product.id}>
                                            • {product.name} (x1) — $
                                            {product.price.toLocaleString(
                                                "es-AR"
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-right font-bold text-indigo-600">
                                    Total: $
                                    {order.products
                                        .reduce(
                                            (total, product) =>
                                                total + product.price,
                                            0
                                        )
                                        .toLocaleString("es-AR")}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
