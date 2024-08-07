import mongoose from "mongoose";

const connectToMongoDb = async() => {
  await mongoose.connect("mongodb://localhost:27017/dw17project");
  console.log("application is connected to mongodb database suc")
};

export default connectToMongoDb;
