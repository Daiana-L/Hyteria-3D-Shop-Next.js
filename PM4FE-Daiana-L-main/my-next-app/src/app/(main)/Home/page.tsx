"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductList from "../../../components/productsConteiner/productList";
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
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-down">
                <Feature1 />
            </div>

            <div data-aos="fade-up">
                <CategoriesHome />
            </div>

            <div className="px-4">
                <h2
                    data-aos="fade-right"
                    className="text-2xl font-bold text-black mt-10"
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
