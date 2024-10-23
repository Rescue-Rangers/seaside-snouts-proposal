// IDs for dom methods
let hungerNum = document.getElementById("hun-num");
let hygieneNum = document.getElementById("hyg-num");
let happinessNum = document.getElementById("hap-num");
let hungerNum2 = document.getElementById("hun-num-two");
let hygieneNum2 = document.getElementById("hyg-num-two");
let happinessNum2 = document.getElementById("hap-num-two");
// Prompt libraries

// feed prompts
// placeholder variables
let petName= "Hamilton";
let userName= "Krissy";
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
}

)
// click to increase hygiene and happiness with bathe button
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
}
)
// click to increase happiness with pet button
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
}
)
// click to increase happiness and decrease hunger and hygiene with play button
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
}
setInterval(decreaseHygiene, 3000);
function decreaseHygiene() {
    let currentNum = +hygieneNum.textContent;
    if (currentNum > 0) {
        hygieneNum.textContent = currentNum - 1;
        hygieneNum2.textContent = currentNum - 1;
    }
}
setInterval(decreaseHappiness, 3000);
function decreaseHappiness() {
    let currentNum = +happinessNum.textContent;
    if (currentNum > 0) {
        happinessNum.textContent = currentNum - 1;
        happinessNum2.textContent = currentNum - 1;
    }
}

//change the colors of the numbers based on stat
hungerNum.addEventListener("load", colorChangeGreen);
function colorChangeGreen() {
    if (+hungerNum.textContent >= 8) {
    // hungerNum.classList.add("colorChangeGreen")
    hungerNum.style.color = "green";
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

let progress = setInterval(checkPoints, 1000);
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
    }
    progressEl.innerHTML = `Progress to Rehabilitation: ${progressToRehab}/25`;
}
