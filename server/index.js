import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const mongodb = "mongodb://localhost:27017/shop?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
app.get('/', (req, res) => {
    res.send('<p>Hola</p>')
})
const PORT = process.env.PORT || 5001;
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log(`server is running on port ${PORT}`)).catch(err => console.log(err))
