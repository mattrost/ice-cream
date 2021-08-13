import React from 'react';
import Review from './Review';

function Reviews({ reviews, onDelete, onEdit }) {
    return (
        <p>
            {reviews.map((review, i) => <Review review={review}
                onDelete={onDelete}
                onEdit={onEdit}
                key={i} />)}
        </p>
    );
}

export default Reviews;