import './App.css';
import React, { useState, useEffect } from "react";
import { products } from "./data";
import ProductCard from "./components/ProductCard"
import FilterSort from "./components/FilterSort"

function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [filteredInfo, setFilteredInfo] = useState("");

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

  useEffect(() => {
    setFilteredInfo(`Currently showing ${filteredProducts.length} of ${products.length}`)
  }, [filteredProducts])

  return (
    <div className="container p-3">
      <h1>Product Listing Page</h1>
      <FilterSort handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} filteredInfo={filteredInfo} />
      <div className="container product-grid">
        {sortedProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
