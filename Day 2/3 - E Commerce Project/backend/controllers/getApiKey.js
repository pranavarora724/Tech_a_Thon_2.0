import dotenv from'dotenv'

dotenv.config();

export function getApiKey(req , res)
{
    return(
        res.status(200).json(
            {
                success:true,
                apiKey:process.env.RAZORPAY_KEY
            }
        )
    )
}