import { Schema } from "mongoose";

let reviewSchema = Schema({
  user: {
    // type:String,
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    // type:String,
    type: Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
reviewSchema.virtual("id").get(function () {
  return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
reviewSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret, options) {
    delete ret._id;
    return ret;
  },
});

export default reviewSchema;
