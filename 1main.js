
let img= document.querySelector('img');

console.log(1)
fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(responce){

        console.log(2)
        return responce.json()

    })
    .then(function(data){
        console.log(data);

        console.log(data.message);

        console.log(data.message);
console.log(3)
        img.src = data.message;


    })

    console.log(4)



//// PART 2 - WEATHER MAN ////

let weather = document.quesrySelector('#weatherForm');
let cityInput = document.quesrySelector('#cityInput');
let submitButton = document.querySelector('#submit');
let temp = document.querySelector('#temp')
let wind = document.querySelector('#temp')
let desc = document.querySelector('#desc')


weatherForm.addEventListener('submit', (event) =>
{
    event.precentDefault();
    console.log(`input: ${cityInput.value}`)
    fetch(encodeURI('https://goweather.herokuapp.com/weather/{city}'))

    .then(function(data){
        console.log(data);
        temp.innerHTML = data.temperature
        wind.innerHTML = data.wind
        desc.innerHTML = data.tempedescriptionrature
    })

cityInput.value = ""









})