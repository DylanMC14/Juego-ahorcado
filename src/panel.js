class Panel{
    constructor(){
        this.arreglo = ["Hola","Correo","Automovil","Avion","Submarino","Helicoptero","Estacion"];
        this.selectWord = "";
        this.arregloBusca = []
        this.arregloGuiones = []
    }

    pintarGuiones(){
        let number = this.arreglo[Math.floor(Math.random() * this.arreglo.length)];
        this.arregloBusca = Array.from(number)
        console.log(this.arregloBusca);
        this.selectWord = number;
        for (let index = 0; index < number.length; index++) {
            const lineas = document.createElement("p");
            lineas.textContent = "_";
            this.arregloGuiones.push('_')
            const cajaGuiones = document.querySelector(".cajaGuiones");
            cajaGuiones.appendChild(lineas);
        }
        console.log(number);
    }

    addWord(){
        var context = document.getElementById("input");
        
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

    pintarPalabra (letraviene){
       console.log('seleccionaste ', letraviene);
        this.arregloBusca.map((letra, posicion) =>{
            if(letra == letraviene || letra == letraviene.toLowerCase()){
                console.log('correcta');
                this.arregloGuiones[posicion] = letraviene;
            }
        })

        var context = document.querySelector("cajaGuiones");

        for (let index = 0; index < this.arregloGuiones.length; index++) {
           const h1 = document.createElement('h1')
           h1.textContent = this.arregloGuiones[index]

        //    context.appendChild(h1)
            
        }
        console.log(this.arregloGuiones);
        console.log(this.arregloBusca);
        
        
    }
}



export {Panel};