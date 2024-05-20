import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';
const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/todos', todosRoutes)

const mongodb = 'mongodb://localhost:27017/';
app.get('/',(req,res)=>{
    console.log('welocme to node todo app');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(mongodb).
then(()=> console.log(`server is running on the port ${PORT}`))
.catch(err => console.log(err));

app.listen(PORT);