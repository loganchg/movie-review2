import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)


app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const CONNECTION_URL ='mongodb+srv://JAGx9:Moviereview123@cluster0.havbrtt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, () => console.log(`Server running: ${PORT}`)))
    .catch((error)=> console.log(error.message));



