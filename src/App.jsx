import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Stock from "./components/Stock/Stock";
import data from "../backend/data.json";

function App() {
  // State to manage the full product list
  const [products, setProducts] = useState([]);
  // State to update the filtered stocks
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Later we will have to add the AJAX request to the BE
  useEffect(() => {
    // Directly use the imported JSON data, backend will happen later
    const { products } = data.data;
    // Initialize with all products
    setProducts(products);
    setFilteredProducts(products);
  }, []);

  // Function to filter categories onClick
  const filterOnClick = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Header filterOnClick={filterOnClick} />
      <Stock products={filteredProducts} />
    </>
  );
}

export default App;
