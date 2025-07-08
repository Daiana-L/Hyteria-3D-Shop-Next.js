import { Product } from "../../types/index";
import ProductCard from "./productCard";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 xs:gap-2 lg:gap-6">
            {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
            ))}
        </div>
    );
}
