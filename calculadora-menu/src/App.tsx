import { useEffect, useState } from "react";
import { MenuItem } from "./components/MenuItem";
import userOrder from "./hooks/useOrder";
import { OrderContents } from "./components/OrderContents";
import TotalOrden from "./components/TotalOrden";
import Propina from "./components/Propina";

function App() {
  const { addItem, order, removeItem, tip, setTip, guardarOrden } = userOrder();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    var data = await fetch("https://fakestoreapi.com/products");
    const dataJson = await data.json();
    setProducts(dataJson);
    console.log(dataJson);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumos
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {products.map((product) => (
              <MenuItem key={product.id} item={product} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
          <Propina tip={tip} setTip={setTip} />
          <TotalOrden orden={order} tip={tip} guardarOrden={guardarOrden} />
        </div>
      </main>
    </>
  );
}

export default App;
