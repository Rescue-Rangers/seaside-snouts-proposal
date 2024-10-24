let areYouSure = document.getElementById('areYouSure');
let closeBtn = document.getElementsByClassName('closeBtn');
let modalContent = document.getElementById('modalContent');
let imgSrc = document.getElementsByTagName('img');
let welcomeH2 = document.getElementsByTagName('h2');
let textH3 = document.getElementsByTagName('h3');
let cancelBtn = document.getElementById('cancelBtn');
let abandonBtn = document.getElementById('abandonBtn');

let pet = localStorage.getItem('animalType');
let petName = localStorage.getItem('petName');
let userName = localStorage.getItem('userName');
let imgFile = localStorage.getItem('imgFile');
let alt = localStorage.getItem('alt');

// Plug existing data into text
welcomeH2[0].innerHTML = `Hi, ${userName}! Welcome back!`;
textH3[0].innerHTML = `${petName} has missed you and your underwater adventure! You have the option to continue your journey of marine rescue and reconnect with ${petName}, or if you're ready to say goodbye, you can choose to abandon your pet.`;

imgSrc[0].src = imgFile;
imgSrc[0].alt = alt;
imgSrc[1].src = imgFile;
imgSrc[1].alt = alt;