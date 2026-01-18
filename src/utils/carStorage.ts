import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

const CART_KEY = "cart";

export const getCart = (): CartItem[] => {
  const data = sessionStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToCart = (product: Product): void => {
  const cart = getCart();

  const existingItem  = cart.find(
    item => item.product.id === product.id
  )

  if(existingItem){
    existingItem.quantity += 1
  }else{
    cart.push({product, quantity: 1})
  }

  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const updateQuantity = ( productId: number, quantity: number): void => {
  const cart = getCart()
    .map(item => item.product.id === productId? { ...item, quantity }: item)
    .filter(item => item.quantity > 0);

  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const removeFromCart = (productId: number): void => {
  const cart = getCart().filter(
    item => item.product.id !== productId
  );

  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
};