import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Typography, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import EditForm from '../components/EditForm';

function Review({ review, onDelete, onEdit }) {
    const titleText = `${review.brand} - ${review.flavor}`
    const priceSearchQuery = `${review.flavor} ${review.brand} Ice Cream`
    const brand = `${review.brand}`
    const rating = `${review.rating} / 5 STARS`
    const [summary, setSummary] = useState([]);
    const [price, setPrice] = useState();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const loadPrice = async () => {
      let URL = 'http://flip1.engr.oregonstate.edu:8403/?search=';
      let data
  
      URL = URL.concat(priceSearchQuery)
  
      const responsePrice = await fetch(URL)
      data = await responsePrice.json()

      if (data.price !== 'No results.') {
        let newPrice = await 'Estimated Retail Price: ' + String(data.price)
        setPrice(newPrice)
      }
      else {
        setPrice()
      }
    }
  
    const loadSummary = async() => {
      let URL = 'http://wikipedia-summary-scrape.herokuapp.com/';
      let data
  
      URL = URL.concat(brand)

      const responseSummary = await fetch(URL)
      data = await responseSummary.json()
      if (data.summary === undefined) {
        setSummary('No summary found on Wikipedia.')
      }
      else {
        setSummary(data.summary)
      }
    }

    useEffect(() => {
      setSummary('No summary found on Wikipedia for this brand.')
      loadPrice();
      loadSummary();
    }, []);

  
      return (
        <>
          <Card>
            <CardHeader
              title={titleText}
              subheader={review.name}
            />
            <CardContent>
              <Typography>
                {rating}
              </Typography>
              <Typography>
                {review.description}
              </Typography>
              <p></p>
              <Typography variant="subtitle2">{price}</Typography>
            </CardContent>
            <CardContent>
              <Button onClick={handleClickOpen} variant="contained" color="tertiary">Brand Information</Button>
              <> </>
              <Button variant="contained" color="tertiary" onClick={() => onDelete(review._id)}>Delete</Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Brand Information</DialogTitle>
                  <DialogContent>
                    <Typography>{summary}</Typography>
                  </DialogContent>
                  <Button onClick={handleClose}>OK</Button>
                </Dialog>
              <> </>
              <EditForm reviewToEdit={review}></EditForm>
            </CardContent>
          </Card>
          <p></p>
        </>
      );
  }

export default Review;