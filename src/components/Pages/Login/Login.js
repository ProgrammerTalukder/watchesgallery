import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Nav from '../../Shared/Nav/Nav';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email,loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
        <Nav></Nav>
        <Container>
            
            <Grid 
            sx={{mt:8}}
            container spacing={2}>
  <Grid item xs={12} md={12}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width:'75%', m:2}}
          
          name="email"
          onChange={handleOnChange}
          id="standard-basic" label="Your Email" variant="standard"></TextField>
          <TextField sx={{width:'75%', m:2}} id="standard-basic"
          
          name="password"
          onChange={handleOnChange} label="Your Password"type="password" variant="standard"></TextField>
          <Button className="btn-warning"sx={{width:'75%', m:2}} type="submit" variant="contained">Login</Button>
          <br/>
          <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
      </form>
  </Grid>
</Grid>
        </Container>
        </>

    );
};

export default Login;