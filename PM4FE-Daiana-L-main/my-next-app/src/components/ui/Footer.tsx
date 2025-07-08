import { FaInstagram } from "react-icons/fa";
import logo from "../../../public/assets/img/hyesteria-logo.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="w-full bg-indigo-600/95 backdrop-blur-md text-white lg:py-8 ">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between  items-center lg:gap-6 xs:gap-2">
                <div className="flex lg:w-[150] xs:w-[100] xs:mt-3">
                    <Image src={logo} width={100} alt="logo" />
                </div>
                <div className="flex justify-center lg:flex-row gap-4 text-sm lg:ml-20 xs:mb-2">
                    <a href="#" className="hover:underline">
                        Inicio
                    </a>
                    <a href="#" className="hover:underline">
                        Productos
                    </a>
                    <a href="#" className="hover:underline">
                        Sobre nosotros
                    </a>
                    <a href="#" className="hover:underline">
                        Contacto
                    </a>
                </div>
                <div className="text-l flex flex-col md:flex-row gap-4 items-center">
                    <a
                        href="https://www.instagram.com/hysteria_3d/?g=5"
                        aria-label="Instagram"
                        className="hover:text-pink-400 flex items-center gap-2"
                    >
                        <FaInstagram className="text-xl" />
                        <span>Síguenos en Instagram!</span>
                    </a>
                </div>
            </div>
            <div className="mt-6 mb-3 flex justify-center text-center text-sm text-gray-400">
                © 2025 Hysteria_3D. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
