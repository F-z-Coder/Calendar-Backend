import dotenv from "dotenv";
dotenv.config();

export const envConst = {
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
  PORT: Number(process.env.port) || 8080,
};
