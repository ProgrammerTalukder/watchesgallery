import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { useParams } from 'react-router'
import useAuth from './../../../../hooks/useAuth';
const AddProduct = () => {
    const [watch, setWatch] = useState({});
    let {keys} = useParams()
    console.log(keys)
    const key = 'key'
    const newKey = parseInt(keys)+1
    const newWatch = { ...watch };
    newWatch[key] = `${newKey}`
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        
        newWatch[field] = value;
        
        setWatch(newWatch);
    }
    const {isLoading} = useAuth();
    const handleAddProduct = e => {
        fetch('https://eerie-ghost-66570.herokuapp.com/watches',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watch)
        })
        .then(res => res.json())
        .then(alert('Product Added successfully'))
        e.preventDefault();
        window.location.reload();

    }
    return (
        <div>
             <Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Add Product</Typography>
                {!isLoading && 
                 <form onSubmit={handleAddProduct}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        required
                        id="standard-basic"
                        label="Product Name"
                        name="title"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        required
                        id="standard-basic"
                        label="Image Url"
                        name="img"
                        type="url"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                    required
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Price"
                        type="price"
                        name="price"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                    disabled
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="key"
                        type="key"
                        name="key"
                        value={newKey}
                        defaultValue={newKey}
                        onSubmit={handleOnBlur}
                        variant="standard" />
        <TextField
        sx={{ width: '75%', m: 1 }}
        required
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={12}
          type='description'
          variant="standard"
          name="descriptions"
          onBlur={handleOnBlur}
        />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                </form>}
                {isLoading && <CircularProgress />}
            </Grid>
        </Grid>
    </Container>
        </div>
    );
};

export default AddProduct;