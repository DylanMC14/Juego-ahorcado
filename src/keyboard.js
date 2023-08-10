import { Panel } from "./panel.js";

let contador = 0;


class Keyboard{
    constructor(){
        this.alfabeto= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
    
    
    
    createKeyboard(){
        return this.alfabeto
    }
    

    showCorrect(letter){}
     

    showInCorrect(letter){}
}
const app = new Keyboard();
const panel = new Panel();

const array = app.createKeyboard();

const verde = document.getElementById('verde');
var text = document.getElementById("text");



var context = document.createElement("input");
context.id = 'input'

// context.addEventListener('click', function(){
//     panel.addWord('context.text')
// })


context.classList = 'context'

text.appendChild(context)
panel.pintarGuiones();

array.map(key =>{
    const div = document.createElement('div')
    const p = document.createElement('p')
    
    
    div.classList = 'botones'
    p.textContent = key

    
    div.appendChild(p)
    verde.appendChild(div)
    

    div.addEventListener('click', () =>{
        // debugger
        panel.pintarPalabra(p.textContent);

        if (contador == 0) {
            div.classList.add("verde");
            contador=1;
        } else {
            div.classList.remove("verde");
            contador = 0;
        }

        if (contador == 0) {
            div.classList.add("botones");
            contador=0;
        } else {
            div.classList.remove("rojo");
            contador = 1;
        } 

        if (contador == 0) {
            div.classList.add("rojo");
            contador=0;
        }
    })

})

// if () {
    
// }
  

// console.log(app.showCorrect());
// console.log(app.showInCorrect());

// keyboard.showCorrect('E');
// keyboard.showCorrect('I');


// function dePrueba(){
    
//     if (contador == 0) {
//         cajaprueba.classList.add("verde");
//         contador=1;
//     } else {
//         cajaprueba.classList.remove("verde");
//         contador = 0;
//     }
    // if (contador == 0) {
    //     cajaprueba.classList.add("rojo");
    //     contador=0;
    // } else {
    //     cajaprueba.classList.remove("rojo");
    //     contador = 1;
    // }
// }
// cajaprueba.addEventListener("click",dePrueba,true);


export {Keyboard};
