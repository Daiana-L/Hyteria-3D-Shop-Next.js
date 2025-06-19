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
        <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-black mb-10 mt-4">
                Productos en la categoría / {categoryName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
