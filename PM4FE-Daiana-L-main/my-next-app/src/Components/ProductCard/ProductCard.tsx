"use client";

import Image from "next/image";
import { Product } from "../../Types/index";
import { routes } from "@/Routes";
import Link from "next/link";
import AddToCartButton from "../UI/CartAddBtn";

interface Props {
    product: Product;
    index?: number; 
}

export default function ProductCard({ product}: Props) {
    const generarUrl = (id: string | number) => {
        return `${routes.product_detail}/${id}/${product.name
            ?.toLowerCase()
            .replace(/\s+/g, "-")}`;
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden mt-10 h-[600px] flex flex-col group"
            data-aos="fade-right"
            data-aos-delay="100"
        >
            <Link
                href={generarUrl(product.id)}
                className="relative h-60 overflow-hidden block"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </Link>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-4">{product.description}</p>
                    <p className="text-base text-blue-600 font-medium mt-2">
                        {product.price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                        })}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Categoría: {product.category.name}
                    </p>
                </div>
                <div className="mt-6 flex">
                    <Link
                        href={generarUrl(product.id)}
                        className="bg-indigo-500 text-white rounded-md h-10 w-28 flex items-center justify-center transition-all hover:bg-sky-500"
                    >
                        Ver detalles
                    </Link>

                    <AddToCartButton product={product} className="mt-6" />
                </div>
            </div>
        </div>
    );
}
