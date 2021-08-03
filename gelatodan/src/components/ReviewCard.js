import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'


function ReviewCard({ review }) {

  return(
    <Card>
      <CardHeader
        title="Flavor - Brand"
        subheader="User"
      />
      <CardContent>
        <Typography>
          Star rating!!!
        </Typography>
        <Typography>
          Review Description!!
        </Typography>
      </CardContent>
    </Card>
  )
} 
// https://material-ui.com/components/cards/

export default ReviewCard