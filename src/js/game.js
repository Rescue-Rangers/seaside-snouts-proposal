// Prompt libraries

// feed prompts
// placeholder variables
petName= "Hamilton";
userName= "Krissy";
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

function randomPrompt(prompt) {
    let index = Math.floor(Math.random() * 6);
    return prompt[index];
}
console.log(randomPrompt(playPrompts))

const eventText = document.getElementById("event-text")

function promptEvent(message) {
    eventText.textContent = message;
}
document.getElementById("feed-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(feedPrompts))
}
)

document.getElementById("bathe-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(bathePrompts))
}
)
document.getElementById("pet-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(petPrompts))
}
)
document.getElementById("play-btn").addEventListener("click", function() {
    promptEvent(randomPrompt(playPrompts))
}
)