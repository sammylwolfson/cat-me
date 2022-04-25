var displayEl = document.querySelector("#fav-img");
var factEl = document.querySelector("#cat-facts");
var photoModal = document.getElementById("photo-modal");
var factModal = document.querySelector('#fact-modal')
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var deleteBtn = document.querySelector('#delete-photo')
var deleteFactBtn = document.querySelector('#delete-fact');
var openFullBtn = document.querySelector("#open");
var randomPhotoFactEl = document.querySelector("#random-photo");
var favRandomButton = document.querySelector("#favorite-random");
var randomModal = document.querySelector("#random-modal");

var clearElement = function(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    };
};

function getRandomFav() {
    var favoritePhotos = JSON.parse(localStorage.getItem('savedphotos'));
    var getRandomIndex = Math.floor(Math.random() * favoritePhotos.Url.length);
    var randomPhoto = document.createElement("img");
    var favoriteFacts = JSON.parse(localStorage.getItem('savedfacts'));
    var factsIndex = Math.floor(Math.random() * favoriteFacts.Text.length);
    var randomFacts = document.createElement("p");
    randomPhoto.setAttribute("src", favoritePhotos.Url[getRandomIndex]);
    randomPhoto.setAttribute('class', 'modal-imgs cell medium-5');
    randomPhotoFactEl.appendChild(randomPhoto);
    randomFacts.setAttribute('class', 'modal-facts cell medium-5')
    randomFacts.textContent = favoriteFacts.Text[factsIndex];
    randomPhotoFactEl.appendChild(randomFacts);
    }

var notEnoughFav = function() {
    var errorMessage =document.createElement("p");
    errorMessage.textContent = " Please add at least 1 photo and 1 facts to favorites"
    randomPhotoFactEl.appendChild(errorMessage);
}

favRandomButton.addEventListener('click', function() {
    var favoritePhotos = JSON.parse(localStorage.getItem('savedphotos'))
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))


    randomModal.style.display = "block";


    if (!savedFacts || !favoritePhotos) {
        clearElement(randomPhotoFactEl);
        notEnoughFav();
    }
    else {
        clearElement(randomPhotoFactEl);
        getRandomFav();
    }

})

function getPhotos() {
    var favoritePhotos = JSON.parse(localStorage.getItem('savedphotos'))

    if (!favoritePhotos){
        return;
    } else {
        for (var i = 0; i < favoritePhotos.Url.length; i++) {
            var image = document.createElement("img");
            image.setAttribute("src", favoritePhotos.Url[i]);
            image.setAttribute('class', 'fav-imgs');
            displayEl.appendChild(image);
        }
    };
};

function getFacts() {
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))

    if(!savedFacts) {
        return;
    } else {
        for (var i = 0; i < savedFacts.Text.length; i++) {
            var factText = document.createElement("p");
            factText.setAttribute('class', 'fav-img facts primary callout')
            factText.textContent = savedFacts.Text[i];
            factEl.appendChild(factText);
        }
    };
};
getPhotos()
getFacts()

var DisplayFactModal = function(event) {
    factModal.style.display = "block";
    var currentFact = event.target.textContent
    localStorage.setItem('currentfact', JSON.stringify(currentFact))
}

var removeFact = function() {
    var savedFacts = JSON.parse(localStorage.getItem('savedfacts'))
    var currentFact = JSON.parse(localStorage.getItem('currentfact'));

    for (var i = 0; i < savedFacts.Text.length; i++) {
        if (currentFact === savedFacts.Text[i]) {
            savedFacts.Text.splice(i, 1);
        }
    }
    localStorage.setItem('savedfacts', JSON.stringify(savedFacts))
    document.location.reload();
}

var displayPhotoModal = function(event) {
    photoModal.style.display = "block";
    var imageEl = event.target.src;
    localStorage.setItem('currentimg', JSON.stringify(imageEl))
}

var removePhoto = function() {
    var savedPhotos = JSON.parse(localStorage.getItem('savedphotos'))
    var currentImg = JSON.parse(localStorage.getItem('currentimg'))

    for (var i = 0; i < savedPhotos.Url.length; i++) {
        if (currentImg === savedPhotos.Url[i]) {
            savedPhotos.Url.splice(i, 1);
        }
    }
    localStorage.setItem('savedphotos', JSON.stringify(savedPhotos))
    document.location.reload();
}

var openImg = function() {
    var currentImg = JSON.parse(localStorage.getItem('currentimg'))
    document.location = currentImg
}

displayEl.addEventListener('click', displayPhotoModal)
factEl.addEventListener('click', DisplayFactModal)
deleteBtn.addEventListener('click', removePhoto)
deleteFactBtn.addEventListener('click', removeFact)
openFullBtn.addEventListener('click', openImg)

span.onclick = function() {
    photoModal.style.display = "none";
}
span1.onclick = function() {
    console.log("fart")
    factModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == photoModal || event.target == factModal || event.target == randomModal) {
        photoModal.style.display = "none";
        factModal.style.display = "none";
        randomModal.style.display = "none";
    }
}