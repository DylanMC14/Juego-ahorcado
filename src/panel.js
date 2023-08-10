class Panel{
    constructor(){
        this.cajaGuiones = document.querySelector(".cajaGuiones");
    }

    paintPanel(palabra){
        this.cajaGuiones.textContent = palabra;
    }
}



export {Panel};