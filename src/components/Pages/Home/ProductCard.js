import React from "react";
import { Link } from "react-router-dom";
import './../../../App.css'
const ProductCard = ({ product }) => {
  const key =product.key
  return (
  <div className='col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center'>
      <Link style={{'textDecoration':'none'}} to={`/watches/${key}`}>
      <div className="productCard">
      <img src={product.img} alt={product.title} />
      <p>{product.title}</p>
      <span>{`৳${product.price}`}</span>
    </div> </Link>

    </div>
  );
};

export default ProductCard;