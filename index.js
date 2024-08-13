import cors from "cors";
import express, { json } from "express";
import connectToMongoDb from "./src/connectToMongoDb/connectToMongoDb.js";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import fileRouter from "./src/route/fileRouter.js";
import productRouter from "./src/route/productRouter.js";
import reviewRouter from "./src/route/reviewRouter.js";
import userRouter from "./src/route/userRouter.js";



const app = express();
app.use(express.static("./public")); //All file are placed in static folder
app.use(cors());
app.use(json());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server is running on port 8000");
  connectToMongoDb();
});
app.use(productRouter);
app.use(userRouter);
app.use(reviewRouter);
app.use(fileRouter);
app.use(errorMiddleware);

/* 
http://localhost:8000/images.jpeg 
*/
