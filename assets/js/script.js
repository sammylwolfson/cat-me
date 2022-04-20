var generateButton = document.querySelector("#generate");
var displayEl = document.querySelector("#cat-img");
var factEl = document.querySelector("#cat-fact");
var favPhotoBtn = document.querySelector("#favorite-kitty")
var favFactBtn = document.querySelector("#favorite-fact")
var againBtn = document.querySelector("#again-btn")
var favBtn = document.querySelector("#favorites")


// fetch to pull up random dog image
var getCatImg = function (){
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
    image.setAttribute("id", "image");
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
    factText.setAttribute('id', 'fact')
    factText.textContent = fact;
    factEl.appendChild(factText);
};

// display when page is loaded
getCatImg();
getFact();


var savePhoto = function(){
    var savedPhotos = JSON.parse(localStorage.getItem('savedphotos'))

    var photoURL = document.querySelector('#image')
    photoURL = photoURL.getAttribute('src')

    if (!savedPhotos || savedPhotos === 'null') {
      savedPhotos = {
            Url: [],
        };
        var imageURL = savedPhotos.Url
        imageURL.push(photoURL)
    }
    else {
        for(var j=0; j<savedPhotos.Url.length; j++) {
            if (photoURL === savedPhotos.Url[j]) {
                console.log('this is a duplicate photo')
                return;
            }
        }
        savedPhotos.Url.push(photoURL)
    }
    localStorage.setItem('savedphotos', JSON.stringify(savedPhotos))
}

var saveFact = function(){
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))

    var factText = document.querySelector('#fact')
    factText = factText.textContent

    if (!savedFacts || savedFacts === 'null') {
      savedFacts = {
            Text: [],
        };
        savedFacts.Text.push(factText)
    }
    else {
        for(var j=0; j<savedFacts.Text.length; j++) {
            if (factText === savedFacts.Text[j]) {
                console.log('this is a duplicate fact')
                return;
            }
        }
        savedFacts.Text.push(factText)
    }
    localStorage.setItem('savedfacts', JSON.stringify(savedFacts))
}
favPhotoBtn.addEventListener('click', savePhoto)
favFactBtn.addEventListener('click', saveFact)
againBtn.addEventListener('click', function(){
    location.reload();
})
favBtn.addEventListener('click', function(){
    document.location.replace('./favorites.html')
})