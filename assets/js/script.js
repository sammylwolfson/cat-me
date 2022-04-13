var generateButton = document.querySelector("#generate");
var displayEl = document.querySelector("#dog-img");
var factEl = document.querySelector("#joke");

// fetch to pull up random dog image
var getDogImg = function (){
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function(response){
            response.json().then(function(data){
                var imgLink = data[0].url;
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

// fetch to get random fact
var getFact = function(){
    fetch("https://catfact.ninja/fact")
        .then(function(response){
            response.json().then(function(data){
                var factContent = data.fact;
                displayFact(factContent);
            });
        });
};

// display fact to page
var displayFact = function(fact){
    var factText = document.createElement("p");
    factText.textContent = fact;
    factEl.appendChild(factText);
};

// display when page is loaded
getDogImg();
getFact();