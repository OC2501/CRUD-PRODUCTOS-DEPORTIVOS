import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services/product.service";

export class ProductRoute{
    static get routes(): Router{
        const routes= Router();
        const productService = new ProductService();
        const controller = new ProductController(productService);
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}