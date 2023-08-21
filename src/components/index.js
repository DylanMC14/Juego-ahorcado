import { PokenApi } from "../api/pokemon-api.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";
import { HangmanGame} from "./hangmangame.js";
import { BodyParts } from "./bodyparts.js";
import { Keyboard } from "./keyboard.js";

const bodyparts = new BodyParts();
const panel = new Panel();
const result = new Result();
const hangmanGame = new HangmanGame ();
const keyboard = new Keyboard();
const pokeapi = new PokenApi();
let posi = 0;
let counterPoints = document.getElementById("amountpoint");
var cant = 100;


hangmanGame.startGame();

const letterButtons = document.querySelectorAll(".buttons");
letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // debugger
        const letter = button.getAttribute("data-letter");
        console.log("this is letters",typeof letter);
        const isLetterCorrect = hangmanGame.checkLetter(letter);
        console.log(hangmanGame.checkIfPlayerWon());
        console.log("this is the lettercorrect test", isLetterCorrect);

        const solution = hangmanGame.solution(letter, posi);

        if (solution) {
            // debugger
            keyboard.showCorrect(letter);
            var newStatus = hangmanGame.getStatus(letter);
            console.log("this is the array that arrives: ",newStatus);
            panel.refreshpanel(newStatus);
        } else {
            keyboard.showInCorrect(letter);
            var strikes = parseInt(document.getElementById("amount").textContent);
            console.log('str int:',strikes);    
            bodyparts.updateImage(strikes);
            strikes++;
            document.getElementById("amount").textContent= strikes;
            alertPlayer();

        }
        const getWord = hangmanGame.getPlayWord();
        if (hangmanGame.checkIfPlayerWon()) {
            result.showResult(true,getWord);
            console.log('si');
        } 
        else if (hangmanGame.checkIfPlayerLost(strikes)) {
            result.showResult(false,getWord);
            console.log('no');
        }       
    });
  });




const startBtn = document.querySelector(".Start");
startBtn.addEventListener("click", start);

function start() {
    startBtn.disabled = true;
    console.log("You clicked");
    hangmanGame.initializeDispalyedWord();
    ready();
}


function alertPlayer(){
    var strikes = document.getElementById("amount").textContent;
    if (strikes == 6) {
        Swal.fire({
            title: 'BE CAREFUL!',
            text: 'You only have 1 strike left',
            imageUrl: '../assets/images/kyogre.jpg',
            imageWidth: 500,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
      } else if (strikes == 7) {
          Swal.fire({
              title: 'OH NO!',
              text: 'You lose',
              imageUrl: '../assets/images/groudon.jpg',
              imageWidth: 500,
              imageHeight: 300,
              imageAlt: 'Custom image',
          })
      }
}

document.addEventListener("DOMContentLoaded", function() {
    var reloadbutton = document.getElementById("reloadbutton");
    reloadbutton.addEventListener("click", function() {
      window.location.reload(true);
    });
  });


  const playSound = function() {
    let element = document.createElement('div');
    element.innerHTML = `
    <audio autoplay loop>
    <source src="../assets/audio/Professor (Main Theme) - Pokémon GO OST (Extended).mp3">  
    </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);



document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("mymodal");
    var closeModal = document.querySelector(".close");
    modal.style.display = "block";
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  console.log("la cantidad de puntos es ", cant);

  function getClue(){
    const clueBtn = document.getElementById("clue");
    clueBtn.addEventListener("click", clue);

    function clue() {
        console.log("solicitaste una pista");
        hangmanGame.paintPokeImage();
        cant = cant - 30;
        counterPoints.textContent = cant;
        console.log("la cantidad de puntos despues de esta pista es ", cant);
        clueBtn.disabled = true;
        if (cant == 0) {
          Swal.fire({
            title: 'OH NO!',
            text: 'You lose, you ran out of points',
            imageUrl: '../assets/images/groudon.jpg',
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
        }
    }
  }
  getClue();

  function getClueRv(){
    const clueRvBtn = document.getElementById("clueRv");
    clueRvBtn.addEventListener("click", clueRv);

    function clueRv() {
        console.log("solicitaste una pista");
        hangmanGame.paintPokeImageRv();
        cant = cant - 40;
        counterPoints.textContent = cant;
        console.log("la cantidad de puntos despues de esta pista es ", cant);
        clueRvBtn.disabled = true;
        if (cant == 0) {
          Swal.fire({
            title: 'OH NO!',
            text: 'You lose, you ran out of points',
            imageUrl: '../assets/images/groudon.jpg',
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
        }
    }
  }
  getClueRv();

  function getClue2(){
    const clue2Btn = document.getElementById("clue2");
    clue2Btn.addEventListener("click", clue2);

    function clue2() {
        console.log("solicitaste una pista");
        hangmanGame.paintType();
        cant = cant - 20;
        counterPoints.textContent = cant;
        console.log("la cantidad de puntos despues de esta pista es ", cant);
        clue2Btn.disabled = true;
        if (cant == 0) {
          Swal.fire({
            title: 'OH NO!',
            text: 'You lose, you ran out of points',
            imageUrl: '../assets/images/groudon.jpg',
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
        }
    }
  }
  getClue2();

  function getClue3(){
    const clue3Btn = document.getElementById("clue3");
    clue3Btn.addEventListener("click", clue3);

    function clue3() {
        console.log("solicitaste una pista");
        hangmanGame.paintAbilities();
        cant = cant - 10;
        counterPoints.textContent = cant;
        console.log("la cantidad de puntos despues de esta pista es ", cant);
        clue3Btn.disabled = true;
        if (cant == 0) {
          Swal.fire({
            title: 'OH NO!',
            text: 'You lose, you ran out of points',
            imageUrl: '../assets/images/groudon.jpg',
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
        }
    }
  }
  getClue3();

let minutes = 0;
let seconds = 0;

function ready() {
  function secondsReload() {
    let txtSeconds;
  
    if (seconds < 0) {
      seconds = 59;
    } else if (seconds < 10) {
      txtSeconds = `0${seconds}`;
    } else {
      txtSeconds = seconds;
    }
    var secondsTime = document.getElementById("seconds");
    secondsTime.innerHTML = txtSeconds;
    seconds --;
    minutesReload(seconds) 
  }
  
  let interval = setInterval(secondsReload,1000)
  
  function minutesReload(seconds) {
    let txtMinutes;
    
    if (seconds == -1 && minutes !== 0) {
      setTimeout(()=> {
        minutes --;
      },1000)
    } else if (seconds == -1 && minutes == 0) {
      setTimeout(()=> {
        minutes = 4;
      },1000)
    } else if (minutes === 0 && seconds === 0) {
      Swal.fire({
        title: 'OH NO!',
        text: 'You lose',
        imageUrl: '../assets/images/groudon.jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
      clearInterval(interval);
    }
    
    if (minutes < 10) {
      txtMinutes = `0${minutes}`;
    } else{
      txtMinutes = minutes;
    }
    var minutesTime = document.getElementById("minutes");
    minutesTime.innerHTML = txtMinutes;
  }
}

Swal.fire({
  title: 'How to play? When you press the start button, 1 random pokemon will appear and the countdown will begin, do not let time run out or you will lose, you must guess the name of the pokemon, you will have 100 points at the start and 4 clues, which you can use nothing else 3, if you use the 4 you will lose since points will be deducted, you can also lose if you are wrong 7 times',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})