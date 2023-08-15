class Panel{
    constructor(){
        this.cajaGuiones = document.querySelector(".cajaGuiones");
    }

    paintPanel(palabra){
        this.cajaGuiones.textContent = palabra;
    }

    actualizarpanel(nuevoStatus){
        console.log("estoy en panel",nuevoStatus);
        var guiones = document.querySelectorAll(".parrafo");
        console.log("estamos en guiones",guiones);
        var nuevosGuiones = Array.from(guiones);
        console.log("estamos en nuevos guiones",nuevosGuiones);
        for (let index = 0; index < nuevoStatus.length; index++) {
           nuevosGuiones[index].textContent = nuevoStatus[index]
            
        }
    }
}



export {Panel};