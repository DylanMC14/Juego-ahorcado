const cajaprueba = document.querySelector(".prueba")
let contador = 0
class Keyboard{

    
    constructor(){
        this.keys= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
    
    
    
    createKeyboard(){
        this.keys.map(key =>  {
            console.log("["+ key +"]");
        })
        cajaprueba.innerHTML = this.keys;
    }
    
    showCorrect(){

        

    }
 

    showInCorrect(letter){}
}
const app = new Keyboard();
console.log(app.createKeyboard());



function dePrueba(){
    
    if (contador == 0) {
        cajaprueba.classList.add("verde");
        contador=1;
    } else {
        cajaprueba.classList.remove("verde");
        contador = 0;
    }
    if (contador == 0) {
        cajaprueba.classList.add("rojo");
        contador=0;
    } else {
        cajaprueba.classList.remove("rojo");
        contador = 1;
    }
}
cajaprueba.addEventListener("click",dePrueba,true);

