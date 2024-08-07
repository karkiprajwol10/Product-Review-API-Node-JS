import cors from "cors";
import express, { json } from "express";
import connectToMongoDb from "./src/connectToMongoDb/connectToMongoDb";
import { errorMiddleware } from "./src/middleware/errorMiddleware";
import productRouter from "./src/route/productRouter";
import reviewRouter from "./src/route/reviewRouter";
import userRouter from "./src/route/userRouter";
import fileRouter from "./src/route/fileRouter";

const app = express();
app.use(express.static("./public")); //All file are placed in static folder
app.use(cors());
app.use(json());
app.use()

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
