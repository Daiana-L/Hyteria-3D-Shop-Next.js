"use client";

import { useEffect, useState } from "react";
import AOSInitializer from "../../../components/models/AOSInitializer";
import "aos/dist/aos.css";
import ProductList from "../../../components/productsConteiner/ProductList";
import { Feature1 } from "../../../components/ui/Homelanding";
import { Product } from "../../../types/index";
import { fetchAllProducts } from "../../../components/api/fetchProducts";
import CategoriesHome from "../../../components/ui/categorysHome";

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAllProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    <AOSInitializer />
    return (
        <div>
            <div data-aos="fade-down">
                <Feature1 />
            </div>

            <div data-aos="fade-up">
                <CategoriesHome />
            </div>

            <div className="lg:px-4">
                <h2
                    data-aos="fade-right"
                    className="lg:text-2xl  xs:text-lg font-bold text-black lg:mt-10 xs:mt-3 xs:mb-5 xs:p-3"
                >
                    Productos disponibles
                </h2>

                {loading && <p>Cargando productos...</p>}
                {error && (
                    <p className="text-red-500" data-aos="fade-up">
                        Error: {error}
                    </p>
                )}
                {!loading && !error && (
                    <div data-aos="zoom-in-up">
                        <ProductList products={products} />
                    </div>
                )}
            </div>
        </div>
    );
}
