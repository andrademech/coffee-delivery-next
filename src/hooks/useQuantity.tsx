import { CartContext } from "@/contexts/CartContext";
import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";

export function useQuantity() {
  const cart = useContextSelector(CartContext, ({ cart }) => cart)

  const quantity = useMemo(() => {

    if (cart === undefined) {
      return 0;
    }

    return cart.reduce(
      (sumQuantity, product) => {
        return sumQuantity + product.quantity
      }, 0
    )
  }, [cart])

  return { quantity }
}