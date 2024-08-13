import { Router } from "express";
import upload from "../middleware/upload.js";

const fileRouter = Router();
/* 
/file/single => POST
 pass file
 store at public(static)
 send link of that file to res
  */

fileRouter
  .route("/file/single")
  .post(upload.single("myFile"), (req, res, next) => {
    let link = `http://localhost:8000/${req.file.filename}`;
    res.json({
      success: true,
      message: `${req.file.originalname} uploaded successfully.`,
      result: link,
    });
    console.log(req.file);
  });

fileRouter
  .route("/file/multiple")
  .post(upload.array("myFile"), (req, res, next) => {
    let link = req.files.map((item, i) => {
      return `http://localhost:8000/${item.filename}`;
    });
    res.json({
      success: true,
      message: "files uploaded successfully.",
      result: link,
    });
    console.log("multiple file updated successfully.");
  });

export default fileRouter;

/* 
upload.single("myFile")
it stores file coming in myFile to the public
from postman always send file to myFile field
add file information to req (req.file)
 */
/* 
upload.array("myFile")
it stores file coming in myFile to the public
from postman always send file to myFile field
add files information to req (req.files)
 */
