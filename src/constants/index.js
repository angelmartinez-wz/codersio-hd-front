import { getAccessToken } from "../lib/auth";

export const ACCESS_TOKEN_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY01KcEw3YjQxM1oiLCJlbWFpbCI6ImFuZ2VsQGhkLmNvbSIsImlhdCI6MTczOTQ2OTgzM30.FkVsbqLvrIJwDS7v8bVjn26fz2OaiowsPWTSQ35Rco0";
export const API_URL = "http://localhost:9000";
export const URI = "http://localhost:9000/graphql";
export const WS_URI = "ws://localhost:9000/graphql";
export const HEADERS = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "content-type": "application/json",
  },
};
