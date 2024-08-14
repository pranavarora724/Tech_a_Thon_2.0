import mongoose from "mongoose";

export function connectDatabase()
{
    console.log('mongo url - ' , process.env.MONGODB_URL)
    mongoose.connect(`${process.env.MONGODB_URL}`, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}