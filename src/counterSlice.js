import { createSlice } from "@reduxjs/toolkit";
// This is a slice of the Redux store that manages a counter

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
    },
});


export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
// This is the reducer function that will be used in the Redux store