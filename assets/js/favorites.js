var displayEl = document.querySelector("#fav-img");
var factEl = document.querySelector("#cat-facts");

function getPhotos(){
var favoritePhotos = JSON.parse(localStorage.getItem('savedphotos'))

    for (var i=0; i<favoritePhotos.Url.length; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", favoritePhotos.Url[i]);
        image.setAttribute('class', 'fav-imgs');
        displayEl.appendChild(image);
    }
};

function getFacts(){
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))
        for (var i=0; i<savedFacts.Text.length; i++) {
            var factText = document.createElement("p");
            factText.setAttribute('class', 'facts primary callout')
            factText.textContent = savedFacts.Text[i];
            factEl.appendChild(factText);
        }
    };
getPhotos()
getFacts()

var removeFact = function(event) {
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))
    for (var i=0; i<savedFacts.Text.length; i++) {
        if (event.target.textContent === savedFacts.Text[i]) {
            savedFacts.Text.splice(i, 1);
        }
    }
    localStorage.setItem('savedfacts', JSON.stringify(savedFacts))
    document.location.reload();
}

var removeImg = function(event) {
    var savedPhotos = JSON.parse(localStorage.getItem('savedphotos'))
    console.log(event.target.src)
    for (var i=0; i<savedPhotos.Url.length; i++) {
        if (event.target.src === savedPhotos.Url[i]) {
            savedPhotos.Url.splice(i, 1);
        }
    }
    localStorage.setItem('savedphotos', JSON.stringify(savedPhotos))
    document.location.reload();
}

displayEl.addEventListener('click', removeImg)
factEl.addEventListener('click', removeFact)