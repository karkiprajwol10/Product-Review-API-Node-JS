import { Router } from "express";
import { createReviewController, deleteReviewController, readAllReviewcontroller, readSpecificReviewController, updateReviewController } from "../controller/reviewController.js";
import { validation } from "../middleware/validation.js";
import { reviewValidation } from "../validation/reviewValidation.js";

const reviewRouter = Router();

reviewRouter
  .route("/review")
  .post(validation(reviewValidation),createReviewController)
  .get(readAllReviewcontroller)
  .patch((req, res, next) => {
    res.json("Nepal");
  })
  .delete((req, res, next) => {
    res.json("Nepal");
  });

reviewRouter
  .route("/review/:id")
  .get(readSpecificReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController);

export default reviewRouter;
