import * as reviews from './reviews_model.mjs';
import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded( { extended: true }));
app.use(express.json());


app.post("/reviews", (req, res) => {
    reviews.createReview(req.body.name, req.body.brand, req.body.flavor, req.body.rating, req.body.description)
        .then(review => {
            res.status(201).json(review)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ Error: 'Request failed'})
        })
})

/**
 * Create a new review with the name, brand, flavor, rating, and description.
 */
app.get("/reviews", (req, res) => {
    let filter = {}
    reviews.findReview(filter, '', 0)
        .then(reviews => {
            res.status(200).json(reviews);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Request failed' });
        });
});

/**
 * Retrive reviews. 
 */
app.put('/reviews/:_id', (req, res) => {
    reviews.replaceReview(req.params._id, req.body.name, req.body.brand, req.body.flavor, req.body.rating, req.body.description)
        .then(numUpdated =>{
            if (numUpdated ===1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, brand: req.body.brand, flavor: req.body.flavor, rating: req.body.rating, description: req.body.description})
            } else {
                res.status(404).json({ Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed'})
        })
            
})
/**
 * Update the review whose _id is provided and set its parameters
 * the values provided in the query parameters
 */
app.delete('/reviews/:_id', (req, res) => {
    reviews.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: 'Request failed'})
        })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});