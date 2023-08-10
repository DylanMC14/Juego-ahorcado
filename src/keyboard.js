class Keyboard{
    constructor(){
        this.alfabeto= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.keyboardContainer = document.getElementById('keyboardContainer');
    }
    
    createKeyboard(){
        this.alfabeto.map(key =>{
            const div = document.createElement('div');
            const p = document.createElement('p');
            div.classList = 'botones'
            p.textContent = key
            div.appendChild(p);
            div.setAttribute("data-letter", key);
            this.keyboardContainer.appendChild(div);
            })
    }
    

    showCorrect(letter){
        const button = this.getLetterButton (letter);
        button.classList.add("verde");
    }
     

    showInCorrect(letter){
        const button = this.getLetterButton (letter);
        button.classList.add("rojo");
    }


    getLetterButton (letter){
        return this.keyboardContainer.querySelector(`.botones[data-letter="${letter}"]`);
    }
}


export {Keyboard};
