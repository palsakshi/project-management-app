import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
console.log(err);
})

//middleware to handle cors

app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

// middlewarw to handle json object in the request body
app.use(express.json())

app.listen(3000, ()=>{
    console.log("Server is running  on Port 3000");
})