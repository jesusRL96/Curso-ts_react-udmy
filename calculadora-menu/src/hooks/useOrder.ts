import { useState } from "react";
import { OrderItem } from "../types";

export default function userOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState<number>(0);

	return {

	}
}
