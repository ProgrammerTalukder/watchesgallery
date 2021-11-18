import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router'
import { Container, Typography, TextField, Button } from '@mui/material';
import { Grid } from '@mui/material';
import useAuth from './../../../hooks/useAuth';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Nav from '../../Shared/Nav/Nav'
import Footer from '../../Shared/Footer/Footer';
const Shipping = () => {
    const [watch, setWatch] = useState([])
    const history = useHistory()
    const [added, setAdded]=useState([])
    const [shipping,setShipping] = useState({});
    const {key, _id} = useParams();
    const ordered = "ordered";
    const {user, isLoading} = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newShippingData = { ...shipping };
        newShippingData[field] = value;
        setShipping(newShippingData);
    }
    useEffect(() => {
        fetch(`https://eerie-ghost-66570.herokuapp.com/watches/key?key=${key}`)
        .then(res=>res.json())
        .then(data=>setWatch(data))
        
    },[key])
    const handleShipping = () => {
        const url = `https://eerie-ghost-66570.herokuapp.com/cart/${_id}`;
        fetch(url,
        {method: 'DELETE'})
        .then(res =>res.json())
        shipping.user = user.email
        shipping.product = watch.title
        shipping.key = watch.key
        shipping.price = watch.price
        shipping.status = ordered
        fetch('https://eerie-ghost-66570.herokuapp.com/order',
        {method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(shipping)}
        )
        .then(res=>res.json())
        .then(data=>setAdded(data))
        history.push('/order');
        
    }
    console.log(added)
    return (
        <div>
            <Nav></Nav>
            <Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Shipping Details</Typography>
                {!isLoading && 
                 <form onSubmit={handleShipping}>
                         <TextField
                         sx={{ width: '75%', m: 1 }}
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue={user.email}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                        />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-required"
                        label="Address"
                        name="adress"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-required"
                        label="City"
                        name="city"
                        type=""
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-required"
                        label="Number"
                        type=""
                        name="number"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <FormControl component="fieldset">
      <FormLabel component="legend">Payment</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="online" name="payment" onClick={handleOnBlur} control={<Radio />} label="Online Payment" />
        <FormControlLabel value="pod" name="payment" onClick={handleOnBlur} control={<Radio />} label="Payment On Delivery" />
      </RadioGroup>
    </FormControl>
<Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Confirm Order</Button>
                    </form>}
                    </Grid>
                    </Grid>
                    </Container>
                    <Footer></Footer>
        </div>
    );
};

export default Shipping;