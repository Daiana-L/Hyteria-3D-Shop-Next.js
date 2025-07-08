
import Image from "next/image";
import { Product } from "../../types/index";
import { routes } from "@/routes";
import Link from "next/link";
import AddToCartButton from "../ui/CartAddBtn";

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
            className="bg-white rounded-lg shadow-md overflow-hidden xs:mt-3 lg:mt-10 lg:h-[600px] xs:h-[400px] flex flex-col group"
            data-aos="fade-right"
            data-aos-delay="100"
        >
            <Link
                href={generarUrl(product.id)}
                className="relative lg:h-60 xs:h-40 overflow-hidden block"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </Link>

            <div className="lg:p-4 flex-1 flex flex-col lg:justify-between xs:justify-around xs:p-2">
                <div>
                    <h2 className="lg:text-lg font-semibold text-gray-800 ">{product.name}</h2>
                    <p className="hidden lg:block lg:text-sm text-gray-600 lg:mt-1 line-clamp-4">{product.description}</p>
                    <p className="lg:text-base text-blue-600 font-medium lg:mt-2">
                        {product.price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                        })}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 ">
                        Categoría: {product.category.name}
                    </p>
                </div>
                <div className="lg:mt-6 flex xs:gap-1">
                    <Link
                        href={generarUrl(product.id)}
                        className="bg-indigo-500 text-white rounded-md lg:h-10 lg:w-28 xs:w-20 xs:h-8 flex items-center justify-center transition-all hover:bg-sky-500 xs:text-xs lg:text-sm"
                    >
                        Ver detalles
                    </Link>

                    <AddToCartButton product={product} className="lg:mt-6" />
                </div>
            </div>
        </div>
    );
}
