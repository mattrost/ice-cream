import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  brand: { type: String, required: true },
  flavor: { type: String, required: true },
  rating: { type: String, required: true },
  reviewText: { type: String, required: true }
  }
);

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;