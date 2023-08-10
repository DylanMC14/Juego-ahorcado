class Result{
    constructor(){
        this.message = "Volver a empezar";
        this.resultContainer = document.querySelector(".resultContainer");
        this.victory = "Victoria, con la palabra ";
        this.fail = "Perdiste, con la palabra ";
    }


    showResult(isWin, word){
        if (isWin) {
            this.resultContainer.innerHTML = `${this.victory} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.message}</span>`;
          } else {
            this.resultContainer.innerHTML = `${this.fail} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.message}</span>`;
          }
    }
}


export {Result};