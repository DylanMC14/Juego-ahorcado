import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";
import { HangmanGame} from "./hangmangame.js";
import { BodyParts } from "./bodyparts.js";

const conta = 0;
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

const letterButtons = document.querySelectorAll(".botones");
letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const letter = button.getAttribute("data-letter");
        console.log("este es letter",typeof letter);
        const isLetterCorrect = hangmanGame.checkLetter(letter);

        console.log("esta es la prueba de lettercorrect", isLetterCorrect);

        if (isLetterCorrect) {
            keyboard.showCorrect(letter);
            var nuevoStatus = hangmanGame.getStatus(letter) ;
            console.log("arreglo que llega: ",nuevoStatus);
            panel.actualizarpanel(nuevoStatus);
        } else {
            keyboard.showInCorrect(letter);
        }
        const obtenerPalabra = hangmanGame.getPlayWord();
        if (hangmanGame.checkIfPlayerWon()) {
            result.showResult(true,obtenerPalabra);
        } else if (hangmanGame.checkIfPlayerLost()) {
            result.showResult(false,obtenerPalabra);
        }       
    });
  });




const startBtn = document.querySelector(".Start");
startBtn.addEventListener("click", inicio);

function inicio() {
    startBtn.disabled = true;
    console.log("hiciste click");
    hangmanGame.initializeDispalyedWord();
}