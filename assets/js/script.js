var displayEl = document.querySelector("#dogImg");

var getDogImg = function (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response){
            response.json().then(function(data){
                var imgLink = data.message
                displayImage(imgLink);
             });
        });
};

var displayImage = function(link) {
    var image = document.createElement("img");
    image.setAttribute("src", link);
    displayEl.appendChild(image);
};

getDogImg();


