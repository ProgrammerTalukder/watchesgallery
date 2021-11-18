import React,{useState, useEffect} from "react";
import "./Product.css";
import ProductCard from "../Home/ProductCard";
import { Link } from "react-router-dom";
import ProductFetch from "../../Fetch/ProductFetch"
import Nav from '../../Shared/Nav/Nav'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const Product = () => {
  const products = ProductFetch();
  console.log(products)
  const key =products.key;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
        }, 500);
},[])
    return (
      <>
            <div>{loading?     <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>:<div></div> }</div>
      <Nav></Nav>

      <h2 className="productsHeading">Products</h2>
      <Link style={{'textDecoration':'none'}} to={`/watches/${key}`}>
        <div>


<div className="products d-flex row">
  {
    products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
</div>

        </div>
        </Link></>
    );
};

export default Product;