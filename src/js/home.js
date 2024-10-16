//#4 - Form for User's Name
//Set up modal display
let userName = document.getElementById('userName');
let adoptBtn = document.getElementById('adoptBtn');
let adoptModal = document.getElementById('adoptModal');
let closeBtn = document.getElementById('closeBtn');
let modalContent = document.getElementById('adoptSuccess');
let petNameBtn = document.getElementById('petNameBtn');
let pet = "";

//Set up modal actions
// Validate and capture user's name, then open next modal
adoptBtn.addEventListener('click', function() {
    let userNameInput = document.getElementById('userName').value;
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
closeBtn.addEventListener('click', function() {
    adoptModal.style.display = "none";
})

// Validate and capture pet's name, then navigate user to Game page
petNameBtn.addEventListener('click', function() {
    let petNameInput = document.getElementById('petName').value;
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