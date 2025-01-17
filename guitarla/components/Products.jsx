import React, { useEffect } from "react";
import Product from "./Product";
import { Row } from "antd";


const Products = ({ cart, setCart }) => {
  const [products, setProducts] = React.useState([]);
  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Row gutter={[16, 24]} justify="center">
      {products.map((product) => (
        <Product
          key={product.id}
          cart={cart}
          setCart={setCart}
          itemData={product}
        />
      ))}
    </Row>
  );
};

export default Products;
