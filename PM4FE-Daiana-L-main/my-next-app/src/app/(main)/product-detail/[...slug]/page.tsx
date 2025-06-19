import Image from "next/image";
import { Params } from "@/Types";
import { SearchParams } from "@/Types";
import Head from "next/head";
import AddToCartButton from "@/Components/UI/CartAddBtn";
export default async function ProductDetail(props: {
    params: Params;
    searchParams: SearchParams;
}) {
    const params = await props.params;
    const [id = undefined, ...slug] = params.slug;
    const res = await fetch(`http://localhost:3001/products/${id}`, {
        cache: "no-store",
    });
    console.log(slug);
    if (!res.ok) {
        return <p>Producto no encontrado</p>;
    }
    const product = await res.json();
    return (
        <>
            <Head>
                <title>{product.name} | Hysteria_3D</title>
                <meta name="description" content={product.description} />
            </Head>

            <section className="text-gray-600">
                <div className="py-16">
                    <div className="lg:w-4/4 mx-auto flex flex-wrap">
                        {product.image && (
                            <Image
                                alt={product.name}
                                className="lg:w-1/2 w-full lg:h-auto h-68 object-cover object-center rounded"
                                src={product.image}
                                width={800}
                                height={800}
                            />
                        )}
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                Hysteria_3D
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product.name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            fill={
                                                i < 4 ? "currentColor" : "none"
                                            }
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                            </div>

                            <p className="leading-relaxed mb-4">
                                {product.description}
                            </p>

                            <div className="flex items-center border-b-2 border-gray-100 pb-5 mb-5">
                                <div className="flex items-center mr-6">
                                    <span className="mr-3">Color</span>
                                    <div className="flex gap-1">
                                        <button className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-400"></button>
                                        <button className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-gray-400"></button>
                                        <button className="w-6 h-6 rounded-full bg-violet-400 border-2 border-gray-400"></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {product.price.toLocaleString("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                    })}
                                </span>

                                <div className="ml-10">
                                    <AddToCartButton product={product} />
                                </div>

                                <button className="rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-500 hover:text-red-600 ml-6">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67 10.94 4.61a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>

                            <p className="mt-3 text-sm text-gray-500">
                                Stock disponible: {product.stock}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
