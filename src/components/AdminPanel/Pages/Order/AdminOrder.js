import React,{useEffect, useState} from 'react';
import Nav from '../../../Shared/Nav/Nav';
import NavAdmin from '../../NavAdmin';
import AdminOrderData from './AdminOrderData';

const AdminOrder = () => {
    const [order,setOrder] = useState([])
    useEffect(() =>{
        fetch(`https://eerie-ghost-66570.herokuapp.com/order`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
        <Nav className="d-flex justify-content-start"></Nav>
        <NavAdmin></NavAdmin>
        <section class="jumbotron text-center">
<div class="container">
    <h1 class="jumbotron-heading">Orders</h1>
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
                        <th scope="col">Order Form</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-right">Payment</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {order.map(watch =><AdminOrderData 
                    key={watch._id}
                    watch={watch}
                    ></AdminOrderData>)}
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
    </div>
    );
};

export default AdminOrder;