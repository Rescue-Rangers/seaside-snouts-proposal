// IDs for dom methods
let hungerNum = document.getElementById("hun-num");
let hygieneNum = document.getElementById("hyg-num");
let happinessNum = document.getElementById("hap-num");
let hungerNum2 = document.getElementById("hun-num-two");
let hygieneNum2 = document.getElementById("hyg-num-two");
let happinessNum2 = document.getElementById("hap-num-two");
let fullHungerNum = document.getElementById("full-hun-num");
let fullHygieneNum = document.getElementById("full-hyg-num");
let fullHappinessNum = document.getElementById("full-hap-num");
let fullHungerNum2 = document.getElementById("full-hun-num2");
let fullHygieneNum2 = document.getElementById("full-hyg-num2");
let fullHappinessNum2 = document.getElementById("full-hap-num2");  
let petNameH2 = document.getElementById("petName");
let death = document.getElementById("death-container");
let deathP = document.getElementById("name-pet-name");
let deathSendOff = document.getElementById("pet-sendoff");
let rehab = document.getElementById("rehab-container");
let rehabP = document.getElementById("congrats-names");
let rehabSendOff = document.getElementById("pet-rehab");
let petImagePlace = document.getElementById("main-pet-image");
let rehabImagePlace = document.getElementById("rehab-pet-image");
let modalButton = document.getElementById("modal-btn");

// Status colors
let statusGreen = "#4ba400";
let statusOrange = "#d77900";
let statusRed = "#ff3131";

// Plug in data from Home Page
let animalType = localStorage.getItem('animalType');
let userName = localStorage.getItem('userName');
let petName = localStorage.getItem('petName');
let petImage = localStorage.getItem('imgFile');
let petImageAlt = localStorage.getItem('alt');
petNameH2.innerHTML = petName;
petImagePlace.src = petImage;
petImagePlace.alt = petImageAlt;
rehabImagePlace.src = petImage;
rehabImagePlace.alt = petImageAlt;
// Prompt libraries

// feed prompts


const feedPrompts= [
    `${petName} thought the food was just ok.`,
    `${petName} thought the food could use more seasoning.`,
    `${petName} thought the food was pretty decent.`,
    `${petName} thought the meal was satisfying.`,
    `${petName} thought the meal was really yummy!`,
    `${petName} thought the meal was delicious!`
]

// bathe prompts
const bathePrompts= [
    "The water is pretty cold today.",
    "Oops! Looks like you missed a spot!",
    `${petName} played with their rubber ducky while bathing.`,
    `${petName} splashes you with joy.`,
    "I feel so clean!",
    "Bathing is my favorite!"
]

// pet prompts
const petPrompts= [
    "I love warm snuggles.",
    "Thank you for the rubs!",
    "I'm so lucky to have a friend like you!",
    "Wow! I feel so loved!",
    "That made me feel so happy!",
    `Aw thanks, ${userName}! You're the best!`
]

// play prompts
const playPrompts= [
    `${petName} spun in lots of circles until they got dizzy!`,
    `${petName} enjoyed swimming backwards!`,
    `${petName} loved playing by the coral!`,
    `${petName} made lots of bubbles!`,
    `${petName} loved exploring the hidden cave.`,
    `${petName} found treasure during their adventure!`
]
// Generate random prompt
function randomPrompt(prompt) {
    let index = Math.floor(Math.random() * 6);
    return prompt[index];
}
console.log(randomPrompt(playPrompts))

const eventText = document.getElementById("event-text")
// Replace event area with generated text
function promptEvent(message) {
    eventText.textContent = message;
}
// click to increase hunger + happiness and decrease hygeine with feed button
//status color function run upon click
document.getElementById("feed-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(feedPrompts))
    let randomAdd = Math.floor((Math.random() * 3) + 1);
    let currentNum = +hungerNum.textContent;
    if (currentNum < 10) {
        currentNum += randomAdd;
        currentNum = Math.min(currentNum, 10);
        hungerNum.textContent = currentNum;
        hungerNum2.textContent = currentNum;
    }
    let currentNum2 = +happinessNum.textContent;
    let randomHappAdd = Math.floor((Math.random() * 3));
    if (currentNum2 < 10) {
        currentNum2 += randomHappAdd;
        currentNum2 = Math.min(currentNum2, 10);
        happinessNum.textContent = currentNum2;
        happinessNum2.textContent = currentNum2;
    }
    let currentNum3 = +hygieneNum.textContent;
    let randomHygSub = Math.floor((Math.random() * 2));
    if (currentNum3 > 0) {
        currentNum3 -= randomHygSub;
        currentNum3 = Math.max(currentNum3, 0);
        hygieneNum.textContent = currentNum3;
        hygieneNum2.textContent = currentNum3;
    }
    if(currentNum) {
        colorChange();
    }
}

)
// click to increase hygiene and happiness with bathe button
//status color function run upon click
document.getElementById("bathe-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(bathePrompts))
    let randomAdd = Math.floor((Math.random() * 3) + 1);
    let currentNum = +hygieneNum.textContent;
    if (currentNum < 10) {
        currentNum += randomAdd;
        currentNum = Math.min(currentNum, 10);
        hygieneNum.textContent = currentNum;
        hygieneNum2.textContent = currentNum;
    }
    let currentNum2 = +happinessNum.textContent;
    let randomHappAdd = Math.floor((Math.random() * 3));
    if (currentNum2 < 10) {
        currentNum2 += randomHappAdd;
        currentNum2 = Math.min(currentNum2, 10);
        happinessNum.textContent = currentNum2;
        happinessNum2.textContent = currentNum2;
    }
    if(currentNum) {
        colorChange();
    }
}
)
// click to increase happiness with pet button
//status color function run upon click
document.getElementById("pet-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(petPrompts))
    let randomAdd = Math.floor((Math.random() * 2) + 1);
    let currentNum = +happinessNum.textContent;
    if (currentNum < 10) {
        currentNum += randomAdd;
        currentNum = Math.min(currentNum, 10);
        happinessNum.textContent = currentNum;
        happinessNum2.textContent = currentNum;
    }
    if(currentNum) {
        colorChange();
    }
}
)
// click to increase happiness and decrease hunger and hygiene with play button
//status color function run upon click
document.getElementById("play-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(playPrompts))
    let randomAdd = Math.floor((Math.random() * 3) + 1);
    let currentNum = +happinessNum.textContent;
    if (currentNum < 10) {
        currentNum += randomAdd;
        currentNum = Math.min(currentNum, 10);
        happinessNum.textContent = currentNum;
        happinessNum2.textContent = currentNum;
    }
    let currentNum2 = +hungerNum.textContent;
    let randomHunSub = Math.floor((Math.random() * 2));
    if (currentNum2 > 0) {
        currentNum2 -= randomHunSub;
        currentNum2 = Math.max(currentNum2, 0);
        hungerNum.textContent = currentNum2;
        hungerNum2.textContent = currentNum2;
    }
    let currentNum3 = +hygieneNum.textContent;
    let randomHygSub = Math.floor((Math.random() * 3));
    if (currentNum3 > 0) {
        currentNum3 -= randomHygSub;
        currentNum3 = Math.max(currentNum3, 0);
        hygieneNum.textContent = currentNum3;
        hygieneNum2.textContent = currentNum3;
    }
    if(currentNum) {
        colorChange();
    }
}
)
// Decrease Intervals
setInterval(decreaseHunger, 3000);

function decreaseHunger() {
    let currentNum = +hungerNum.textContent;
    if (currentNum > 0) {
        hungerNum.textContent = currentNum - 1;
        hungerNum2.textContent = currentNum - 1;
    }
    if(currentNum) {
        colorChange();
    }
}
setInterval(decreaseHygiene, 3000);
function decreaseHygiene() {
    let currentNum = +hygieneNum.textContent;
    if (currentNum > 0) {
        hygieneNum.textContent = currentNum - 1;
        hygieneNum2.textContent = currentNum - 1;
    }
    if(currentNum) {
        colorChange();
    }
}
setInterval(decreaseHappiness, 3000);
function decreaseHappiness() {
    let currentNum = +happinessNum.textContent;
    if (currentNum > 0) {
        happinessNum.textContent = currentNum - 1;
        happinessNum2.textContent = currentNum - 1;
    }
    if(currentNum) {
        colorChange();
    }
}

//change the colors of the numbers based on stat
// green when 8-10, orange when 5-7, red when 0-4
//need to do for both full numbers and responsive numbers
function colorChange() {
    let currentNum = +hungerNum.textContent;
    if (currentNum >= 8) {
        fullHungerNum.style.color = statusGreen;
        hungerNum.style.color = statusGreen;
        hungerNum2.style.color = statusGreen;
        fullHungerNum2.style.color = statusGreen;
    } else if ((currentNum < 8) && (currentNum > 4)) {
        fullHungerNum.style.color = statusOrange;
        hungerNum.style.color = statusOrange;
        hungerNum2.style.color = statusOrange;
        fullHungerNum2.style.color = statusOrange;
    } else if ((currentNum <= 4) && (currentNum >= 0)) { 
        fullHungerNum.style.color = statusRed;
        hungerNum.style.color = statusRed;
        hungerNum2.style.color = statusRed;
        fullHungerNum2.style.color = statusRed;
    }
    let currentNum2 = +hygieneNum.textContent;
    if (currentNum2 >= 8) {
        fullHygieneNum.style.color = statusGreen;
        hygieneNum.style.color = statusGreen;
        hygieneNum2.style.color = statusGreen;
        fullHygieneNum2.style.color = statusGreen;
    } else if ((currentNum2 < 8) && (currentNum2 > 4)) {
        fullHygieneNum.style.color = statusOrange;
        hygieneNum.style.color = statusOrange;
        hygieneNum2.style.color = statusOrange;
        fullHygieneNum2.style.color = statusOrange;
    } else if ((currentNum2 <= 4) && (currentNum2 >= 0)) { 
        fullHygieneNum.style.color = statusRed;
        hygieneNum.style.color = statusRed;
        hygieneNum2.style.color = statusRed;
        fullHygieneNum2.style.color = statusRed;
    }
    let currentNum3 = +happinessNum.textContent;
    if (currentNum3 >= 8) {
        fullHappinessNum.style.color = statusGreen;
        happinessNum.style.color = statusGreen;
        happinessNum2.style.color = statusGreen;
        fullHappinessNum2.style.color = statusGreen;
    } else if ((currentNum3 < 8) && (currentNum3 > 4)) {
        fullHappinessNum.style.color = statusOrange;
        happinessNum.style.color = statusOrange;
        happinessNum2.style.color = statusOrange;
        fullHappinessNum2.style.color = statusOrange;
    } else if ((currentNum3 <= 4) && (currentNum3 >= 0)) { 
        fullHappinessNum.style.color = statusRed;
        happinessNum.style.color = statusRed;
        happinessNum2.style.color = statusRed;
        fullHappinessNum2.style.color = statusRed;
    }

}


// Health score and bar
// Health should go down any time a stat is at 0:
// 1 stat at 0, -1 every three seconds
// 2 stats at 0, -2 every three seconds
// 3 stats at 0, -3 every three seconds.
// Should go up when an individual stat goes up
// The health score should turn colors following these ranges:
// Green = 19-25
// Yellow = 11-18
// Red = Below 11

let healthScore = 25;
let progressBar = document.getElementsByTagName("progress");

let gamePlay = setInterval(checkStatsDec, 3000);
function checkStatsDec() {
    let currentHun = +hungerNum.textContent;
    let currentHyg = +hygieneNum.textContent;
    let currentHap = +happinessNum.textContent;
    if (currentHun == 0) {
        healthScore -= 1;
        Math.min(healthScore, 0);
    }
    if (currentHyg == 0) {
        healthScore -= 1;
        Math.min(healthScore, 0);
    }
    if (currentHap == 0) {
        healthScore -= 1;
        Math.min(healthScore, 0);
    }
    if (healthScore <= 0) {
        clearInterval(gamePlay);
        // Trigger dead pet modal here!
        deathP.innerHTML = `Sadly, ${userName}, ${petName} has died.`;
        deathSendOff.innerHTML = `The boat catches on fire, and ${petName} is sent off in a blazing, yet touching ceremony.`
        death.style.visibility = "visible";


    }
    progressBar[0].value = healthScore;
}

setInterval(checkStatsInc, 1000);
function checkStatsInc() {
    let currentHun = +hungerNum.textContent;
    let currentHyg = +hygieneNum.textContent;
    let currentHap = +happinessNum.textContent;
    if (currentHun == 10 && currentHyg == 10 && currentHap == 10) {
        healthScore += 1;
        Math.max(healthScore, 25);
    }
    progressBar[0].value = healthScore;
}

// Progress to Rehabilitation
// The scoring should follow the calculation:
// Progress should go up + 1 for every 1 second all individual stats are at score 10/10.
// The text score and the visual scores should turn colors following these ranges:
// Green = 19-25
// Yellow = 11-18
// Red = Below 11
// Reaching a Progress to Rehabilitation Score of 25 triggers the successful rehabilitation of the pet.

let progressToRehab = 0;

let progressEl = document.getElementById("progress");

let progress = setInterval(checkPoints, 500);
function checkPoints() {
    let currentHun = +hungerNum.textContent;
    let currentHyg = +hygieneNum.textContent;
    let currentHap = +happinessNum.textContent;
    
    if (currentHun == 10 && currentHyg == 10 && currentHap == 10) {
        progressToRehab += 1;
        Math.max(progressToRehab, 25);
    }
    if (progressToRehab == 25) {
        clearInterval(progress);
        // Trigger successful rehabilitation modal here
        rehabP.innerHTML = `Congrats, ${userName}! ${petName} has been rehabilitated.`
        rehabSendOff.innerHTML = `It's rough, but you know ${petName} will make it in the end.`
        rehab.style.visibility = "visible";

    }
    progressEl.innerHTML = `Progress to Rehabilitation: ${progressToRehab}/25`;
}