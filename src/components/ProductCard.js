function ProductCard({product}) {
  return (
    <div key={product.id} className="card">
      <img src={product.image} alt={product.name} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle">${product.price.toFixed(2)}</h6>
        <p className="card-text">Colors: {product.colors.join(", ")}</p>
        <button className="btn btn-primary">Go Somewhere</button>
      </div>
    </div>
  )
}
export default ProductCard;