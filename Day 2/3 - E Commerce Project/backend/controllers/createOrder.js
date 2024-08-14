import {instance} from '../config/razorpay.js'

export async function createOrder(req , res)
{
    try {

      if(!req.body.amount)
      {
        return(
          res.status(400).json(
            {
              success:false,
            message:'Amount is required'
            }
          )
        )
      }

      var options = {
        amount: Number(req.body.amount)*100,  // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
      };
      
      const order = await instance.orders.create(options);

      return (res.status(200).json(
        {
            success:true,
            body:order
        }
      ) )
      
    } catch (error) {
      return (res.status(400).json(
        {
          success:false,
          message:'Error while creating order',
          error:error
        }
      ))
    }
}