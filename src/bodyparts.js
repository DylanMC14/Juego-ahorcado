class BodyParts{
    constructor(){
        this.containerImagen = document.getElementById("imagen");
        this.elemento = document.getElementById("muzan");
        this.images = [
            '../assets/images/7.png',
            '../assets/images/6.png',
            '../assets/images/5.png',
            '../assets/images/4.png',
            '../assets/images/3.png',
            '../assets/images/2.png',
            '../assets/images/1.png'];
    }

    paintImage(intentos){
        // this.elemento.src = this.images[intentos];
        // this.elemento = document.getElementById("muzan");
        // var arregloImages = this.images;
        // arregloImages.forEach((rutaImagen)=>{
        //     var imagen = new Image();
        //     imagen.src = rutaImagen;
        //     imagen.style.width = "200px";
        //     imagen.style.height= "200px";
        //     elemento.appendChild(imagen);
        // });

    }

}

export {BodyParts};