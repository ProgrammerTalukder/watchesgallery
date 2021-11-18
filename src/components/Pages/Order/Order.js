import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Orderdata from './Orderdata';
import Nav from '../../Shared/Nav/Nav'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const Order = () => {
    const {user} = useAuth();
    console.log(user.email)
    const [order,setOrder] = useState([])
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
              }, 500);
    },[])
        useEffect(() => {
        fetch(`https://eerie-ghost-66570.herokuapp.com/order/user?user=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email]);
    console.log(order)
    return (
<>
<div>{loading?     <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>:<div></div> }</div>
<Nav></Nav>
<section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">YOUR ORDERS</h1>
     </div>
</section>

<div class="container mb-4">
    <div class="row">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Status</th>
                            <th scope="col" class="text-right">Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {order.map(order =><Orderdata key={order._id} order={order}></Orderdata>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
</>
    );
};

export default Order;