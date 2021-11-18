import * as React from 'react';
import {useState} from 'react'
import Nav from '../../../Shared/Nav/Nav';
import NavAdmin from '../../NavAdmin'
function AdminHome(props) {
  const [user, setUser] = useState([])
  const [reviews, setReviews] = useState([])
  const [product, setProduct] = useState([])
  const [order, setOrder] = useState([])
  React.useEffect(() => {
    fetch('https://eerie-ghost-66570.herokuapp.com/user')
    .then(res =>res.json())
    .then(data => setUser(data))
    fetch('https://eerie-ghost-66570.herokuapp.com/watches')
    .then(res =>res.json())
    .then(data => setProduct(data))
    fetch('https://eerie-ghost-66570.herokuapp.com/reviews')
    .then(res =>res.json())
    .then(data => setReviews(data))
    fetch('https://eerie-ghost-66570.herokuapp.com/order')
    .then(res =>res.json())
    .then(data => setOrder(data))
  },[])
  return (
      <>
      <Nav></Nav>
      <NavAdmin></NavAdmin>
      <div className="d-flex align-items-center justify-content-center">
      <div className="card text-white bg-success m-3" style={{width: '18rem'}}>

  <div className="card-body">
    <h6 className="card-title">USERS</h6>
    <h3 className="card-text">{user.length}</h3>
  </div>
</div>
<div className="card text-white bg-success m-3" style={{width: '18rem'}}>

<div className="card-body">
  <h6 className="card-title">PRODUCTS</h6>
  <h3 className="card-text">{product.length}</h3>
</div>
</div>
<div className="card text-white bg-success m-3" style={{width: '18rem'}}>

  <div className="card-body">
    <h6 className="card-title">REVIEWS</h6>
    <h3 className="card-text">{reviews.length}</h3>
  </div>
</div>
<div className="card text-white bg-success m-3" style={{width: '18rem'}}>
  <div className="card-body">
    <h6 className="card-title">ORDERS</h6>
    <h3 className="card-text">{order.length}</h3>
  </div>
</div>
      </div>

</>
    
  );
}
export default AdminHome;
