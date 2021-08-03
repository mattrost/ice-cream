import React from 'react';
import Review from './Review';

function ReviewList({ reviews }) {
    if (reviews !== undefined) {
      return (
        <table id="reviews" width="500">
            <tbody>
                {reviews.map((review, i) => <Review review={review} key={i} />)}
            </tbody>
        </table>
    );
    }
}

export default ReviewList;
