import { fetchProductsByCategoryId } from "@/Components/api/fetchProducts";
import { Product } from "@/Types";
import ProductCard from "@/Components/ProductCard/ProductCard";

type Props = {
    params: { id: string };
};

export default async function CategoryPage(props: Promise<Props>) {
    const { params } = await props;
    const categoryId = Number(params.id);
    const products: Product[] = await fetchProductsByCategoryId(categoryId);

    const categoryName =
        products.length > 0
            ? products[0].category.name
            : "Categoría desconocida";

    return (
        <div className="lg:px-4 lg:py-6">
            <h2 className="lg:text-2xl xs:text-xl font-bold text-gray-900 6 xs:mt-6">
                Productos en la categoría / {categoryName}
            </h2>

            <div className="grid xs:grid-cols-2 lg:grid-cols-3 lg:gap-6 xs:gap-1">
                {products.length === 0 && (
                    <p>No hay productos en esta categoría.</p>
                )}

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
