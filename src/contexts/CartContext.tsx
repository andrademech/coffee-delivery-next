import React, { useState } from "react";

import { createContext } from "use-context-selector";

import { StaticImageData } from "next/image";

interface CartItem {
  id: number;
  coffeeName: string;
  image: StaticImageData;
  tag: string[];
  description: string;
  price: number;
  quantity: number;
}

interface CartContextData<T> {
  cart: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (product: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextData<CartItem>);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addProductToCart(product: CartItem) {
    const productExists = cart.find((p) => p.id === product.id);

    if (productExists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeProductFromCart(product: CartItem) {
    const productExists = cart.find((p) => p.id === product.id);

    if (productExists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...product, quantity: p.quantity - 1 } : p
        )
      );
    }
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
