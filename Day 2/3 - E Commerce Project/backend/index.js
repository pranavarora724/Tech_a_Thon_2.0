import express from "express";
import dotenv from 'dotenv'
import Razorpay from "razorpay";
import paymentRoute from './routes/paymentRoute.js'
import cors from 'cors'

const app= express();
dotenv.config();


app.use(express.json());

const corsOption = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOption));

app.get("/"  ,  (req,res) =>{
    return res.json({
        success:true,
        message:'App running . This is default route'
    })
})

app.use("/api/v1" , paymentRoute);


app.listen(process.env.PORT || 4000 , ()=>{
    console.log("Server Started at Port , " , process.env.PORT);
})

