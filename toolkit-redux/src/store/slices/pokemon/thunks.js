//It will have all the thunks (async tasks) related with pokemons

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//getState: we can call it to get all the root state

export const getPokemons = (page = 0) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //TODO: realizar petición http (await fetch or axios)

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`)
        // const data = await resp.json();
        
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`)

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}