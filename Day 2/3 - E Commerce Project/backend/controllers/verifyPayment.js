import crypto from 'crypto'

export function verifyPayment(req, res)
{
    console.log("Veridying payment");
    console.log(req.body);
    const {razorpay_payment_id , razorpay_order_id , razorpay_signature} = req.body;
    // console.log(req.body.)
    console.log("Payment id = ",razorpay_payment_id);
    console.log("Order id = ",razorpay_order_id);
    console.log("Payment Signature = ",razorpay_signature);

    // generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, process.env.RAZORPAY_SECRET);
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    // var hash = crypto.createHash('sha256').update(body).digest('hex');
    var generatedSignature = crypto
    .createHmac(
      "SHA256",
      process.env.RAZORPAY_SECRET
    )
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");  


    console.log("Generated Sinature" , generatedSignature);
    console.log("Razorpay Signature" , razorpay_signature);

    return res.status(200).json(
        {
            success:true,
            // body:res.body
        }
    )
}