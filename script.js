const hangmanImage = document. querySelector(".hangman-box img");
const wordDisplay = document. querySelector(".word-display");
const guessesText = document. querySelector(".guesses-text");
const keyboardDiv = document. querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".restart-button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6; // maximum number of wrong guesses allowed

const resetGame = () => { 
    // Resetting all game variables and UI elements 
    correctLetters = []; 
    wrongGuessCount = 0; 
    hangmanImage.src = `website-imgs/hangman/${wrongGuessCount}.png`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; 
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false); 
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join(""); 
    gameModal.classList.remove("show"); 
}

const getRandomWord = () => {
    // selecting a random word from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint; 
    resetGame(); // reset the game state
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("") // clear previous word display
}
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You guessed it!` : `The correct word was:`;
        gameModal.querySelector("img").src = `website-imgs/cat/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h2").innerText = `${isVictory ? 'Congrats!' : 'Game Over'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");

    }, 300);
}

const initGame = (button, clickedLetter) => {
    //checks if clickedletter is present on the currentword
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            //showing all the correct letters in the word display
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })

    } else {
    wrongGuessCount++;
    hangmanImage.src = `website-imgs/Hangman/hangman-${wrongGuessCount}.png`; // updating the hangman image
    }

    button.disabled = true; // disable the button after clicking
    guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// buttons for the keyboard
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord); 

let closeClickCount = 0;

document.getElementById("closeBtn").addEventListener("click", function() {
    closeClickCount++;
    if (closeClickCount === 1) {
        alert("Close button clicked!");
    }
    if (closeClickCount === 2) {
        alert("You clicked the close button again!");
    }
    if (closeClickCount === 3) {
        alert("stop it.");
    }
    if (closeClickCount === 4) {
        alert("dli lgi na maclose");
    }
    if (closeClickCount === 5) {
        alert("eejyut gyud oh");
    }
    if (closeClickCount === 6) {
        alert("stawwwwwp");
    }
    if (closeClickCount === 7) {
        alert("bayot ka");
    }
    if (closeClickCount === 8) {
        alert("sige ois, iclose na nku ");
        window.close();
    }
});