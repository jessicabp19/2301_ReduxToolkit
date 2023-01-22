import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'counter',
    //initialState
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => { 
            //Increment looks like a function but it's a reducer
            //The rest of the 'state' will be returned too (without any modification)
            state.counter += 1
        },
        decrement: (state) => { //This is the definition of the reducer
            state.counter -= 1
        },
        incrementBy: (state, action) => {
            console.log(action)
            state.counter += action.payload
        }
    },
})

export const { increment, decrement, incrementBy } = counterSlice.actions
// 'decrement' is an action creator function, that 'casually' it's called the same way than the reducer

//export default counterSlice.reducer (It's a little weird)