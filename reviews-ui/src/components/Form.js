import React, { useState } from 'react';
import { Rating } from '@material-ui/lab'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [flavor, setFlavor] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setName('');
    setBrand('');
    setFlavor('');
    setRating(0.5);
    setDescription('')
  }

  const handleSubmit = async (e) => {
    const newReview = { name, brand, flavor, rating, description };
    const response = await fetch('/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 201) {
        alert("Successfully added the review");
        window.location.reload()
    } else {
        alert(`Failed to add review, status code = ${response.status}`);
    };
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
            name='name'
            label='Name'
            value={name}
            onChange={e => setName(e.target.value)}/>
          <div></div>
          <TextField
            name='brand'
            label='Brand Name'
            value={brand}
            onChange={e => setBrand(e.target.value)}/>
          <div></div>
          <TextField
            name='flavor'
            label='Flavor Name'
            value={flavor}
            onChange={e => setFlavor(e.target.value)}/>
          <div></div>
          <label>Rating:    </label>
          <Rating 
            name="rating" 
            size='large'
            defaultValue={0.5} 
            precision={0.5} 
            value={rating}
            onChange={e => setRating(e.target.value)}/>
          <div></div>
          <TextField
            name='reviewText'
            label='Review Description'
            value={description}
            onChange={e => setDescription(e.target.value)}/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <p></p>
    </div>
  )
} 

export default Form
