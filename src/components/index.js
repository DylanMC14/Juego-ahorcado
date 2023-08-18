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
let cant = 100;


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


//   const playSound = function() {
//     let element = document.createElement('div');
//     element.innerHTML = `
//     <audio autoplay loop>
//     <source src="../assets/audio/Professor (Main Theme) - Pokémon GO OST (Extended).mp3">  
//     </audio>
//     `;
    
//     //  <source src="../assets/audio/Demon Slayer Kimetsu no Yaiba - EP 19 SongKamado Tanjiro no Uta (1).mp3">  // cambiar el lugar de cada source dependiendo le juego
//     document.body.appendChild(element);
//     document.removeEventListener('click', playSound);
// }
// document.addEventListener('click', playSound);



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


  function getClue(){
    const clueBtn = document.getElementById("clue");
    clueBtn.addEventListener("click", clue);

    function clue() {
        console.log("solicitaste una pista");
        hangmanGame.paintPokeImage();
        counterPoints.innerHTML = cant-20;
    }
  }
  getClue();

  function getClue3(){
    const clue2Btn = document.getElementById("clue3");
    clue2Btn.addEventListener("click", clue3);

    function clue3() {
        console.log("solicitaste una pista");
        hangmanGame.paintAbilities();
        counterPoints.innerHTML = cant-20;
    }
  }
  getClue3();