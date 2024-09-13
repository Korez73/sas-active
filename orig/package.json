import React, { useState } from "react";
import { products } from "./data";

function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
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
    <div>
      <h1>Product Listing Page</h1>
      <div>
        <label>
          Filter by color:
          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <label>
          Sort by:
          <select onChange={handleSortChange}>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>Colors: {product.colors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
