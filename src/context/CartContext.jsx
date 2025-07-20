import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const exists = cart.find((prod) => prod.id === item.id);
    if (exists) {
      setCart(cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + item.quantity } : prod
      ));
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
