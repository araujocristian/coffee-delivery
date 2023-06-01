import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItens: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<CartItem[]>([]);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItens.find((item) => item.id === coffee.id);

    if (!!coffeeAlreadyInCart) {
      const updatedCart = cartItens.map((item) => {
        if (item.id === coffee.id) {
          return {
            ...item,
            quantity: item.quantity + coffee.quantity,
          };
        }

        return item;
      });

      setCartItens(updatedCart);
    } else {
      setCartItens((cartItens) => [...cartItens, coffee]);
    }
  }

  console.log(cartItens);

  return (
    <CartContext.Provider value={{ cartItens, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
