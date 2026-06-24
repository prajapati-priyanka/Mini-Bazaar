import { createContext } from "react";
import type { CartItem } from "../types/cart";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  increaseQuantity: (
    productId: number,
    color: string,
    size: string
  ) => void;
  decreaseQuantity: (
    productId: number,
    color: string,
    size: string
  ) => void;
  removeFromCart: (
    productId: number,
    color: string,
    size: string
  ) => void;
}

export const CartContext =
  createContext<CartContextType | null>(null);