import { useEffect, useState } from "react";
import { MenuItem } from "./components/MenuItem";

function App() {
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
            <MenuItem key={product.id} item={product} />
          ))}

					</div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
