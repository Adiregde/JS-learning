
import express from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user",router);

mongoose.connect(
    'mongodb+srv://admin:eJ0RQThBBFyae1P7@cluster0.efqzxei.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>app.listen(3000))
.then(()=>
console.log('Connected to the databasse and listening to lcalhost 3000'))
.catch((err)=>console.log(err));

// password eJ0RQThBBFyae1P7
