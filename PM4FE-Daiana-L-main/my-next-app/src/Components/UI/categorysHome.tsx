"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoriesHome() {
    const categories = [
        {
            name: "Llaveros",
            image: "/assets/img/logo-llaveros.png",
            href: "/category/2",
        },
        {
            name: "Figuras",
            image: "/assets/img/figuras-categoria.png",
            href: "/category/6",
        },
        {
            name: "Macetas",
            image: "/assets/img/logo-macetas.png",
            href: "/category/3",
        },
    ];

    return (
        <section className="w-full py-6">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-black text-left mb-16">
                    Categorías destacadas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <Link
                            href={cat.href}
                            key={index}
                            className="flex flex-col items-center"
                        >
                            <div className="w-36 h-36 relative rounded-lg overflow-hidden">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <p className="mt-4 text-lg font-medium text-black">
                                {cat.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
