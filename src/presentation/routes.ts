import {Router} from "express";
import { CategoryRoutes } from "./category/route";
import { ProductRoute } from "./product/route";
export class AppRoute{

    static get routes(): Router{
        const routes = Router();
        routes.use('/api/category', CategoryRoutes.routes );
        routes.use('/api/product', ProductRoute.routes );
        return routes;
    }
}