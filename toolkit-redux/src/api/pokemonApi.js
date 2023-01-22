import axios from 'axios';

//Nos permite crear una instancia
/**
 * Axios.create nos permite crear una configuración estandar que me ayuda a no repetir el código una y otra vez
 * Muy util cuando enviamos tokens de autentiación en c/una de las peticiones
 */
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})