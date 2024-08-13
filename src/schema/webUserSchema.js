import { Schema } from "mongoose";

let webUserSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName field is required"],
    },
    email: {
      type: String,
      required: [true, "email field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password field is required"],
    },

    gender: {
      type: String,
      required: [true, "gender field is required"],
    },
    dob: {
      type: Date,
      required: [true, "dob field is required"],
    },
    role: {
      type: String,
      required: [true, "role field is required"],
    },
    isVerifiedEmail: {
      type: Boolean,
      required: [true, "isVerifiedEmail field is required"],
    },
  },
  { timestamps: true }
);
webUserSchema.virtual("id").get(function () {
  return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
webUserSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret, options) {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});
export default webUserSchema;
