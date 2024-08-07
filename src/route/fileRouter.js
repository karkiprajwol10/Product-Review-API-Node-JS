import { Router } from "express";

const fileRouter = Router();

fileRouter
  .route("/file/single")
  .post((req,res,next)=>{
    console.log("file uploaded successfully.");
  })
  
  
fileRouter
  .route("/file/multiple")
  .post((req,res,next)=>{
    console.log("multiple file updated successfully.");
  });


export default fileRouter;
