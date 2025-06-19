import { FaInstagram } from "react-icons/fa";
import logo from "../../../../public/assets/img/hyesteria-logo.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="w-full bg-indigo-600/95 backdrop-blur-md text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="logo" width={150} />
                </div>
                <div className="flex flex-col md:flex-row gap-4 text-sm">
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
            <div className="mt-6 text-center text-sm text-gray-400">
                © 2025 Hysteria_3D. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
