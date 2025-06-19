import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getProductByIdService } from "../services/products.service";
import { Product } from "../entities/Product";
import { AppDataSource } from "../config/dataSource";
export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  }
);


export const getProductsByCategory = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);

    try {
        const productRepository = AppDataSource.getRepository(Product);

        const products = await productRepository.find({
            where: {
                category: { id: categoryId }
            },
            relations: ["category"]
        });

        res.json(products);
    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

