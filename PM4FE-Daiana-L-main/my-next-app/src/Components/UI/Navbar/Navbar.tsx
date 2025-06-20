"use client";

import Image from "next/image";
import logo from "../../../../public/assets/img/hyesteria-logo.png";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import { routes } from "../../../routes/index";
import { useState } from "react";
import {
    IoPersonOutline,
    IoTicketOutline,
    IoAlertCircleOutline,
    IoClose,
} from "react-icons/io5";
import { useAuthContext } from "../../../context/authContex";
import { IoLogOutOutline } from "react-icons/io5";
import { useCartContext } from "../../../context/cartContext";
export default function Navbar() {
    const { isAuth, resetUserData } = useAuthContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { itemsCount } = useCartContext();
    return (
        <nav className="fixed top-0 left-0 w-full bg-indigo-600/95 backdrop-blur-md shadow z-50">
            <div className=" flex items-center justify-between">
                <div className="flex items-center gap-2 ml-10">
                    <Image src={logo} alt="logo" width={150} />
                </div>
                <ul className="flex gap-6 text-white font-medium ml-16">
                    <li className="m-4 p-2 rounded-2xl transition-all hover:bg-sky-500">
                        <Link
                            href={routes.home}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="m-4 p-2 rounded-2xl transition-all hover:bg-sky-500"
                    >
                        Categorias
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute flex flex-col bg-indigo-600 backdrop-blur-md text-white rounded-lg shadow-lg mt-20 ml-20 p-2 w-48 z-10 ">
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/1"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Decoración
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/2"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Llaveros
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/3"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Macetas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/4"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Accesorios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/5"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Arte y diseño
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block p-2 text-center hover:bg-sky-500 rounded"
                                        href="/category/6"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Figuras y coleccionables
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <li className="m-4 p-2 rounded-2xl transition-all hover:bg-sky-500">
                        <Link
                            onClick={() => setIsMenuOpen(false)}
                            href={routes.contacto}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center text-white">
                    <Link href={routes.search} className="mx-6">
                        <IoSearchOutline className="w-10 h-6" />
                    </Link>
                    <Link href={routes.cart} className="mx-2 text-white">
                        <div className="relative">
                            {itemsCount > 0 && (
                                <span className="absolute text-xs rounded-full font-bold -top-2 -right-2 bg-violet-500 text-white p-1 px-2">
                                    {itemsCount}
                                </span>
                            )}
                            <IoCartOutline className="w-6 h-10" />
                        </div>
                    </Link>

                    {isAuth ? (
                        <button
                            onClick={resetUserData}
                            className="mx-4 text-white hover:text-sky-300 transition"
                            title="Cerrar sesión"
                        >
                            <IoLogOutOutline className="w-6 h-10" />
                        </button>
                    ) : (
                        <Link href={routes.login} className="mx-4 text-white">
                            <div className="relative">
                                <PiUser className="w-6 h-10" />
                            </div>
                        </Link>
                    )}

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="m-3 p-2 rounded-2xl transition-all hover:bg-sky-500 text-white"
                    >
                        Menu
                    </button>

                    {isMenuOpen && (
                        <div className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-indigo-600 backdrop-blur-md z-20 shadow-2xl transform transition-all duration-300">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-4 right-4 text-white hover:text-sky-300 transition"
                            >
                                <IoClose size={30} />
                            </button>
                            <ul className="text-white space-y-10 ml-4 text-lg mt-14">
                                <li>
                                        <Link
                                            className="flex items-center p-2 hover:bg-sky-500 rounded-xl transition-all"
                                            href={routes.perfil}
                                        >
                                            <IoPersonOutline
                                                className="mr-3"
                                                size={30}
                                            />{" "}
                                            Perfil
                                        </Link>
                                </li>
                                <li>
                                        <Link
                                            className="flex items-center p-2 hover:bg-sky-500 rounded-xl transition-all"
                                            href={routes.orders}
                                        >
                                            <IoTicketOutline
                                                className="mr-3"
                                                size={30}
                                            />{" "}
                                            Mis pedidos
                                        </Link>
                                </li>
                                <li>
                                    <Link
                                        className="flex items-center p-2 hover:bg-sky-500 rounded-xl transition-all"
                                        href={routes.ayuda}
                                    >
                                        <IoAlertCircleOutline
                                            className="mr-3"
                                            size={30}
                                        />{" "}
                                        Ayuda
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
