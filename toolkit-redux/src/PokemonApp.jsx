import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  //Si quiero hacer algo cuando el componente es creado la 1era vez y solo 1 vez, usaré el useEffect

  const { page, pokemons, isLoading } = useSelector(state => state.pokemons)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True' : 'False'} </span>
      <ul>
        {
          pokemons.map( ({ name }) => 
            <li key={name}>{ name }</li>
          )
        }
      </ul>
      <button
        disabled={ isLoading }
        onClick={ () => dispatch(getPokemons(page)) } 
      >
        Next
      </button>
    </>
  )
}
