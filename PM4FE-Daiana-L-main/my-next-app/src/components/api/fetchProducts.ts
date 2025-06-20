export async function fetchAllProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Error al cargar productos");

    return await res.json();
}

export async function fetchProductsByCategoryId(id: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${id}`, {
        cache: "no-store",
    });
    if (!response.ok) {
        throw new Error("Error al obtener productos por categoría");
    }
    return await response.json();
}
