import { useState, useEffect } from "react";
import data from "../../../backend/data.json";
import Card from "../Card/Card";

const Stock = () => {
  // State to manage the product list
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Directly use the imported JSON data, backend will happen later
    const { products } = data.data;
    setProducts(products);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
