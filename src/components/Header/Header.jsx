import React from "react";
import data from "../../../backend/data.json";

const Header = ({ filterOnClick }) => {
  // Extract categories from data
  const categories = data.data.categories;

  return (
    <header id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="E corp App" />
        <h1>E-Corp App</h1>
      </div>
      <p>
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className="btn btn-primary me-2"
            onClick={() => filterOnClick(category.name)}
          >
            {category.name}
          </button>
        ))}
        <button type="button" className="btn btn-warning">
          Cart
        </button>
      </p>
    </header>
  );
};

export default Header;
