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
    adoptModal.style.display = "block";
    let userNameInput = document.getElementById('userName').value;
    return userNameInput;
});


closeBtn.addEventListener('click', function() {
    adoptModal.style.display = "none";
})

modalContent.innerHTML = `Congrats! You have adopted a ${pet}! What would you like to name them?`;




// let petNameInput = document.getElementById('petName').value;


