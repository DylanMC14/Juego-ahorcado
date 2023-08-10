// import {Keyboard} from "./keyboard.js";
// import {Result} from "./result.js";
// import {BodyParts} from "../src/bodyparts";

import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";
import { HangmanGame} from "./hangmangame.js";

const panel = new Panel();
const result = new Result();
const hangmanGame = new HangmanGame ();
const keyboard = new Keyboard();
const status = hangmanGame.getStatus();
panel.paintPanel(status)
keyboard.createKeyboard();
const letterButtons = document.querySelectorAll(".botones");
letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const letter = button.getAttribute("data-letter");
        const isLetterCorrect = hangmanGame.checkLetter(letter);
        if (isLetterCorrect) {
            keyboard.showCorrect(letter);
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

// console.log(apps.showResult());