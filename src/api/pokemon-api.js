class PokenApi{
    constructor(){
        this.randomNumber = Math.floor(Math.random() *(200 - 0 ));
    }

    async logMovies(id) {
        console.log(id);
        const endpoint = new URL( `https://pokeapi.co/api/v2/pokemon/${id}/`)
        const response = await fetch(endpoint);
        if (response.status === 404) {
            console.log('No se encontro');
            return;
        }
        const data = await response.json();
        return data;

    }

  
      


}

export {PokenApi};