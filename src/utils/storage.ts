import type { Product } from "../types/product";

const KEY = "cart";

export const getCart = (): Product[] => {
  return JSON.parse(sessionStorage.getItem(KEY) || "[]");
};

export const addToCart = (product: Product) => {
  const cart = getCart();
  sessionStorage.setItem(KEY, JSON.stringify([...cart, product]));
};
