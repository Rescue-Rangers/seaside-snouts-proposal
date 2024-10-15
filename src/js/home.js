// #4 - Form for User's Name

let userName = document.getElementById('userName');
let adoptBtn = document.getElementsByTagName('button');
let adoptModal = document.getElementById('adoptModal');

adoptBtn.addEventListener('click', function() {
    adoptModal.style.display = "block";
})