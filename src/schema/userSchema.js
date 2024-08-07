import { Schema } from "mongoose";

let userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
userSchema.virtual("id").get(function () {
  return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
userSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret, options) {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});
export default userSchema;
