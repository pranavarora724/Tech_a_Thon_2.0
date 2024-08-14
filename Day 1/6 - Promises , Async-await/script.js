let response;
console.log("Connected");

async function  apiCall()
{
    const response = await fetch('https://dogapi.dog/api/v2/breeds')
    const jsonResponse = await response.json();
    console.log(response);
    console.log(jsonResponse);
}
 apiCall();
// console.log(response);