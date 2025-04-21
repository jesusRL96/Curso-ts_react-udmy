import React from "react";
import { OrderItem } from "../types/index";

type OrderItemProps = {
  order: OrderItem[];
};

export function OrderContents({ order }: OrderItemProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="mt-10">
        {order.length == 0 ? (
          <h2>La order esta vacia</h2>
        ) : (
          order.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between border-t border-gray-200 last-of-type:border-b py-5"
              >
                <div>
                  <p className="text-lg">
                    {item.title} - ${item.price * item.quantity}
                  </p>
                  <p className="font-black">Cantidad: {item.quantity}</p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                  X
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
