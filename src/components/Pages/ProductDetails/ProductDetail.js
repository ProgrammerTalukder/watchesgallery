import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetail.css'
import Nav from '../../Shared/Nav/Nav'
import useAuth from "../../../hooks/useAuth"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReviewCard from './ReviewCard';
const ProductDetail = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [watch,setWatch] = useState([]);
    const {key}=useParams();
    const {user, adminUser}=useAuth();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 500);
  },[])
    useEffect(() => {
        fetch(`https://eerie-ghost-66570.herokuapp.com/watches/key?key=${key}`)
        .then(res=>res.json())
        .then(data=>setWatch(data))
        
    },[key])
    const email=user.email
    watch.email=email;
    delete watch._id;
    const handleCart= () =>{
        fetch('https://eerie-ghost-66570.herokuapp.com/cart',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watch)
        })
        .then(res => res.json())
        .then(alert('Product Added successfully'))
    }
    const [reviews,setReviews] = useState([])
    useEffect(() =>{
      fetch(`https://eerie-ghost-66570.herokuapp.com/reviews/${key}`)
      .then(res => res.json())
      .then(data => setReviews(data))
    },[key])
    console.log(reviews)
    const [comment, setComment] = useState([]);
    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newComment = { ...comment };
      newComment[field] = value;
      setComment(newComment);
  }
    const handleSubmit = () => {
      comment.key=watch.key
      comment.title=watch.title
      comment.email=user.email
      comment.name = adminUser.displayName
      fetch('https://eerie-ghost-66570.herokuapp.com/reviews',
      {method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(comment)})
      handleClose()
      alert('Added Successfully')
      window.location.reload();
    }
    
    console.log(watch)
    const title = watch.title;

    return (
    <div className='row'>
<div>{loading?     <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>:<div></div> }</div>
    <Nav></Nav>

<div className='full col-md-8 align-middle justify-content-center align-items-center col-sm-12 d-flex container'>
<div className="wrapper row ">
    <div className="product-img col-md-6 col-sm-12">
      <img src={watch.img} alt='' height="420" width="327"/>
    </div>
    <div className="product-info col-md-6 col-sm-12">
      <div className="product-text">
        <h1>{title}</h1>
        <h2>by WATCH GALLERY</h2>
        <p>{watch.descriptions} </p>
      </div>
      <p className='taka'>৳<span>{watch.price}</span></p>
      <div className="product-price-btn">
        <div>
        <button type="button" onClick={handleCart}>Add To Cart</button></div>
        <br/>
        <div>
      <Button variant="outlined" className='mb-3' onClick={handleClickOpen}>
        Add Review
      </Button>
      <br/>
      <Dialog open={open} sx={{ width: '100%' }} onClose={handleClose}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent sx={{ width: '600px', height:'75%' }}>
          <DialogContentText>
            Write A review for This Product
          </DialogContentText>
          <TextField
            inputProps={{
              maxLength: 200
            }}
          id="filled-multiline-flexible"
          sx={{ width: '100%' }}
          label="Review"
          multiline
          name="review"
          maxRows={8}
          placeholder="Max 200 Characters"
          // value={value}
          onBlur={handleOnBlur}
          variant="filled"
        />
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={handleSubmit} >Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
    </div>

  </div>
  
  </div>
  <div className="row w-100 ">
    <h3>Reviews</h3>
    <div className="full col-md-12 align-middle justify-content-center align-items-center col-sm-12 d-flex container">
    {
      !reviews.length === 0 &&  <h4>No Revies Yet</h4>}
      { !reviews.length >0 &&
      reviews.map(review =><ReviewCard 
        key={review._id}
        review={review}></ReviewCard>)
    }
    </div>

    </div>
</div>
    );
};

export default ProductDetail;