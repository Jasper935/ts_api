import dotenv from 'dotenv';
import * as process from "process";
dotenv.config();


export const dbConnectionString = process.env.MONGO_DB_LINK;
export const jwtSecret = process.env.JWT_SECRET;
export const passwordSalt = process.env.PASSWORD_SALT;
export const frontEndFormUrl = process.env.PASSWORD_SALT;