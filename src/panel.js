class Panel{
    constructor(){
        this.boxScripts = document.querySelector(".boxScripts");
    }

    paintPanel(word){
        this.boxScripts.textContent = word;
    }

    refreshpanel(newStatus){
        // console.log("I'm on panel",newStatus);
        var dashes = document.querySelectorAll(".paragraph");
        // console.log("We are in scripts",dashes);
        var newScripts = Array.from(dashes);
        // console.log("We are on new scripts",newScripts);
        for (let index = 0; index < newStatus.length; index++) {
           newScripts[index].textContent = newStatus[index]
        }
    }
}



export {Panel};