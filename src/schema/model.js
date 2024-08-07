import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";

export let Product = model("Product", productSchema);
export let User = model("User", userSchema);
export let Review = model("Review", reviewSchema);
