
import React from "react";
import './ProductDetail.css'

const ReviewCard = ({ review }) => {

  return (
    <div className="col-md-3 border-dark col-sm-6 ms-3 ">
<div className="card review card-body text-dark  mb-3" >
  <div className="card-header review-t">{review.title}</div>
  <div className="card-body">
    <h5 className=" review-h5 card-title">By:{review.name}</h5>
    <p className="card-text">{review.review}</p>
  </div>
  </div>
  </div>
  );
};

export default ReviewCard;