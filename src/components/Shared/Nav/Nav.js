import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"
import './Nav.css'
const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const {user,logout,adminUser} = useAuth();
    return (

<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-around">
    <Link className="navbar-brand" to="/">Watch Gallery</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"  to="/watches">Watches</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myCart">My Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/order">My Orders</Link>
        </li>

        {
          user?.email ?
          <li onClick={logout} className="nav-item"><Link to="/" className="nav-link">LogOut</Link></li>
        :
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        }
        {adminUser?.role === 'admin' && <li>
        <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/adminpanel'><MenuItem onClick={handleClose}>Admin Panel</MenuItem></Link>
      </Menu></li>}
        
      </ul>
    </div>
  </div>
</nav>

    </>
    
    );
};

export default Nav;