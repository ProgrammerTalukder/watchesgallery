import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import CartData from './CartData';
import Nav from '../../Shared/Nav/Nav'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from './../../Shared/Footer/Footer'
import './Cart.css'
const Cart = () => {
    const {user} = useAuth();
    const [cart,setCart] = useState([])
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
              }, 500);
        fetch(`https://eerie-ghost-66570.herokuapp.com/cart/user?user=${user.email}`)
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[user.email])
    console.log(cart)
    return (
<>
<Nav></Nav>
<div>{loading?     <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>:<div></div> }</div>
<section class="jumbotron text-center">

    <div class="container">
        <h1 class="jumbotron-heading">WATCH GALLERY CART</h1>
     </div>
</section>

<div class="container mb-4">
    <div class="row">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" class="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map(cart =><CartData key={cart._id} cart={cart}></CartData>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col mb-2">
            <div class="row">
                <div class="col-sm-12  col-md-12">
                    <Link to='/watches'>
                    <button class="btn btn-block btn-warning">Continue Shopping</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>

</div>
<Footer></Footer>
</>
    );
};

export default Cart;