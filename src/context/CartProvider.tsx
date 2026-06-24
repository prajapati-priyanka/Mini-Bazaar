import { useEffect, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types/cart";
import toast from "react-hot-toast";

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  // Restore cart state from localStorage on initial load
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Persist cart updates across page refreshes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    // Same product + color + size combination is treated as a single cart line item.
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.color === item.color &&
        cartItem.size === item.size,
    );

    if (existingItem) {
      toast.success("Cart quantity increased", {
        id: "cart-toast",
      });
    } else {
      toast.success("Product added to cart", {
        id: "cart-toast",
      });
    }

    setCartItems((prev) => {
      if (existingItem) {
        // Increase quantity instead of creating a duplicate cart entry.
        return prev.map((cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.size === item.size
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem,
        );
      }

      return [...prev, item];
    });
  };

  // Increase Quantity
  const increaseQuantity = (productId: number, color: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (productId: number, color: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  // Remove a specific product variant from the cart
  const removeFromCart = (productId: number, color: string, size: string) => {
    toast.success("Item removed from cart", {
      id: "cart-toast",
    });
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.color === color &&
            item.size === size
          ),
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
