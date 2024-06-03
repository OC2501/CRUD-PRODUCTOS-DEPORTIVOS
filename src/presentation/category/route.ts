import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryService } from "../services/category.service";

export class CategoryRoutes{
    static get routes(): Router{
        const routes= Router();
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}