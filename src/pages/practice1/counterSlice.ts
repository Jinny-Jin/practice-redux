import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState: {number : 0, inputValue : 0},
    reducers: {
        increment : (state,action) => {
            state.number = state.number + action.payload
        },
        input : (state, action) => {
            state.inputValue = action.payload
         }
    }
})
export default counterSlice

export const {increment, input} = counterSlice.actions