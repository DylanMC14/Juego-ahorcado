import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyparts.js";
import { PokenApi } from "../api/pokemon-api.js";

class HangmanGame {
  constructor() {
    this.pokeimage = '';
    this.pokeElement = document.getElementById("pokeimage");
    this.pokeElement.style.visibility= 'hidden';
    this.pokeElementRv = document.getElementById("pokeimageRv");
    this.pokeElementRv.style.visibility= 'hidden';
    this.pokeType = "";
    this.pokeAbility = "";
    this.selectWord = "";
    this.fixSearch = []; 
    this.newFixSearch = [];
    this.fixscripts = []; 
    this.newFix = [];
    this.arrayStatus = [];
    this.counter = 0;
    this.keyboard = new Keyboard();
    this.panel = new Panel();
    this.bodyparts = new BodyParts();
    this.pokeApi = new PokenApi();
    this.data = new Object ();
  }
  async initializePokeApiData() {
    this.data = await this.pokeApi.logMovies(this.pokeApi.randomNumber);
    this.selectWord  = this.data.name;
    this.newFixSearch = this.selectWord.split("")
    this.pokeimage= this.data.sprites.other["official-artwork"]["front_default"];
    return this.data;
}
 async startGame() {
   this.keyboard.createKeyboard();
   this.bodyparts.paintImage();
   this.fillArrayLength();
   this.data= await this.initializePokeApiData();
   this.asyncTest();
  }
  asyncTest(){
    console.log('After initialization', this.selectedWord);
    console.log(this.data.sprites.other["official-artwork"]["front_shiny"]);
    console.log("estas son las habilidades",this.data.abilities["0"]["ability"]["name"]);
    console.log("este es el 1er tipo",this.data.types["0"]["type"]["name"]);
    console.log(this.pokeimage);
    console.log(this.data);
    console.log(this.data.name, 'palabra');
}

  initializeDispalyedWord() {
    for (let index = 0; index < this.selectWord.length; index++) {
      const lines = document.createElement("p");
      lines.className = "paragraph";
      lines.textContent = "_";
      this.fixscripts.push("_");
      const boxScripts = document.querySelector(".boxScripts");
      boxScripts.appendChild(lines);
    }
  }
  getPlayWord(){}
  checkLetter(lettercomes) {
    this.newFixSearch.map((letter, position) => {
      const capitalletter = letter.toUpperCase();

      if (capitalletter === lettercomes.toUpperCase()) {
        console.log("correct");
        this.fixscripts[position] = lettercomes.toLowerCase();
      }
    });
    return this.fixscripts

  }

  solution(letter, posi){
    for (let index = posi; index < this.newFixSearch.length; index++) {
      if(this.newFixSearch[index] == letter.toLowerCase()){
        return true
      }
    }
  }

  checkIfPlayerWon() {
    let variable = JSON.stringify(this.fixscripts) === JSON.stringify(this.newFixSearch);
    console.log(this.fixscripts);
    console.log(this.newFixSearch,'Chequear si gano con newFix');
    console.log(variable);

    if (variable === true) {
      console.log('ganaste');
      Swal.fire({
        title: 'Congratulations!',
        text: 'You have won',
        imageUrl: '../assets/../assets/images/rayquaza(2).jpg',
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
  
  paintPokeImage(){
    this.pokeElement.src = this.data.sprites.other["official-artwork"]["front_default"];
    this.pokeElement.style.width = "200px";
    this.pokeElement.style.height = "200px";
    this.pokeElement.style.visibility= 'visible';
  }

  paintPokeImageRv(){
    this.pokeElementRv.src = this.data.sprites.other["official-artwork"]["front_default"];
    this.pokeElementRv.style.width = "200px";
    this.pokeElementRv.style.height = "200px";
    this.pokeElementRv.style.visibility= 'visible';
  }

  paintType(){
    this.pokeType = this.data.types.map(nombres =>nombres.type.name);

    console.log(this.pokeType);
    this.pokeTypeTotal = "The pokemon is of type: " + this.pokeType;
    Swal.fire({
      title: this.pokeTypeTotal,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  paintAbilities(){
    this.pokeAbility1 = this.data.abilities["0"]["ability"]["name"];
    this.pokeAbility2 = this.data.abilities["1"]["ability"]["name"]
    this.pokeAbilityTotal = "Two abilities of the pokemon are: " + this.pokeAbility1 + "y" + this.pokeAbility2;
    Swal.fire({
      title: this.pokeAbilityTotal,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}

export { HangmanGame };


