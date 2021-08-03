import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextField, Button, Typography } from '@material-ui/core'
import info from '../info.svg'

const Help = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <IconButton onClick={handleClickOpen}> 
        <img 
          src={info}
          width="56">
        </img>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Help and Information</DialogTitle>
        <DialogContent>
          <Typography>
            Welcome to Gelato Dan's Ice Cream Emporium! This application is used to collect ratings and reviews of different ice cream varieties!
          </Typography>
          <p></p>
          <Typography>
            To create a review, click on submit new review. Once this window is opened, you will need to fill out the required inputs. These inputs are username, brand, flavor, rating (0.5 to 5 stars in 0.5 increments), and a review description. Once the review is entered, press submit and the review will be submitted to the app! 
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Help