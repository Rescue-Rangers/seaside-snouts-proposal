// #4 - Form for User's Name
// Set up modal display
let userName = document.getElementById('userName');
let adoptBtn = document.getElementById('adoptBtn');
let adoptModal = document.getElementById('adoptModal');
let closeBtn = document.getElementById('closeBtn');
let modalContent = document.getElementById('modalContent');

//Set up modal actions
adoptBtn.addEventListener('click', function() {
    adoptModal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
    adoptModal.style.display = "none";
})

// let congratsMsg = document.createElement('p');
// modalContent.appendChild(congratsMsg);
