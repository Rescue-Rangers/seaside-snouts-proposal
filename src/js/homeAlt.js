let areYouSure = document.getElementById('areYouSure');
let closeBtn = document.getElementsByClassName('closeBtn');
let modalContent = document.getElementById('modalContent');
let imgSrc = document.getElementsByTagName('img');
let welcomeH2 = document.getElementsByTagName('h2');
let textH3 = document.getElementsByTagName('h3');
let cancelBtn = document.getElementById('cancelBtn');
let abandonBtn = document.getElementById('abandonBtn');
let abandonPet = document.getElementById('abandonPet');
let returnToPet = document.getElementById('returnToPet');
let modalBackground = document.getElementById('modalBackground');
let confirmAbandon = document.getElementById('confirmAbandon');

let pet = localStorage.getItem('animalType');
let petName = localStorage.getItem('petName');
let userName = localStorage.getItem('userName');
let imgFile = localStorage.getItem('imgFile');
let alt = localStorage.getItem('alt');

// Plug existing data into text
welcomeH2[0].innerHTML = `Hi, ${userName}! Welcome back!`;
textH3[0].innerHTML = `${petName} has missed you and your underwater adventure! You have the option to continue your journey of marine rescue and reconnect with ${petName}, or if you're ready to say goodbye, you can choose to abandon your pet.`;
returnToPet.innerHTML = `Return to ${petName}`;
abandonPet.innerHTML = `Abandon ${petName}`;
confirmAbandon.innerHTML = `Are you sure? ${petName} will absolutely not survive without you. This cannot be undone!`
imgSrc[0].src = imgFile;
imgSrc[0].alt = alt;


// Set up Are You Sure modal

abandonPet.addEventListener('click', function() {
    areYouSure.style.display = "block";
    modalBackground.style.display = "initial";
    console.log('please appear');
})

closeBtn[0].addEventListener('click', function() {
    areYouSure.style.display = "none";
    modalBackground.style.display = "none";
})

cancelBtn.addEventListener('click', function() {
    areYouSure.style.display = "none";
    modalBackground.style.display = "none";
})

// Redirect user to Home Page to start over if abandoning their current pet

abandonBtn.addEventListener('click', function() {
    window.location.assign('../../../../index.html');
})

// Redirect user to Game Page if they want to return to their current pet 

returnToPet.addEventListener('click', function() {
    window.location.assign('/src/html/game/index.html');
})

