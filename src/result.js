class Result{
    constructor(){
        this.message = "Start over";
        this.resultContainer = document.querySelector(".resultContainer");
        this.victory = "Victory, with the word ";
        this.fail = "you lost, with the word ";
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