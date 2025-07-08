"use client";

import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/authContex";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Perfil() {

        useEffect(() => {
                AOS.init({
                    duration: 300,
                    once: true,
                    easing: "ease-out",
                });
            }, []);
            
    const { user } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (user?.address) {
            setAddress(user.address);
        }
    }, [user]);

    const handleSave = () => {
        setIsEditing(false);
        console.log("Dirección guardada:", address);
    };

    if (!user) {
        return (
            <p className="text-center text-lg mt-10 text-gray-500">
                inicia sesion para ver tu perfil
            </p>
        );
    };

    

    return (
        <section className="flex justify-center items-center mt-20 bg-gray-100" data-aos="fade-down">
            <div className="bg-white p-8 rounded-3xl shadow-xl relative w-[160vh]">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet2.png"
                            alt="Avatar de usuario"
                            width={228}
                            height={128}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                        Mi perfil
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Bienvenido/a a tu cuenta de Hysteria_3D
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Nombre
                        </label>
                        <p className="mt-1 font-semibold">{user.name}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Email
                        </label>
                        <p className="mt-1 font-semibold">{user.email}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Dirección
                        </label>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mt-1">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md flex-1"
                                />
                            ) : (
                                <p className="font-semibold">
                                    {address || "Sin dirección"}
                                </p>
                            )}
                            <button
                                onClick={() =>
                                    isEditing
                                        ? handleSave()
                                        : setIsEditing(true)
                                }
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition"
                            >
                                {isEditing ? "Guardar" : "Editar"}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-500">
                            Teléfono
                        </label>
                        <p className="mt-1 font-semibold">{user.phone}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
