class Panel{
    constructor(){
        this.boxScripts = document.querySelector(".boxScripts");
    }

    paintPanel(word){
        this.boxScripts.textContent = word;
    }

    refreshpanel(newStatus){
        var dashes = document.querySelectorAll(".paragraph");
        var newScripts = Array.from(dashes);
        for (let index = 0; index < newStatus.length; index++) {
           newScripts[index].textContent = newStatus[index]
        }
    }
}



export {Panel};