class PokenApi{
    constructor(){
        this.randomNumber = Math.floor(Math.random() *(200 - 0 ));
    }

    async logMovies(id) {
        console.log(id);
        const endpoint = new URL( `https://pokeapi.co/api/v2/pokemon/${id}/`)
        try {
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error(error);
        }

    }

      


}

export {PokenApi};