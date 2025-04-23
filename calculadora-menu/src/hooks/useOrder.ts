import { useState } from "react";
import { OrderItem, Product } from "../types";

export default function userOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const addItem = (item: Product) => {
    let orderItemFound = order.find((element) => element.id === item.id);
    if (orderItemFound) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        ),
      );
    } else {
      const orderItemNew = { ...item, quantity: 1 };
      setOrder([...order, orderItemNew]);
    }
  };

  const removeItem = (item: OrderItem) => {
    const newOrder = order
      .map((o) => (o.id === item.id ? { ...o, quantity: o.quantity - 1 } : o))
      .filter((o) => o.quantity > 0);
    setOrder(newOrder);
  };

  const guardarOrden = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip,
		guardarOrden
  };
}
