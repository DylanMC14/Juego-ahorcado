class HangmanGame{
    constructor(){}

    checkLetter(letter){
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
        return "----";
    }
}

export {HangmanGame}