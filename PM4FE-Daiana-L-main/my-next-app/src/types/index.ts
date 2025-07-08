export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders?: Order[];
}

enum eRole {
    ADMIN = "admin",
    USER = "user",
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
    category: Category;
}

interface Category {
    id: number;
    name: string;
    products?: Product[];
}

export enum OrderStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
}

export interface Order {
    id: number;
    status: OrderStatus.PENDING;
    date: Date;
    user: User;
    products: Product[];
}

export type CategoryParams = {
    id: string;
};

export type Params = {
    slug: string[];
};

export type SearchParams = {
    [key: string]: string | string[] | undefined;
};
