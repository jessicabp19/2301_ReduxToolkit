import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis/todosApi';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [ todosApi.reducerPath ]: todosApi.reducer,
    },
    //Un middleware no es más que una función que se ejecuta antes que otra
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat( todosApi.middleware )
})