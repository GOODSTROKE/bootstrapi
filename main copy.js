
let img = document.querySelector('img');

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

let form = document.quesrySelector('#Form');
let textInput = document.quesrySelector('#textInput');

form.addEventListner('submit', (event) => {
    event.preventDefault();
    let url = `https://goweather.herokuapp.com/weather/${textInput.value}`;
    console.log(encodeURI(url));
    fetch(encodeURI(url))
        .then(function(responce){
            return response.json();

         })

        .then(function(data){
            colsole.log(data)
        })




})
