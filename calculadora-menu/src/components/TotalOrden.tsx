import React, { useMemo } from "react";
import { OrderItem } from "../types";

type TotalOrdenProps = {
  orden: OrderItem[];
  tip: number;
	guardarOrden: () => void
};

const TotalOrden = ({ orden, tip, guardarOrden }: TotalOrdenProps) => {
  const subtotal = orden.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );
  const tipAmount = useMemo(() => subtotal * tip, [orden, tip]);
  const totalPagar = useMemo(() => subtotal * (1 + tip), [orden, tip]);
  return (
    <div>
      <h2 className="font-black text-4xl">Total de orden:</h2>
      <div>
        <p>
          Subtotal: <span className="font-black">$ {subtotal}</span>
        </p>
        <p>
          Propina: <span className="font-black">$ {tipAmount}</span>
        </p>
        <p>
          Total: <span className="font-black">$ {totalPagar}</span>
        </p>
      </div>
      <button
        type="button"
        className="btn w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalPagar === 0}
				onClick={guardarOrden}
      >
        Guardar orden
      </button>
    </div>
  );
};

export default TotalOrden;
