
import "../styles/globals.css";
import type { Metadata } from "next";
import AOSInitializer from "../components/models/AOSInitializer";

export const metadata: Metadata = {
    title: "Hysteria_3D | Shop",
    description: "Tienda online de impresiones 3D en Argentina",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <link href="/assets/img/pet.png" />
            </head>
            <body>
                <AOSInitializer />
                {children}
            </body>
        </html>
    );
}
