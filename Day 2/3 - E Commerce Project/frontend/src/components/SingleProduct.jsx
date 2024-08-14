import axios from "axios";
// import {} from '.'
async function clickHandler(price)
{
   

    const apiKeyResult = await axios(
        {
            method:'get',
            url:'http://localhost:4000/api/v1/getApiKey'
        }
    );

    console.log("API KEY RESILT"  ,apiKeyResult);
    const result = await axios(
        {
            method:'POST',
            url:'http://localhost:4000/api/v1/createOrder',
            data:{
                amount:price
            },
            params:{},
            headers:{}
        }
    )
    console.log(result);
    console.log(apiKeyResult);
    console.log(window.Razorpay);

    var options = {
        key: `${apiKeyResult?.data?.apiKey}`, // Enter the Key ID generated from the Dashboard
        amount: `${result?.data?.body?.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
       image: "https://media.licdn.com/dms/image/D4D0BAQHgVSM15nMWGA/company-logo_200_200/0/1697309323010?e=2147483647&v=beta&t=l8QLEEZUfQJM6qp5RH20Jl3PM8Cz7lHmMNjWX8In5fg",
        order_id: `${result?.data?.body?.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // callback_url: "http://localhost:4000/api/v1/verifyPayment",
        // redirect:true,
        handler: function (response){
            
            console.log("Handler resp = " , response);
            console.log(response);
            axios.post('http://localhost:4000/api/v1/verifyPayment' , {
                razorpay_payment_id:response.razorpay_payment_id,
                razorpay_order_id:response.razorpay_order_id,
                razorpay_signature:response.razorpay_signature

                
            })
            },
        prefill: {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };

    var rzp1 = window.Razorpay(options);
    rzp1.open();

}

function SingleProduct({element})
{
    return (
        <div className="w-[400px] flex flex-col m-2">
            <div>
                <img className="w-full h-[300px] object-cover object-top" src={`${element.image}`}></img>
            </div>
            <div className="mt-2 font-semibold text-black">{element?.name}</div>
            <div className="mt-2 text-gray-600">{element.company}</div>
            <div className="flex flex-row justify-between mt-4 px-4">
                <div className="text-green-600 font-semibold text-2xl ">₹ {element.price}</div>
                <div onClick={()=>{clickHandler(element?.price)}} className="bg-blue-500 text-white p-2 px-4 rounded-xl cursor-pointer">Buy Now</div>
            </div>
        </div>
    )
}

export default SingleProduct;