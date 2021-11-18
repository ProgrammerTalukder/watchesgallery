import * as React from 'react';
import { Link } from 'react-router-dom';


function NavAdmin(props) {
    return (
        <>
        <ul className="nav flex-column">
  <li className="nav-item">
    <Link className="nav-link active" to='/admin/dashboard'>Dashboard</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/admin/orders'>Ordres</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/admin/products'>Products</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to='/admin/users'>Users</Link>
  </li>
</ul>
        </>
    );
};

export default NavAdmin;