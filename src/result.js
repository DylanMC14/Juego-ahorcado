class Result{
    constructor(){
        this.message = "Volver a empezar";
    }



    showResult(valor){
        if (valor == true){
            return this.message = "Victoria" + " ¿Jugar de nuevo?"
        }
        else {
            return this.message = "Perdiste" + " ¿Jugar de nuevo?"
        }
    }
}

const app = new Result();
console.log(app.showResult());