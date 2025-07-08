"use client"

import { IoMail, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';
import Image from 'next/image';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contacto = () => {
        useEffect(() => {
            AOS.init({
                duration: 300,
                once: true,
                easing: "ease-out",
            });
        }, []);

    return (
        <section className="text-gray-600 body-font relative"  data-aos="fade-down">
            <div className="container mt-40">
                <div className="flex flex-col text-center w-full mb-12">
                        <div className="absolute -top-36 left-1/2 transform -translate-x-1/2">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                                            <Image
                                                src="/assets/img/pet7.png"
                                                alt="Avatar de usuario"
                                                width={228}
                                                height={128}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-indigo-600">
                        ¡Contacto Hysteria 3D!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                        Si necesitás consultar algo, solicitar un diseño personalizado o simplemente querés comunicarte con nosotros, podés hacerlo a través de los siguientes medios:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-6 flex-1 border hover:shadow-lg transition-all">
                        <div className="flex items-center text-indigo-600 mb-2 text-3xl">
                            <IoMail />
                        </div>
                        <h2 className="text-lg font-semibold mb-1">Email</h2>
                        <a
                            href="mailto:hysteria3d@contacto.com"
                            className="text-sm text-indigo-500 hover:underline break-words"
                        >
                            hysteria3d@contacto.com
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex-1 border hover:shadow-lg transition-all">
                        <div className="flex items-center text-indigo-600 mb-2 text-3xl">
                            <IoLogoInstagram />
                        </div>
                        <h2 className="text-lg font-semibold mb-1">Instagram</h2>
                        <a
                            href="https://instagram.com/hysteria_3d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-500 hover:underline"
                        >
                            @hysteria_3d
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex-1 border hover:shadow-lg transition-all">
                        <div className="flex items-center text-indigo-600 mb-2 text-3xl">
                            <IoLogoWhatsapp />
                        </div>
                        <h2 className="text-lg font-semibold mb-1">WhatsApp</h2>
                        <a
                            href="https://wa.me/5491234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-500 hover:underline"
                        >
                            +54 9 123 456 7890
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;