import React from "react";
import Card from "../Card/Card";

const Stock = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {/* We display the products in a list styled with bootstrap cards */}
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
