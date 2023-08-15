import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyparts.js";
class HangmanGame{
    constructor(){
        this.arreglo = ["Hola","Correo","Automovil","Avion","Submarino","Helicoptero","Estacion"];
        this.selectWord = "";
        this.arregloBusca = [];
        this.arregloGuiones = [];
        this.nuevoArreglo = [];
        this.arregloStatus = [];
        this.keyboard = new Keyboard();
        this.panel = new Panel();
        this.bodyparts = new BodyParts();
    }

    startGame (){
        this.panel.paintPanel();
        this.keyboard.createKeyboard();
        this.bodyparts.paintImage();
        this.fillArrayLength();
    }

    initializeDispalyedWord(){
        let number = this.arreglo[Math.floor(Math.random() * this.arreglo.length)];
        this.arregloBusca = Array.from(number)
        console.log(this.arregloBusca);
        this.selectWord = number;
        for (let index = 0; index < number.length; index++) {
            const lineas = document.createElement("p")
            lineas.className = "parrafo";
            lineas.textContent = "_";
            this.arregloGuiones.push('_')
            const cajaGuiones = document.querySelector(".cajaGuiones");
            cajaGuiones.appendChild(lineas);
        }
        console.log(number);

    }

    // checkLetter(letraviene){
    //         console.log('seleccionaste', letraviene);
    //          this.arregloBusca.map((letra, posicion) =>{
    //             var letraMayuscula = letra.toUpperCase();
    //              if(letraMayuscula == letraviene || letraMayuscula == letraviene){
    //                  console.log('correcta');
    //                  this.arregloGuiones[posicion] = letraviene;

    //                  return true;
                     
    //                 }
    //             })

                checkLetter(letraviene) {
                    console.log('seleccionaste', letraviene);
                  
                    const found = this.arregloBusca.some((letra, posicion) => {
                      const letraMayuscula = letra.toUpperCase();
                  
                      if (letraMayuscula === letraviene.toUpperCase()) {
                        console.log('correcta');
                        this.arregloGuiones[posicion] = letraviene;
                        return true;
                      }
                    });
                  
                    return found;
                  }
                
             
         
    // por hacer mas adelante, retornara un true si la letra es correcta y un false si la letra es incorrecta
    // return false;
    // }

    checkIfPlayerWon(){
        return true;
        // retorne true, si el jugador ya gano, de lo contrario retorne false
    }

    checkIfPlayerLost(){
        // retorne true, si el jugador ya perdio, de lo contrario retorne false
    }

    getPlayWord(){
        return "probando";
    }

    setStatus(){}

    fillArrayLength() {
        for (let index = 0; index < this.selectWord.length; index++) {
            this.arregloStatus.push('_');
        };
    }

    getStatus(letter){
            var palabrita = this.selectWord;
            var palabraMayuscula = palabrita.toUpperCase();
            this.nuevoArreglo = palabraMayuscula.split("");
            console.log('Letra status: ', letter);
            for (let index = 0; index < palabrita.length; index++) {
                if (letter === this.nuevoArreglo[index]) {
                    this.arregloStatus[index] = letter;
                }
            }
            console.log("Hola estoy en arreglostatus",this.arregloStatus);
            return this.arregloStatus;
    }
}

export {HangmanGame};