import expressAsyncHandler from "express-async-handler";
import { createReviewService, deleteReviewService, readAllReviewService, readSpecificReviewService, updateReviewService } from "../service/reviewService.js";
// import { createReviewService, deleteReviewService, readAllReviewService, readSpecificReviewService, updateReviewService } from "../service/reviewService.js";



export let createReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await createReviewService(req);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Review created successfully",
      result: result,
    });
  }
);
export let readAllReviewcontroller = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readAllReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  }
);
export let readSpecificReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readSpecificReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  }
);
export let updateReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await updateReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  }
);
export let deleteReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await deleteReviewService(req);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      result: result,
    });
  }
);
