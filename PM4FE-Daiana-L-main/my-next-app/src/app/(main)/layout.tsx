

import Navbar from "@/components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
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
                    <div className="flex flex-col bg-gray-100 text-black min-h-screen">
                <Navbar />
                <main className="mt-32 mb-16 flex-grow max-w-5xl mx-auto px-6">
                    {children}
                    <ToastContainer position="top-center" autoClose={3000} />
                </main>
                <Footer />
            </div>
            </CartProvider>
        </AuthProvider>
    );
}
