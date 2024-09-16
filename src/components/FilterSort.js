function FilterSort({handleFilterChange, handleSortChange, filteredInfo}) {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 filter-cell">
          <label className="col-form-label text-nowrap">Filter by color:</label>
          <select className="form-select form-select-sm filter-select ms-2" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 filter-cell">
          <label className="col-form-label text-nowrap">Sort by:</label>
          <select className="form-select form-select-sm filter-select ms-2" onChange={handleSortChange}>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-6 p-1 position-relative filter-cell">
          <label className="position-absolute bottom-0 end-0 text-nowrap d-none d-md-block">{filteredInfo}</label>
        </div>        
      </div>
  </div>    
  )
}

export default FilterSort