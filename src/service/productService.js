

import { Product } from "../schema/model.js";


export const createProductService = async (req) => {
  return await Product.create(req.body);
};
export const readAllProductService = async (req) => {
  return await Product.find({});
};
export const readSpecificProductService = async (req) => {
  return await Product.findById(req.params.id);
};
export const updateProductService = async (req) => {
  return await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
};
export const deleteProductService = async (req) => {
  return await Product.findByIdAndDelete(req.params.id);
};

/* 
ctrl + f
small = small
capital = capital
select Aa
replace all

comment those import which has.
and import again
*/
