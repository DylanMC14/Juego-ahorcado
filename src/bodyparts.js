class BodyParts{
    constructor(){
        this.containerImage = document.getElementById("image");
        this.element = document.getElementById("muzan");
        // this.counter = 0;
        this.images = [
            '../assets/images/1.png',
            '../assets/images/2.png',
            '../assets/images/3.png',
            '../assets/images/4.png',
            '../assets/images/5.png',
            '../assets/images/6.png',
            '../assets/images/7.png'];
        this.element.style.visibility= 'hidden';
    }

    paintImage(){
        this.element.src = this.images[0];
        this.element.style.width = "200px";
        this.element.style.height = "200px";
        
            // var element = document.getElementById("muzan");
            // var image = new Image();
            // image.src = "../assets/images/1.png";
            // image.style.width = "200px";
            // image.style.height = "200px";
            // element.appendChild(image);
    }

    updateImage(strikes){
        this.element.style.visibility= 'visible';
        console.log('update: ',strikes);
        this.element.src= this.images[strikes];
    //     this.counter= 0 ;
    //     var strikes = document.getElementById("amount");
    //     console.log("I am the counter of bodyparts",this.counter);
    //     strikes.textContent = this.counter;
    //     if (this.counter == 1) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/2.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 2) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/3.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 3) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/4.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 4) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/5.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 5) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/6.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 6) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/7.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } else if (this.counter == 7) {
    //         var element = document.getElementById("muzan");
    //         var image = new Image();
    //         image.src = "../assets/images/8.png";
    //         image.style.width = "200px";
    //         image.style.height = "200px";
    //         element.appendChild(image);
    //     } 
    }

}

export {BodyParts};