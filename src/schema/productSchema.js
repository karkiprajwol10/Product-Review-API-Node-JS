import { Schema } from "mongoose";

let productSchema = Schema({
    name: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    quantity:{
       type:Number,required:true,
    },
    description:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
        required:true,
    },
    
});
productSchema.virtual("id").get(function () {
    return this._id;
  });
  
  // Ensure virtual fields are serialized in JSON output and exclude _id
  productSchema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret, options) {
      delete ret._id;
      return ret;
    },
  });
  
export default productSchema;
