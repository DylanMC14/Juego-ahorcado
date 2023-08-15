class Keyboard{
    constructor(){
        this.alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.keyboardContainer = document.getElementById('keyboardContainer');
    }
    
    createKeyboard(){
        this.alphabet.map(key =>{
            const div = document.createElement('div');
            const p = document.createElement('p');
            div.classList = 'buttons'
            p.textContent = key
            div.appendChild(p);
            div.setAttribute("data-letter", key);
            this.keyboardContainer.appendChild(div);
            })
    }
    

    showCorrect(letter){
        const button = this.getLetterButton (letter);
        button.classList.add("green");
    }
     

    showInCorrect(letter){
        const button = this.getLetterButton (letter);
        button.classList.add("red");
    }


    getLetterButton (letter){
        return this.keyboardContainer.querySelector(`.buttons[data-letter="${letter}"]`);
    }
}


export {Keyboard};
