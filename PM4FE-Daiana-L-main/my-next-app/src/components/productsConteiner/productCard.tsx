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
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group xs:mt-3 lg:mt-10 xs:min-h-[500px] lg:min-h-[600px]"
            data-aos="fade-right"
            data-aos-delay="100"
        >
            <Link
                href={generarUrl(product.id)}
                className="block w-full h-[160px] lg:h-[240px] relative"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </Link>

            <div className="flex-1 flex flex-col justify-between xs:p-3 lg:p-4">
                <div>
                    <h2 className="text-gray-800 font-semibold text-sm lg:text-lg line-clamp-2">
                        {product.name}
                    </h2>
                    <p className="hidden lg:block text-gray-600 text-sm mt-1 line-clamp-4">
                        {product.description}
                    </p>
                    <p className="text-blue-600 font-medium text-sm lg:text-base mt-2">
                        {product.price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                        })}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Categoría: {product.category.name}
                    </p>
                </div>

                <div className="flex gap-2 mt-4">
                    <Link
                        href={generarUrl(product.id)}
                        className="bg-indigo-500 text-white rounded-md flex items-center justify-center transition-all hover:bg-sky-500 xs:text-xs lg:text-sm xs:h-8 xs:w-20 lg:h-10 lg:w-28"
                    >
                        Ver detalles
                    </Link>

                    <AddToCartButton product={product} className="xs:h-8 lg:h-10 xs:text-xs" />
                </div>
            </div>
        </div>
    );
}
