import React, { useEffect, useState } from 'react';
import Form from '../components/Form'
import { Box, Container } from '@material-ui/core'
import Bar from '../components/Bar'
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts'
import ReviewList from '../components/ReviewList'


function HomePage() {  
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  const loadReviews = async() => {
    try {
      const data = await dispatch(getPosts());
      console.log(data)
      return setReviews(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    loadReviews();
}, []);


  return (
    <Box width={500}>
      <Bar pageName={'Home Page'}></Bar>
      <p>__________________________</p>
      <h1>Gelato Dan's Ice Cream Emporium</h1>
      <Container>
        <Form></Form>
      </Container>
      <ReviewList reviews={reviews.reverse()}></ReviewList>
    </Box>
    );
}

export default HomePage