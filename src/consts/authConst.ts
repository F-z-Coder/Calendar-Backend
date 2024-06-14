import { envConst } from "./envConst.js";

export const AUTH_BASE_URL = "/api/v1/auth";
export const AUTH_GOOGLE_LOGIN_ENDPOINT = "/google/login";
export const AUTH_GOOGLE_REDIRECT_ENDPOINT = "/google/redirect";
export const AUTH_GOOGLE_REDIRECT_URL =
  envConst.BACKEND_HOST_URL + AUTH_BASE_URL + AUTH_GOOGLE_REDIRECT_ENDPOINT;
