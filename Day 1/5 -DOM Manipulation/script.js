const heading = document.querySelector('.heading');


heading.addEventListener('click' , ()=>{
    console.log("Clicked");
})

let theme = 'light'

function buttonClicked()
{
    if(theme == 'light')
    {
        body.style.backgroundColor = 'black'
        theme = 'dark';
    }
    else{
        theme = 'light';
        body.style.backgroundColor = 'white'
    }

}

console.log(heading);
// heading.innerHTML()
heading.innerHTML = 'Hey'

heading.style.backgroundColor = 'Red';


heading.addEventListener("mouseover" , ()=>{
    console.log("Mouse hovered");
})

let body = document.querySelector('body');
let button = document.querySelector('button');
console.log(body);

button.addEventListener('click' , buttonClicked);

