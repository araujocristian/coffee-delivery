import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItens: CartItem[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItens }}>
      {children}
    </CartContext.Provider>
  );
}
