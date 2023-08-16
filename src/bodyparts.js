class BodyParts{
    constructor(){
        this.containerImage = document.getElementById("image");
        this.element = document.getElementById("muzan");
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
    }

    updateImage(strikes){
        this.element.style.visibility= 'visible';
        console.log('update: ',strikes);
        this.element.src= this.images[strikes];
    }

}

export {BodyParts};