import { useEffect, useState } from "react";

const useCart = (initialCart) => {
  const [cart, setCart] = useState(
    initialCart != null ? JSON.parse(initialCart) : [],
  );

  const addToCart = (itemData) => {
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

  const addItem = (id) => {
    setCart(
      cart.map((item) => {
        return item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item;
      }),
    );
  };

  const removeItem = (id) => {
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
