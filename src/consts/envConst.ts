import dotenv from "dotenv";
dotenv.config();

export const ENV_CONST = {
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "default",
  PORT: Number(process.env.port) || 8080,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "default",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "default",
  COOKIE_SECRET: process.env.COOKIE_SECRET || "default",
  FRONTEND_HOST_URL: process.env.FRONTEND_HOST_URL || "http://localhost:5173",
  BACKEND_HOST_URL: process.env.BACKEND_HOST_URL || "http://localhost:8080",
} as const;
