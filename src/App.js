import './App.css';
import React, { useState } from "react";
import { products } from "./data";
import ProductCard from "./components/ProductCard"


function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const filteredProducts = products.filter(
    (product) => !filter || product.colors.includes(filter)
  );
  
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    } else if (sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="container p-3">
      <h1>Product Listing Page</h1>
      <div className="container">
        <div className="row p-2">
          <div className="d-flex col-lg-3 p-1">
            <label className="col-form-label text-nowrap">Filter by color:</label>
            <select className="form-select form-select-sm filter-select ms-2" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="d-flex col-lg-3 p-1">
            <label className="col-form-label text-nowrap">Sort by:</label>
            <select className="form-select form-select-sm filter-select ms-2" onChange={handleSortChange}>
              <option value="">None</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container product-grid">
        {sortedProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
