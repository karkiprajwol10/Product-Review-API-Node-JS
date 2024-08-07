import { Router } from "express";
import { createUserController, deleteUserController, readAllUsercontroller, readSpecificUserController, updateUserController } from "../controller/userController.js";
import { validation } from "../middleware/validation.js";
import { userValidation } from "../validation/userValidation.js";

const userRouter = Router();

userRouter
  .route("/user")
  .post(validation(userValidation),createUserController)
  .get(readAllUsercontroller)
  .patch((req, res, next) => {
    res.json("Nepal");
  })
  .delete((req, res, next) => {
    res.json("Nepal");
  });

userRouter
  .route("/user/:id")
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRouter;
