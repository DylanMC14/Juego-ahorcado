import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyparts.js";
import { PokenApi } from "../api/pokemon-api.js";

class HangmanGame {
  constructor() {
    this.array = [
      "hello",
      "mail",
      "car",
      "plane",
      "submarine",
      "helicopter",
      "season",
      "university",
      "gentleman",
      "heat",
      "tree",
     "butterfly",
      "computer",
      "cathedral",
      "guitar",
      "pijama",
      "Kiwi",
      "ball",
      "hero",
      "ship",
      "train",
      "bear",
      "apple",
      "gorilla",
      "zebra",
      "parrot",
      "darling",
      "lion",
      "tiger",
      "jaguar",
      "crocodile",
      "choice",
      "ant",
      "eagle"
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
    this.pokeapi = new PokenApi();
  }

  startGame() {
    this.panel.paintPanel();
    this.keyboard.createKeyboard();
    this.bodyparts.paintImage();
    this.fillArrayLength();
  }
  // async function recibirDatosApi(){

//   let data = await pokeapi.logMovies(pokeapi.randomNumber);
//   let image = document.createElement('p');
//   image.textContent = data.name;
//   let x = document.querySelector('.image')
//   x.appendChild(image)
//   console.log(data,'Aqui');
// }
// recibirDatosApi();

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
  }
  checkLetter(lettercomes) {
    this.fixSearch.map((letter, position) => {
      const capitalletter = letter.toUpperCase();

      if (capitalletter === lettercomes.toUpperCase()) {
        console.log("correct");
        this.fixscripts[position] = lettercomes.toLowerCase();
      }
    });
    return this.fixscripts

  }

  solution(letter, posi){
    for (let index = posi; index < this.fixSearch.length; index++) {
      if(this.fixSearch[index] == letter.toLowerCase()){
        return true
      }
    }
  }

  checkIfPlayerWon() {
    let variable = JSON.stringify(this.fixscripts) === JSON.stringify(this.fixSearch);
    console.log(this.fixscripts);
    console.log(this.fixSearch);

    if (variable === true) {
      console.log('ganaste');
      Swal.fire({
        title: 'Congratulations!',
        text: 'You have won',
        imageUrl: '../assets/images/hashiras(2).jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
      return true;
    } else {

      console.log('sigue intentando');

      return false;
    }
  }
  
  checkIfPlayerLost(strikes) {
    if (strikes>6) {
      console.log('Holaaaaaaaaaaaaaaa');
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
    for (let index = 0; index < littleword.length; index++) {
      if (letter === this.newFix[index]) {
        this.arrayStatus[index] = letter;
      }
    }
    return this.arrayStatus;
  }
}

export { HangmanGame };


