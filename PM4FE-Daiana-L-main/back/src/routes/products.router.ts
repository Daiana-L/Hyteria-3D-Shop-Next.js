import { Router } from "express";
import {
    getProducts,
    getProductById,
    getProductsByCategory,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/category/:id", getProductsByCategory);

router.get("/:id", getProductById);

export default router;
