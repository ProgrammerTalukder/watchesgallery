import React, { useEffect, useState } from 'react';
import NavAdmin from '../../NavAdmin'
import Nav from '../../../Shared/Nav/Nav'
import AdminUserData from './AdminUserData';
const AdminUser = () => {
    const [users, setUsers]=useState([])
    useEffect(() =>{
        fetch('https://eerie-ghost-66570.herokuapp.com/admin/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users)
    return (
        <div>
            <Nav></Nav>
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
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <AdminUserData key={user._id} user={user}></AdminUserData>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default AdminUser;