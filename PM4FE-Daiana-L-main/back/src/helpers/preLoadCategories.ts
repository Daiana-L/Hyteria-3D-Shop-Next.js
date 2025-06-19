import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: "Decoración" },
    { name: "Llaveros" },
    { name: "Macetas" },
    { name: "Accesorios" },
    { name: "Arte y diseño" },
    { name: "Figuras y coleccionables" },
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length)
        await AppDataSource.createQueryBuilder()
            .insert()
            .into(Category)
            .values(categoriesToPreLoad)
            .execute();
    console.log("Categories preloaded");
};
