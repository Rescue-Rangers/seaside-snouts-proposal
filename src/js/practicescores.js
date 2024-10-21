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
let hunger = 10;
let happiness = 10;
let hygiene = 10;
let progressToRehab = 0;

let progressEl = document.getElementById("progress");
let progressBar = document.getElementsByTagName("progress");

let progress = setInterval(checkPoints(), 1000);

let gamePlay = setInterval(checkStats(), 3000);

function checkStats() {
    if (hunger == 0) {
        healthScore -= 1;
    }
    if (happiness == 0) {
        healthScore -= 1;
    }
    if (hygiene == 0) {
        healthScore -= 1;
    }
    if (healthScore == 0) {
        clearInterval(gamePlay);
    }
}

// Progress to Rehabilitation
// The scoring should follow the calculation:
// Progress should go up + 1 for every 1 second all individual stats are at score 10/10.
// The text score and the visual scores should turn colors following these ranges:
// Green = 19-25
// Yellow = 11-18
// Red = Below 11
// Reaching a Progress to Rehabilitation Score of 25 triggers the successful rehabilitation of the pet.

function checkPoints() {
    if (hunger == 10 && happiness == 10 && hygiene == 10) {
        progressToRehab += 1;
    }
    if (progressToRehab == 25) {
        clearInterval(progress);
        // Trigger successful rehabilitation modal here
    }
    progressEl.innerHTML = `Progress to Rehabilitation: ${progressToRehab}/25`;
    progressBar.value = progressToRehab;
}
