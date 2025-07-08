"use client";

import Image from "next/image";
import logo from "../../../public/assets/img/hyesteria-logo.png";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import { routes } from "../../routes/index";
import { useState } from "react";
import {
    IoPersonOutline,
    IoTicketOutline,
    IoAlertCircleOutline,
    IoClose,
    IoCallOutline,
    IoMenuOutline,
    IoGridOutline,
} from "react-icons/io5";
import { useAuthContext } from "../../context/authContex";
import { IoLogOutOutline } from "react-icons/io5";
import { useCartContext } from "../../context/cartContext";
export default function Navbar() {
    const { isAuth, resetUserData } = useAuthContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { itemsCount } = useCartContext();
    return (
        <nav className="fixed top-0  w-full lg:bg-indigo-600/95 xs:bg-violet-600/95 backdrop-blur-md shadow z-50">
            <div className="flex items-center justify-between px-5  lg:py-3">
                <Link href={routes.home} className="flex items-center">
                    <Image src={logo} alt="logo" width={140} priority />
                </Link>
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex gap-10 text-white font-medium items-center">
                        <li className="p-2 rounded-2xl hover:bg-sky-500 transition">
                            <Link
                                href={routes.home}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="relative flex flex-col items-center">
                            <button
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                                className="p-2 rounded-2xl transition-all hover:bg-sky-500"
                            >
                                Categorías
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full  mt-2 lg:bg-indigo-600/95 xs:bg-violet-600/95 text-white rounded-lg shadow-lg w-40 z-50">
                                    <ul className="space-y-1">
                                        {[
                                            "Decoración",
                                            "Llaveros",
                                            "Macetas",
                                            "Accesorios",
                                            "Arte y diseño",
                                            "Figuras y coleccionables",
                                        ].map((cat, idx) => (
                                            <li key={cat}>
                                                <Link
                                                    href={`/category/${
                                                        idx + 1
                                                    }`}
                                                    className="block p-2 text-center hover:bg-sky-500 rounded"
                                                    onClick={() =>
                                                        setIsDropdownOpen(false)
                                                    }
                                                >
                                                    {cat}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li className="p-2 rounded-2xl hover:bg-sky-500 transition">
                            <Link
                                onClick={() => setIsMenuOpen(false)}
                                href={routes.contacto}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center text-white lg:gap-5 xs:gap-2">
                    <Link href={routes.cart} className="mx-2 text-white">
                        <div className="relative">
                            {itemsCount > 0 && (
                                <span className="absolute text-xs rounded-full font-bold -top-2 -right-2 lg:bg-indigo-600/95 xs:bg-violet-600/95 text-white p-1 px-2">
                                    {itemsCount}
                                </span>
                            )}
                            <IoCartOutline size={30} />
                        </div>
                    </Link>

                    {isAuth ? (
                        <button
                            onClick={resetUserData}
                            className="mx-4 text-white hover:text-sky-300 transition"
                            title="Cerrar sesión"
                        >
                            <IoLogOutOutline size={30} />
                        </button>
                    ) : (
                        <Link href={routes.login} className="mx-4 text-white">
                            <div className="relative">
                                <PiUser size={30} />
                            </div>
                        </Link>
                    )}

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block"
                    >
                        <IoMenuOutline size={36} />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div
                    className="fixed lg:w-[480px] top-0 right-0 h-screen xs:w-[280px]
                    text-white xs:p-5 transition-all duration-300
                    lg:bg-indigo-600/95 xs:bg-violet-600/95 shadow-2xl transform "
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-sky-300 transition "
                    >
                        <IoClose size={30} />
                    </button>
                    <ul className="mt-12 space-y-6 text-lg ">
                        <li className="flex items-center gap-2 hover:bg-sky-500 p-2 rounded-xl text-white ">
                            <IoSearchOutline size={24} /> Buscar
                        </li>
                        <ul className="relative lg:hidden">
                            <li className="flex items-center gap-2 hover:bg-sky-500 p-2 rounded-xl text-white">
                                <button
                                    className="flex items-center gap-2"
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                >
                                    <IoGridOutline size={24} /> Categorías
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full mt-2 lg:bg-indigo-600/95 xs:bg-violet-600/95 text-white rounded-lg shadow-xl p-1 w-40 z-50">
                                        <ul className="space-y-1">
                                            {[
                                                "Decoración",
                                                "Llaveros",
                                                "Macetas",
                                                "Accesorios",
                                                "Arte y diseño",
                                                "Figuras y coleccionables",
                                            ].map((cat, idx) => (
                                                <li key={cat}>
                                                    <Link
                                                        href={`/category/${
                                                            idx + 1
                                                        }`}
                                                        className="block px-4 py-2 text-sm text-center hover:bg-sky-500 rounded"
                                                        onClick={() => {
                                                            setIsDropdownOpen(
                                                                false
                                                            );
                                                            setIsMenuOpen(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {cat}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                        <li>
                            <Link
                                href={routes.perfil}
                                className="flex items-center gap-2 hover:bg-sky-500 p-2 rounded-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <IoPersonOutline size={24} /> Perfil
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routes.orders}
                                className="flex items-center gap-2 hover:bg-sky-500 p-2 rounded-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <IoTicketOutline size={24} /> Mis pedidos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routes.contacto}
                                className="block p-2 hover:bg-sky-500 rounded-xl xs:flex xs:items-center xs:gap-2 lg:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <IoCallOutline size={24} /> Contacto
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={routes.ayuda}
                                className="flex items-center gap-2 hover:bg-sky-500 p-2 rounded-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <IoAlertCircleOutline size={24} /> Ayuda
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
