// Get the mongoose object
import e from 'express';
import mongoose from 'mongoose';

// Prepare to the database reviews_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/reviews_db',
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

// Tell mongoose to create indexes, which help with faster querying
mongoose.set('useCreateIndex', true);

// User schema, name, age, and email are required.
const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    flavor: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
});


// Model created with Shema
const Reviews = mongoose.model("Reviews", reviewSchema);


const createReview = async (name, brand, flavor, rating, description) => {
    const review = new Reviews({ name: name, brand: brand, flavor: flavor, rating: rating, description: description});
    return review.save();
}

// Function that returns reviews that meet a query. Filter is sent from controller with the query. Filter not used yet in this app.
const findReview = async (filter, projection, limit) => {
    const query = Reviews.find(filter).sort({ _id: -1 })
        .select(projection)
        .limit(limit);
    return query.exec();
}

// Function that updates a review. _id is entered for the review to update, and the other query optionss
// are for items on that ID we would like to update.
const replaceReview = async (_id, name, brand, flavor, rating, description) => {
    const result = await Reviews.replaceOne({_id: _id}, { name: name, brand: brand, flavor: flavor, rating: rating, description: description })
    return result.nModified
}


// Delete the database item with the id.
const deleteById = async (_id) => {
    const result = await Reviews.deleteOne({ _id: _id });
    return result.deletedCount;
}

export { createReview, findReview, replaceReview, deleteById };