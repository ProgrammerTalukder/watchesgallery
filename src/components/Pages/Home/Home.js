import React, { useEffect, useState } from "react";
import { BsFillMouse2Fill } from 'react-icons/bs'
import "./Home.css";
import ProductCard from "./ProductCard";
import ProductFetch from "../../Fetch/ProductFetch"
import Nav from '../../Shared/Nav/Nav'
import ReviewCard from './../ProductDetails/ReviewCard'
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
    const products = ProductFetch();
    const [reviews,setReviews] = useState([])
    useEffect(() =>{
      fetch(`https://eerie-ghost-66570.herokuapp.com/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data))
    },[])
  return (

        <>
        <Nav></Nav>
          <div className="banner">
            <p>Welcome to Watch Gallery</p>
            <h1>FIND AMAZING WATCHES BELOW</h1>

            <a href="#container">
              <button>
                Scroll <BsFillMouse2Fill/>
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {
              products.slice(0,6).map(product =>
                <ProductCard key={product._id} product={product}></ProductCard>
              )}
          </div>
          <div className="row w-100 ">
          <h2 className="homeHeading">Our Product Reviews</h2>
            <div className="full col-md-12 align-middle justify-content-center align-items-center col-sm-12 d-flex container">
            
          {
            reviews.slice(0,8).map(review =><ReviewCard 
              key={review._id}
              review={review}></ReviewCard>)
          }

            </div>
          </div>
          <Footer></Footer>
        </>
  );
};

export default Home;