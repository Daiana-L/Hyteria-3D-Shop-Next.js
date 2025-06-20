"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
export default function Ayuda() {
    useEffect(() => {
                AOS.init({
                    duration: 300,
                    once: true,
                    easing: "ease-out",
                });
            }, []);
    return (
        <section className="mt-36 px-4 max-w-6xl mx-auto" data-aos="fade-down">
            <div className="relative bg-white p-6 rounded-3xl shadow-lg text-center">
                <div className="absolute -top-28 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet3.png"
                            alt="Avatar de usuario"
                            width={228}
                            height={128}
                            className="object-contain"
                        />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-indigo-600 mb-4">
                    Ayuda y Soporte
                </h1>

                <p className="text-gray-700 text-lg mb-4">
                    ¿Tenés dudas sobre tu pedido, un problema técnico o querés
                    hacer una consulta personalizada?
                </p>
                <p className="text-gray-700 text-lg mb-8">
                    Estamos para ayudarte con cualquier tema relacionado a
                    productos, envíos o personalizaciones.
                </p>

                <div className="bg-indigo-100 p-6 rounded-xl inline-block shadow-md">
                    <p className="text-gray-800 text-md mb-1 font-medium">
                        Correo de soporte
                    </p>
                    <p className="text-indigo-600 text-lg font-semibold select-all">
                        soporte@hysteria3d.com
                    </p>
                </div>
            </div>
        </section>
    );
}
