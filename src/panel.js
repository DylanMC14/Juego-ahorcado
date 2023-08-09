class Panel{
    constructor(){
        this.arreglo = ["Hola","Correo","Automovil","Avion","Submarino","Helicoptero","Estacion"];
        this.selectWord = "";
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

    addWord(){
        var context = document.getElementById("input");
        
        // let value = '';
        context.addEventListener('click', () => {
           let value =  context.value
            console.log(value); 
            this.arreglo.push(value);
            console.log(this.arreglo);
           
   
           if( !value) { // --No ingrese un campo vacio o numeros solos-- \\
               Swal.fire({
                   title: 'Enter text',
                   showClass: {
                       popup: 'animate__animated animate__fadeInDown'
                   },
                   hideClass: {
                       popup: 'animate__animated animate__fadeOutUp'
                   }
               }); return;
           }else if(!isNaN(value)) {
               Swal.fire({
                   title: 'Not a text',
                   showClass: {
                     popup: 'animate__animated animate__fadeInDown'
                   },
                   hideClass: {
                       popup: 'animate__animated animate__fadeOutUp'
                   }
               }); return; 
   
           }

        })


    }
}

// const panel = new Panel();
// panel.pintarGuiones();


export {Panel};