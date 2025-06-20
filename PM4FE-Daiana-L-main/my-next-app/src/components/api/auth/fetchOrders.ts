
export async function createOrder(userId: number, products: number[], token: string) {
    const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({ userId, products }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al crear la orden");
    }

    return await response.json();
}


export async function getUserOrders(token: string) {
    const response = await fetch("http://localhost:3001/users/orders", {
        method: "GET",
        headers: {
            Authorization: token 
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al obtener las órdenes");
    }

    return await response.json();
}

