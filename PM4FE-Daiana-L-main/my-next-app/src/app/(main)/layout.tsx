

import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import "../../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../../context/authContex"
import { Metadata } from "next";
import { CartProvider } from "@/context/cartContext";


export const metadata: Metadata = {
    title: "Hysteria_3D | Shop",
    description: "tienda online de impresiones 3D en argentina"
}
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <CartProvider>
                    <div className="flex flex-col bg-gray-100 text-black min-h-screen xs:w-full overflow-x-hidden">
                <Navbar />
                <main className="lg:mt-32 xs:mt-38 lg:mb-16 xs:mb-6 flex-grow lg:max-w-5xl xs:max-w-xl mx-auto lg:px-6 xs:px-2">
                    {children}
                    <ToastContainer position="top-center" autoClose={3000} />
                </main>
                <Footer />
            </div>
            </CartProvider>
        </AuthProvider>
    );
}
