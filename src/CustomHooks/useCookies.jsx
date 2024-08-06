import { useEffect, useState } from "react";
import { createNewCookie, getCookie } from "../Cookies/Cookie";

const getFromCookie = (key, initialV) => {
  const cookieValue = getCookie(key);

  if (cookieValue) {
    // Check if the cookie value represents a boolean
    if (cookieValue === "true") return true;
    if (cookieValue === "false") return false;

    try {
      return JSON.parse(cookieValue);
    } catch {
      return cookieValue; // In case the cookie is not JSON
    }
  } else if (initialV instanceof Function) {
    return initialV();
  }

  return initialV;
};

const useCookies = (key, initialValue) => {
  const [value, setValue] = useState(() => getFromCookie(key, initialValue));

  useEffect(() => {
    // Convert boolean to string before saving
    const valueToStore =
      typeof value === "boolean"
        ? value
          ? "true"
          : "false"
        : JSON.stringify(value);
    createNewCookie(key, valueToStore);
  }, [key, value]);

  return [value, setValue];
};

export default useCookies;
