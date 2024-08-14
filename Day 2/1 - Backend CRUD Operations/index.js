import express from "express";
import { connectDatabase } from "./config/database.js";
import router from "./routes/studentRoutes.js";
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();



const app = express();
connectDatabase();
app.use(express.json());


const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));


app.use('/api/v1' , router)


app.listen(process.env.PORT , ()=>{
    console.log("Server started at port 4000");
})
