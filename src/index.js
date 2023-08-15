import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";
import { HangmanGame} from "./hangmangame.js";
import { BodyParts } from "./bodyparts.js";

const bodyparts = new BodyParts();
const panel = new Panel();
const result = new Result();
const hangmanGame = new HangmanGame ();
const keyboard = new Keyboard();

// bodyparts.paintImage();
// const status = hangmanGame.getStatus();
// panel.paintPanel(status);
// keyboard.createKeyboard();
// hangmanGame.checkLetter();
// hangmanGame.fillArrayLength();
hangmanGame.startGame();
bodyparts.updateImage();

const letterButtons = document.querySelectorAll(".buttons");
letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const letter = button.getAttribute("data-letter");
        console.log("this is letters",typeof letter);
        const isLetterCorrect = hangmanGame.checkLetter(letter);

        console.log("this is the lettercorrect test", isLetterCorrect);

        if (isLetterCorrect) {
            keyboard.showCorrect(letter);
            var newStatus = hangmanGame.getStatus(letter) ;
            console.log("this is the array that arrives: ",newStatus);
            panel.refreshpanel(newStatus);
        } else {
            keyboard.showInCorrect(letter);
            hangmanGame.checkIfPlayerLost();
        }
        const getWord = hangmanGame.getPlayWord();
        if (hangmanGame.checkIfPlayerWon()) {
            result.showResult(true,getWord);
        } else if (hangmanGame.checkIfPlayerLost()) {
            result.showResult(false,getWord);
        }       
    });
  });




const startBtn = document.querySelector(".Start");
startBtn.addEventListener("click", start);

function start() {
    startBtn.disabled = true;
    console.log("You clicked");
    hangmanGame.initializeDispalyedWord();
}