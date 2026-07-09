import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const storageValue = localStorage.getItem(key);
  const startValue = (storageValue && storageValue !== "undefined") ? JSON.parse(storageValue) : initialValue;

  const [value, setValue] = useState(startValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
