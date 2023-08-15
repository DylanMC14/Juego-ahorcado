import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyparts.js";
class HangmanGame {
  constructor() {
    this.array = [
      "Hello",
      "Mail",
      "Car",
      "Plane",
      "Submarine",
      "Helicopter",
      "Season",
    ];
    this.selectWord = "";
    this.fixSearch = [];
    this.fixscripts = [];
    this.newFix = [];
    this.arrayStatus = [];
    this.counter = 0;
    this.keyboard = new Keyboard();
    this.panel = new Panel();
    this.bodyparts = new BodyParts();
  }

  startGame() {
    this.panel.paintPanel();
    this.keyboard.createKeyboard();
    this.bodyparts.paintImage();
    this.fillArrayLength();
    // this.bodyparts.updateImage();
  }

  getPlayWord(){}

  initializeDispalyedWord() {
    let number = this.array[Math.floor(Math.random() * this.array.length)];
    this.fixSearch = Array.from(number);
    console.log(this.fixSearch);
    this.selectWord = number;
    for (let index = 0; index < number.length; index++) {
      const lines = document.createElement("p");
      lines.className = "paragraph";
      lines.textContent = "_";
      this.fixscripts.push("_");
      const boxScripts = document.querySelector(".boxScripts");
      boxScripts.appendChild(lines);
    }
    console.log(number);
  }
  checkLetter(lettercomes) {
    console.log("You selected", lettercomes);

    const found = this.fixSearch.some((letter, position) => {
      const capitalletter = letter.toUpperCase();

      if (capitalletter === lettercomes.toUpperCase()) {
        console.log("correct");
        this.fixscripts[position] = lettercomes;
        return true;
      }
    });

    return found;
  }

  checkIfPlayerWon() {
    return true;
  }
  
  checkIfPlayerLost() {
      this.counter ++
      console.log("I am the counter",this.counter);
      var strikes = document.getElementById("amount");
      strikes.textContent = this.counter;
      if (this.counter == 6) {
          Swal.fire({
              title: 'BE CAREFUL!',
              text: 'You only have 1 strike left',
              imageUrl: '../assets/images/imagen2.jpg',
              imageWidth: 500,
              imageHeight: 400,
              imageAlt: 'Custom image',
            })
        } else if (this.counter == 7) {
            Swal.fire({
                title: 'OH NO!',
                text: 'You lose',
                imageUrl: '../assets/images/prueba.jpg',
                imageWidth: 500,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
  }
  
  setStatus() {}

  fillArrayLength() {
    for (let index = 0; index < this.selectWord.length; index++) {
      this.arrayStatus.push("_");
    }
  }

  getStatus(letter) {
    var littleword = this.selectWord;
    var wordUppercase = littleword.toUpperCase();
    this.newFix = wordUppercase.split("");
    console.log("letter status: ", letter);
    for (let index = 0; index < littleword.length; index++) {
      if (letter === this.newFix[index]) {
        this.arrayStatus[index] = letter;
      }
    }
    console.log("Hi, I'm in arrayStatus", this.arrayStatus);
    return this.arrayStatus;
  }
}

export { HangmanGame };
