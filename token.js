/*
 */

import jwt from "jsonwebtoken";
import { secretkey } from "./src/constant.js";
/* **********generating token******** */
let info = {
  id: "26368348",
};

let expiryInfo = {
  expiresIn: "365d",
};
// expiryInfo must be in same format
let token = jwt.sign(info, secretkey, expiryInfo);
console.log(token);
/* ********validating token******** */
try {
  let v= jwt.verify(
   token,secretkey
  );
  console.log(v);
  /* 
  To verify token
      token must be generated from given secretkey,
      token must not expire
       */
} catch (error) {
  console.log(error.message);
}; 