import { useState } from "react";
import { OrderItem, Product } from "../types";

export default function userOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState<number>(0);

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

  return {
    addItem, order
  };
}
