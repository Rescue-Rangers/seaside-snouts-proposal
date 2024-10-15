// #4 - Form for User's Name
// Set up modal display
let userName = document.getElementById('userName');
let adoptBtn = document.getElementbyId('adoptBtn');
let adoptModal = document.getElementById('adoptModal');
let closeBtn = document.getElementById('closeBtn');
let petName = document.createElement('input');

//Set up modal actions
adoptBtn.addEventListener('click', function() {
    adoptModal.style.display = "block";
});