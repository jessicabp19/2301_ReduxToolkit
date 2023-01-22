import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({ //custom Headers para autenticación tambien
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    //Diferentes funciones que llamaré para traer la info
    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),
    })

});

/**
 * El createApi, nos crea customHooks
 * useGetTodosQuery es quien tendrá toda la información necesaria para saber cuando tenemos errores,
 * cuando se cargom cuando se está cargando, etc.
 */
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;