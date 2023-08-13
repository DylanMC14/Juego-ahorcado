class HangmanGame{
    constructor(){
        this.arreglo = ["Hola","Correo","Automovil","Avion","Submarino","Helicoptero","Estacion"];
        this.selectWord = "";
        this.arregloBusca = []
        this.arregloGuiones = []
    }

    startGame (){}

    initializeDispalyedWord(){
        let number = this.arreglo[Math.floor(Math.random() * this.arreglo.length)];
        this.arregloBusca = Array.from(number)
        console.log(this.arregloBusca);
        this.selectWord = number;
        for (let index = 0; index < number.length; index++) {
            const lineas = document.createElement("p");
            lineas.textContent = "_";
            this.arregloGuiones.push('_')
            const cajaGuiones = document.querySelector(".cajaGuiones");
            cajaGuiones.appendChild(lineas);
        }
        console.log(number);

    }

    checkLetter(letraviene){
            console.log('seleccionaste ', letraviene);
             this.arregloBusca.map((letra, posicion) =>{
                var letraMayuscula = letra.toUpperCase();
                 if(letraMayuscula == letraviene || letraMayuscula == letraviene){
                     console.log('correcta');
                     this.arregloGuiones[posicion] = letraviene;
                     
                 }
             })
     
             var context = document.querySelector(".cajaGuiones");
             const teclado = document.querySelectorAll(".botones");
     
            for (let i = 0; i < this.arregloGuiones.length; i++) {
                if (letraviene == this.arregloGuiones[i]) {
                    console.log("si se encuentra");
                     teclado[i].innerHTML=letraviene;
                }
                
            }

             console.log(this.arregloGuiones);
             console.log(this.arregloBusca);
             
             
         
    // por hacer mas adelante, retornara un true si la letra es correcta y un false si la letra es incorrecta
    return false;
    }

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

    getStatus(){
        // return "----";
    }
}

export {HangmanGame};