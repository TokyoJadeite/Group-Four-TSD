const waterCycleComponents = [
    { name: 'Evaporation', hint: 'The liquid phase to gas phase' },
    { name: 'Condensation', hint: 'The gas phase to liquid phase' },
    { name: 'Precipitation', hint: 'Water falling from the sky' },
    { name: 'Runoff', hint: 'Water flowing over the ground' },
    { name: 'Infiltration', hint: 'Water soaking into the ground' },
    { name: 'Transpiration', hint: 'Water released from plants' },
    { name: 'Sublimation', hint: 'The solid phase to gas phase' },
    { name: 'Desublimation', hint: 'The gas phase to solid phase' },
    { name: 'Storage', hint: 'Where water accumulates for later use or release' },
    { name: 'Cloud', hint: 'Collection of tiny water droplets or ice crystals in the sky' },
    { name: 'Rain', hint: 'Precipitation that falls from the clouds in liquid form' },
    { name: 'Solid', hint: 'State of water when it is frozen, such as ice or snow' },
    { name: 'Gas', hint: 'State of water when it is in the air as vapor' },
    { name: 'Liquid', hint: 'State of water in its free-flowing form, like in rivers or oceans' },
    { name: 'Vapor', hint: 'Water in its gaseous state, often invisible in the air' },
    { name: 'Waterdrop', hint: 'A small, visible portion of water in liquid form' }
];

let targetComponent = waterCycleComponents[Math.floor(Math.random() * waterCycleComponents.length)];
let currentWord = targetComponent.name;
console.log(`DEBUG PURPOSES ONLY! THE CURRENT WORD IS: ${currentWord}`);

const board = document.getElementById("board");
const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const hintElement = document.getElementById("hint"); // Select the hint element
const hint2Element = document.getElementById("hint2"); // Select the hint2 element

let gameOver = false;
let guesses = [];

function initializeBoard() {
    const letterBoxSize = 45;
    guessInput.setAttribute('maxLength', `${currentWord.length}`);
    
    board.style.gridTemplateColumns = `repeat(${currentWord.length}, ${letterBoxSize}px)`;
    
    for (let i = 0; i < currentWord.length * 6; i++) { // 6 guesses x length of the word
        const letterDiv = document.createElement("div");
        letterDiv.className = "letter";
        letterDiv.style.width = `${letterBoxSize}px`;
        letterDiv.style.height = `${letterBoxSize}px`;
        board.appendChild(letterDiv);
    }
    displayHint(); // Display hint when initializing the board
}

function displayHint() {
    hintElement.innerText = `Please enter a ${currentWord.length}-letter word\nHint: ${targetComponent.hint}`;
    hint2Element.innerText = `Hint: ${targetComponent.hint}`; // If you need to display hint2
}

function updateBoard() {
    const letters = document.querySelectorAll(".letter");
    
    for (let i = 0; i < guesses.length; i++) {
        const guess = guesses[i];
        const guessArray = guess.split('');
        const currentWordArray = currentWord.split('');
        
        // Create an array to mark if the letter is already matched
        let matched = Array(currentWord.length).fill(true);
        let colorArray = Array(currentWord.length).fill('green');

        // First pass: Mark correct letters in the correct position
        for (let j = 0; j < guessArray.length; j++) {
            if (guessArray[j] === currentWordArray[j]) {
                colorArray[j] = 'green';
                matched[j] = true;
            }
        }

        // Second pass: Mark correct letters in the wrong position
        for (let j = 0; j < guessArray.length; j++) {
            if (!matched[j]) {
                let index = currentWordArray.indexOf(guessArray[j]);
                if (index !== -1 && !matched[index]) {
                    colorArray[j] = 'yellow';
                    matched[index] = true;
                }
            }
        }

        // Update board with colors
        for (let j = 0; j < guessArray.length; j++) {
            const letterDiv = letters[i * currentWord.length + j];
            letterDiv.textContent = guessArray[j].toUpperCase();
            letterDiv.style.backgroundColor = colorArray[j];
        }
    }
}

function checkGuess2() {
    const guess = guessInput.value.toLowerCase();
    const wordLength = currentWord.length;

    if (gameOver) {
        onRestart();
        return;
    }

    if (guess.length !== currentWord.length) {
        message.textContent = `Please enter a ${wordLength}-letter word.`;
        return;
    }

    guesses.push(guess);
    updateBoard();

    if (guess === currentWord.toLowerCase()) {
        message.textContent = "Congratulations! You guessed the word!";
        guessButton.textContent = "Restart";
        guessInput.disabled = true;
        gameOver = true;
    } else if (guesses.length === 6) {
        message.textContent = `Game Over! The word was ${currentWord}.`;
        guessButton.textContent = "Restart";
        guessInput.disabled = true;
        gameOver = true;
    } else {
        message.textContent = "Try again!";
    }

    guessInput.value = "";
    guessInput.focus();
}

function onRestart() {
    gameOver = false;
    
    board.innerHTML = '';
    guesses = [];

    targetComponent = waterCycleComponents[Math.floor(Math.random() * waterCycleComponents.length)];
    currentWord = targetComponent.name;
    console.log(`DEBUG PURPOSES ONLY! THE CURRENT WORD IS: ${currentWord}`);
    guessInput.disabled = false;
    initializeBoard();
}

message.textContent = ".";
guessButton.addEventListener("click", () => {
    checkGuess();
});
guessInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

initializeBoard();
displayHint(); // Make sure hint is displayed
