import './App.css';
import React, { useState } from "react";
import { products } from "./data";


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
        <div className="row p-2 justify-content-end">
          <div className="col-lg-3 p-1 ml-auto">
            <label>
              Filter by color:
              <select className="ms-2" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </label>
          </div>
          <div className="col-lg-3 p-1">
            <label>
              Sort by:
              <select className="ms-2" onChange={handleSortChange}>
                <option value="">None</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="container product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="rounded"/>
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <h6 class="card-subtitle">${product.price.toFixed(2)}</h6>
              <p class="card-text">Colors: {product.colors.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
