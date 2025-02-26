import { useState } from "react";
import { ICartProduct, IProduct } from "../interfaces";

const useCart = (initialCart: string) => {
  const [cart, setCart] = useState<ICartProduct[]>(
    initialCart !== null ? JSON.parse(initialCart) : [],
  );

  const addToCart = (itemData: IProduct) => {
    const found = cart.find((item) => item.id === itemData.id);
    if (!found) {
      setCart([...cart, { ...itemData, cantidad: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === itemData.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    }
  };

  const addItem = (id: IProduct["id"]) => {
    setCart(
      cart.map((item) => {
        return item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item;
      }),
    );
  };

  const removeItem = (id: IProduct["id"]) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.cantidad > 0),
    );
  };
  return {
    cart,
    setCart,
    addToCart,
    addItem,
    removeItem,
  };
};

export default useCart;
