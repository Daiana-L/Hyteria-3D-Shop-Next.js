import "../styles/globals.css";
import Image from "next/image";
import notFound from "../../public/assets/img/notFound.png";
import Link from "next/link";
import { routes } from "../Routes/index";

export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <Image src={notFound} alt="Not Found" width={300} height={300} className="mb-6" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Página no encontrada</h1>
            <p className="text-gray-600 mb-6">
                Lo sentimos, la página que estás buscando no existe.
            </p>
            <Link  href={routes.home} className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-sky-500 transition">
                    Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;
