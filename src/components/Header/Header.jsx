import React, { useState } from "react";
import data from "../../../backend/data.json";

const Header = ({ filterOnClick }) => {
  // Extract categories from data
  const categories = data.data.categories;

  //state for active links:
  const [activeLink, setActiveLink] = useState("all");

  //function to handle active links (to filter and update state with active link)
  const handleCategoryClick = (category) => {
    setActiveLink(category);
    filterOnClick(category);
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="E corp App" />
        <h1>E-Corp App</h1>
      </div>
      <div className="d-flex justify-content-between">
        {/* We map categories in a list styled with bootstrap cards */}
        {categories.map((category) => (
          <ul className="navbar-nav" key={category.name}>
            <li className="nav-item">
              <a
                type="button"
                // to filter and update state with active link
                className={`nav-link ${
                  activeLink === category.name ? "active" : ""
                }`}
                // to select the active link
                data-testid={
                  activeLink === category.name
                    ? "active-category-link"
                    : "category-link"
                }
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </a>
            </li>
          </ul>
        ))}
        <button
          type="button"
          className="btn btn-warning"
          data-testid="cart-btn"
        >
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
