import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();
app.use(express.json())

app.use(cors())
app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://mattrost:xxECEKdwWFiLgGHV@cluster0.2fnkd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
