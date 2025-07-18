"use client";

import Image from "next/image";
import { Product } from "../../types/index";
import { routes } from "@/routes";
import Link from "next/link";
import AddToCartButton from "../ui/CartAddBtn";

interface Props {
    product: Product;
    index?: number;
}

export default function ProductCard({ product }: Props) {
    const generarUrl = (id: string | number) => {
        return `${routes.product_detail}/${id}/${product.name
            ?.toLowerCase()
            .replace(/\s+/g, "-")}`;
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group mt-2 lg:mt-10"
            data-aos="fade-right"
            data-aos-delay="100"
        >
            <Link
                href={generarUrl(product.id)}
                className="relative h-40 lg:h-60 overflow-hidden block"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </Link>

            <div className="p-3 lg:p-4 flex flex-col">
                <div className="flex-grow space-y-1">
                    <h2 className="text-sm lg:text-lg font-semibold text-gray-800 line-clamp-2">
                        {product.name}
                    </h2>
                    <p className="hidden lg:block text-sm text-gray-600 line-clamp-4">
                        {product.description}
                    </p>
                    <p className="text-sm lg:text-base text-blue-600 font-medium">
                        {product.price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                        })}
                    </p>
                    <p className="text-xs text-gray-500">
                        Categoría: {product.category.name}
                    </p>
                </div>
                <div className="mt-3 flex gap-2 lg:ml-16">
                    <Link
                        href={generarUrl(product.id)}
                        className="bg-indigo-500 text-white rounded-md flex items-center justify-center transition-all hover:bg-sky-500 text-xs lg:text-sm h-8 w-20 lg:h-10 lg:w-28"
                    >
                        Ver detalles
                    </Link>

                    <AddToCartButton
                        product={product}
                        className="h-8 w-24 lg:h-10 lg:w-28 text-xs"
                    />
                </div>
            </div>
        </div>
    );
}
