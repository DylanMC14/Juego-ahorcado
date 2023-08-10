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
        
        context.addEventListener('click', () => {
           let value =  context.value
            console.log(value); 
            this.arreglo.push(value);
            console.log(this.arreglo);

            // let haFallado = true;
            // for (let i in number) {
            //     if(value == number[i]){
            //         lineas = reemplazar (lineas,i * 2,value);
            //         haFallado = false
            //         console.log(number);
            //     }
            // }
           
   
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
        // function reemplazar(number,i,character) {
        //     return (number.substring(0,index) +
        //     character +
        //     number.substring(i + character.length)
        //     );
        // };


    }
}



export {Panel};