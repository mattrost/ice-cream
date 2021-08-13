import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Bar from '../components/Bar';
import Form from '../components/Form'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Container } from 'material-ui-core'

function HomePage({ setReviewToEdit }) {
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/reviews/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setReviews(reviews.filter(m => m._id !== _id).reverse());
            window.location.reload()
        } else {
            console.error(`Failed to delete review with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = review => {
        setReviewToEdit(review);
        history.push("/edit-review");
    }

    const loadReviews = async () => {
        const response = await fetch('/reviews');
        const data = await response.json();
        setReviews(data);
    }

    useEffect(() => {
        loadReviews();
    }, []);

    return (
        <Box width={500}>
            <Bar pageName={'Home Page'}></Bar>
            <h6>__________________________</h6>
            <h1>Gelato Dan's Ice Cream Emporium</h1>
            <Container>
            <Form></Form>
            </Container>
            <Reviews reviews={reviews} onDelete={onDelete} onEdit={onEdit}></Reviews>
        </Box>
      );
}

export default HomePage;