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

let posi = 0;

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
            imageUrl: '../assets/images/imagen2.jpg',
            imageWidth: 500,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
      } else if (strikes == 7) {
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

document.addEventListener("DOMContentLoaded", function() {
    var botonRecargar = document.getElementById("reloadbutton");
    botonRecargar.addEventListener("click", function() {
      window.location.reload(true);
    });
  });


  const playSound = function() {
    let element = document.createElement('div');
    element.innerHTML = `
    <audio autoplay loop>
    <source src="../assets/audio/Demon Slayer Kimetsu no Yaiba - EP 19 SongKamado Tanjiro no Uta (1).mp3">
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
