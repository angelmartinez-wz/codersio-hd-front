import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN_KEY, API_URL } from "../../constants";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getUser() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return email;
  }
  return null;
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token) {
  const jwtPayload = jwtDecode(token);
  return jwtPayload.sub;
}
