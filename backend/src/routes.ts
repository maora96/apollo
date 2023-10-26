import { Router } from "express";
import { ProductController } from "./controllers/ProductController";
import { CategoryController } from "./controllers/CategoryController";

const routes = Router();

routes.post("/product", new ProductController().create);

routes.get("/product", new ProductController().findAll);

routes.delete("/product/:id", new ProductController().delete);

routes.post("/category", new CategoryController().create);

routes.get("/category", new CategoryController().findAll);

export default routes;
