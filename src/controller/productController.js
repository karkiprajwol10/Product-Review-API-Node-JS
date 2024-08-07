import expressAsyncHandler from "express-async-handler";
import {
  createProductService,
  deleteProductService,
  readAllProductService,
  readSpecificProductService,
  updateProductService,
} from "../service/productService.js";

export let createProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await createProductService(req);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      result: result,
    });
  }
);
export let readAllProductcontroller = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readAllProductService(req);
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  }
);
export let readSpecificProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readSpecificProductService(req);
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  }
);
export let updateProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await updateProductService(req);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  }
);
export let deleteProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await deleteProductService(req);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  }
);
