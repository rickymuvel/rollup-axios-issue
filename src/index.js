import axios from 'axios';

(async () => {
    const responde = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');
    console.log(responde.data);
})()