import React, { useState } from 'react';
import { Rating } from '@material-ui/lab'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { createPost } from '../actions/posts'
import { useDispatch } from 'react-redux'

const Form = () => {
  const [postData, setPostData] = useState({
    username: '', brand: '', flavor: '', rating: 0.5, reviewText: ''
  })
  
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return(
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Submit New Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please enter your review:</DialogTitle>
        <DialogContent>
          <TextField
            name='username'
            label='Username'
            value={postData.username}
            onChange={(e) => setPostData ({ ... postData, username: e.target.value })}/>
          <div></div>
          <TextField
            name='brand'
            label='Brand Name'
            value={postData.brand}
            onChange={(e) => setPostData ({ ... postData, brand: e.target.value })}/>
          <div></div>
          <TextField
            name='flavor'
            label='Flavor Name'
            value={postData.flavor}
            onChange={(e) => setPostData ({ ... postData, flavor: e.target.value })}/>
          <div></div>
          <label>Rating:    </label>
          <Rating 
            name="rating" 
            size='large'
            defaultValue={0.5} 
            precision={0.5} 
            value={postData.rating}
            onChange={(e) => setPostData ({ ... postData, rating: e.target.value })}/>
          <div></div>
          <TextField
            name='reviewText'
            label='Review Description'
            value={postData.reviewText}
            onChange={(e) => setPostData ({ ... postData, reviewText: e.target.value })}/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <p></p>
    </div>
  )
} 

export default Form
