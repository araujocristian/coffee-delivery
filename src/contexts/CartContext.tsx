import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItens: CartItem[];
  cartQuantity: number;
  cartItensTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<CartItem[]>([]);

  const cartQuantity = cartItens.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const cartItensTotal = cartItens.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

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

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const updatedCart = cartItens.map((item) => {
      if (item.id === cartItemId) {
        return {
          ...item,
          quantity: type === "increase" ? item.quantity + 1 : item.quantity - 1,
        };
      }

      return item;
    });

    setCartItens(updatedCart);
  }

  function removeCartItem(cartItemId: number) {
    const updatedCart = cartItens.filter((item) => item.id !== cartItemId);

    setCartItens(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        cartQuantity,
        cartItensTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
