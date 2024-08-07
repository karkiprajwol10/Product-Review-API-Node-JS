import { config } from "dotenv";

config();

// export const password = process.env.PASSWORD;
// export const email = process.env.EMAIL;
// export const secretkey = process.env.SECRET_KEY;
export const secretkey = process.env.SECRET_KEY;
export const user = process.env.USER;
export const pass = process.env.PASS;

export const port = process.env.PORT;
export const dbUrl = process.env.DB_URL;
