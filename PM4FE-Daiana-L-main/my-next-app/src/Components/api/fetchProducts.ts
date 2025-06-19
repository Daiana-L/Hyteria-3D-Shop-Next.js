export async function fetchAllProducts() {
    const res = await fetch("http://localhost:3001/products", {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Error al cargar productos");

    return await res.json();
}
export async function fetchProductsByCategoryId(id: number) {
    const response = await fetch(`http://localhost:3001/products/category/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener productos por categoría");
    }
    return await response.json();
}
