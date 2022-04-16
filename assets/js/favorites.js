var displayEl = document.querySelector("#fav-img");
var factEl = document.querySelector("#cat-facts");

function getPhotos(){
var favoritePhotos = JSON.parse(localStorage.getItem('savedphotos'))

    for (var i=0; i<favoritePhotos.Url.length; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", favoritePhotos.Url[i]);
        image.setAttribute('class', 'fav-imgs')
        displayEl.appendChild(image);
    }
};

function getFacts(){
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))
        for (var i=0; i<savedFacts.Text.length; i++) {
            var factText = document.createElement("p");
            factText.setAttribute('class', 'facts')
            factText.textContent = savedFacts.Text[i];
            factEl.appendChild(factText);
        }
    };
getPhotos()
getFacts()