class Panel{
    constructor(){
        this.arreglo = ["Hola","Correo","Automovil","Avion","Submarino","Helicoptero","Estacion"]
        this.selectWord = ""
    }

    pintarGuiones(){
        let number = this.arreglo[Math.floor(Math.random() * this.arreglo.length)];
        this.selectWord = number;
        for (let index = 0; index < number.length; index++) {
            const lineas = document.createElement("p");
            lineas.textContent = "_";
            const cajaGuiones = document.querySelector(".cajaGuiones");
            cajaGuiones.appendChild(lineas);
        }
        console.log(number);
    }
}

// const panel = new Panel();
// panel.pintarGuiones();


export {Panel};