import expressAsyncHandler from "express-async-handler";
import {
  createUserService,
  deleteUserService,
  readAllUserService,
  readSpecificUserService,
  updateUserService,
} from "../service/userService.js";
import { sendEmail } from "../utils/sendmail.js";
import { user } from "../constant.js";

export let createUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await createUserService(req);
    await sendEmail({
      from: `Prajwol <${user}>`,
      to: [req.body.email],
      subject: "My first system email",
      html: `<h1>you are selected</h1>`,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: result,
    });
  }
);
export let readAllUsercontroller = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readAllUserService(req);
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result,
    });
  }
);
export let readSpecificUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await readSpecificUserService(req);

    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result,
    });
  }
);
export let updateUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await updateUserService(req);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      result: result,
    });
  }
);
export let deleteUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await deleteUserService(req);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  }
);
