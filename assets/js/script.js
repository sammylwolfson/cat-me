var generateButton = document.querySelector("#generate");
var displayEl = document.querySelector("#dog-img");
var jokeEl = document.querySelector("#joke");

// fetch to pull up random dog image
var getDogImg = function (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response){
            response.json().then(function(data){
                var imgLink = data.message;
                displayImage(imgLink);
             });
        });
};

// display image to page
var displayImage = function(link) {
    var image = document.createElement("img");
    image.setAttribute("src", link);
    displayEl.appendChild(image);
};

// fetch to get random joke
var getJoke = function(){
    fetch("http://api.icndb.com/jokes/random")
        .then(function(response){
            response.json().then(function(data){
                var jokeContent = data.value.joke;
                displayJoke(jokeContent);
            });
        });
};

// display joke to page
var displayJoke = function(joke){
    var jokeText = document.createElement("p");
    jokeText.textContent = joke;
    jokeEl.appendChild(jokeText);
};

// display when page is loaded
getDogImg();
getJoke();