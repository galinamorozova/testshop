import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isBasketShown: true,
    chosenProducts: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasketShown: (state, action) => {
            state.isBasketShown = !state.isBasketShown;
        },
        chooseProducts: (state, action) => {
            state.chosenProducts.push(action.payload);
        },
        clearChosenProducts: (state) => {
            state.chosenProducts = [];
        },
    },
});

export const { setBasketShown, chooseProducts, clearChosenProducts } = basketSlice.actions;

export default basketSlice.reducer;
