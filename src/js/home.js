//#4 - Form for User's Name
//Set up modal display
let userName = document.getElementById('userName');
let adoptBtn = document.getElementById('adoptBtn');
let adoptModal = document.getElementById('adoptModal');
let closeBtn = document.getElementsByClassName('closeBtn');
let modalContent = document.getElementById('adoptSuccess');
let petName = document.getElementById('petName');
let petNameBtn = document.getElementById('petNameBtn');
let pet = "";
let imgSrc = document.getElementsByTagName('img');

// Randomly generate pet and image
//Set up each animal as a new object
const blueDolphin = new Pet("blue dolphin", "/assets/img/bluedolphin.png", "A drawing of a blue dolphin.");

const fish = new Pet("fish", "/assets/img/fish.png", "A drawing of a yellow and black-striped fish.");

const flamingo = new Pet("flamingo", "assets/img/flamingo.png", "A drawing of a pink flamingo standing on one leg.");

const pinkDolphin = new Pet("pink dolphin", "/assets/img/pinkdolphin.png", "A drawing of a pink dolphin.");

const turtle = new Pet("sea turtle", "/assets/img/turtle1.png", "A drawing of a neutral colored sea turtle.");

const monkey = new Pet("monkey", "/assets/img/monkey.png", "A drawing of a happy monkey crouching.");

const petLibrary = [blueDolphin, fish, flamingo, pinkDolphin, turtle, monkey];

let randomIndex = Math.floor(Math.random() * 6);

let userPet = petLibrary[randomIndex];

pet = userPet.animalType;
let img = userPet.imgFile;
let alt = userPet.altText;

imgSrc[0].src = img;
imgSrc[0].alt = alt;

// Add animal type to local storage to use on Game Page
localStorage.setItem('animalType', pet);
localStorage.setItem('imgFile', img);
localStorage.setItem('alt', alt);

//Set up modal actions
// Validate and capture user's name, then open next modal
adoptBtn.addEventListener('click', function() {
    let userNameInput = document.getElementById('userName').value;
    localStorage.setItem('userName', userName.value);
    if (!userNameInput) {
        window.alert('Please enter your name.');
    } else if (!checkForNumChar(userNameInput)) {
        window.alert('Please use alphabetical numbers only.');
    } else if (userNameInput.length == 1) {
        window.alert('Hmm... That looks like an initial. Please enter your full name.');
    } else if (userNameInput.length > 16) {
        window.alert('Please use 16 characters or less.');
    } else {
        modalContent.innerHTML = `Congrats, ${userNameInput}! You have adopted a ${pet}! What would you like to name them?`;
        document.getElementById('userName').value = "";
        adoptModal.style.display = "block";
        return userNameInput;
    }
});

// Add close button functionality
closeBtn[0].addEventListener('click', function() {
    adoptModal.style.display = "none";
})

// Validate and capture pet's name, then navigate user to Game page
petNameBtn.addEventListener('click', function() {
    let petNameInput = document.getElementById('petName').value;
    localStorage.setItem('petName', petNameInput);
    if (!petNameInput) {
        window.alert('Please enter a name for your pet.');
    } else if (!checkForNumChar(petNameInput)) {
        window.alert('Please use alphabetical numbers only.');
    } else if (petNameInput.length == 1) {
        window.alert("Hmm... That looks like an initial. Please enter your pet's full name.");
    } else if (petNameInput.length > 16) {
        window.alert('Please use 16 characters or less.');
    } else {
        window.location.assign('/src/html/game/index.html');
        return petNameInput;
    }
})

function checkForNumChar(input) {
    for (let i = 0; i < input.length; i++) {
        let checkNum = input.charCodeAt(i);
        if ((checkNum >= 65 && checkNum <= 90) || (checkNum >= 97 && checkNum <= 122) || (checkNum >= 45 && checkNum <= 46)) {
            { continue; }
        } else {
            return false;
        }
    } return true;
}

function Pet(animal, img, alt) {
    this.animalType = animal;
    this.imgFile = img;
    this.altText = alt;
}