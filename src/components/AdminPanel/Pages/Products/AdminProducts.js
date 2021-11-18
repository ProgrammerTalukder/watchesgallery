import React from 'react';
import NavAdmin from '../../NavAdmin'
import Nav from '../../../Shared/Nav/Nav'
import AdminProductData from './AdminProductData';
import ProductFetch from '../../../Fetch/ProductFetch'
import {Link} from 'react-router-dom'
const AdminProducts = () => {
    const products = ProductFetch();
    let keys = products.length
    console.log(keys)
    console.log(products)
    return (
        <div>
            <Nav className="d-flex justify-content-start"></Nav>
            <NavAdmin></NavAdmin>
            <section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">Products</h1>
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
                            <th scope="col" class="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <AdminProductData key={product._id} product={product}></AdminProductData>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col mb-2">
            <div class="row">
                <div class="col-sm-12 col-md-12 text-right">
                    <Link to={`/admin/addproduct/${keys}`}>
                    <button class="btn btn-lg btn-block btn-success text-uppercase">Add Product</button></Link>
                    
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default AdminProducts;