import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  readAllProductcontroller,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";
import { validation } from "../middleware/validation.js";
import { productValidation } from "../validation/productValidation.js";

const productRouter = Router();

productRouter
  .route("/product")
  .post(validation(productValidation),createProductController)
  .get(readAllProductcontroller)
  .patch((req, res, next) => {
    res.json("Nepal");
  })
  .delete((req, res, next) => {
    res.json("Nepal");
  });

productRouter
  .route("/product/:id")
  .get(readSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRouter;
