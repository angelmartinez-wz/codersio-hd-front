import { getAccessToken } from "../lib/auth";

export const ACCESS_TOKEN_KEY = "accessToken";
export const API_URL = "http://localhost:9000";
export const URI = "http://localhost:9000/graphql";
export const WS_URI = "ws://localhost:9000/graphql";
export const HEADERS = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "content-type": "application/json",
  },
};
