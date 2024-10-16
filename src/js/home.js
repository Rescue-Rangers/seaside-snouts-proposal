// #4 - Form for User's Name
// Set up modal display
let userName = document.getElementById('userName');
let adoptBtn = document.getElementById('adoptBtn');
let adoptModal = document.getElementById('adoptModal');
let closeBtn = document.getElementById('closeBtn');
let modalContent = document.getElementById('adoptSuccess');
let pet = "";

//Set up modal actions
adoptBtn.addEventListener('click', function() {
    let userNameInput = document.getElementById('userName').value;
    if (!isNaN(userNameInput) || userNameInput.length <= 1) {
        window.alert('Invalid name');
    } else {
        modalContent.innerHTML = `Congrats, ${userNameInput}! You have adopted a ${pet}! What would you like to name them?`;
        adoptModal.style.display = "block";
    }
});


closeBtn.addEventListener('click', function() {
    adoptModal.style.display = "none";
})





// let petNameInput = document.getElementById('petName').value;


