import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'

function Review({ review }) {
  const titleText = `${review.brand} - ${review.flavor}`
  const rating = `${review.rating} / 5 STARS`

    return (
      <div>
        <Card>
          <CardHeader
            title={titleText}
            subheader={review.username}
          />
          <CardContent>
            <Typography>
              {rating}
            </Typography>
            <Typography>
              {review.reviewText}
            </Typography>
          </CardContent>
        </Card>
        <p></p>
      </div>
    );
}

export default Review;