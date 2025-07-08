import { fetchProductsByCategoryId } from "../../../../components/api/fetchProducts";
import { Product } from "../../../../types/index";
import ProductCard from "../../../../components/productsConteiner/productCard";

type Props = {
    params: { id: string };
};

export default async function CategoryPage(props: Promise<Props>) {
    const { params } = await props;
    const categoryId = Number(params.id);

    let products: Product[] = [];
    let error = false;

    try {
        products = await fetchProductsByCategoryId(categoryId);
    } catch (e) {
        console.error("Error al obtener productos por categoría:", e);
        error = true;
    }

    const categoryName =
        products.length > 0
            ? products[0].category.name
            : "Categoría desconocida";

    return (
        <div className="lg:px-4 lg:py-6">
            <h2 className="lg:text-2xl xs:text-xl font-bold text-gray-900 xs:mt-6">
                Productos en la categoría / {categoryName}
            </h2>

            <div className="grid xs:grid-cols-2 lg:grid-cols-3 lg:gap-6 xs:gap-1">
                {error && (
                    <p className="text-red-500 col-span-full">
                        Hubo un error al conectar con el servidor. Intenta más tarde.
                    </p>
                )}

                {!error && products.length === 0 && (
                    <p className="col-span-full">
                        No hay productos en esta categoría.
                    </p>
                )}

                {!error &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}
