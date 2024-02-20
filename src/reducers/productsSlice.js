import {createAction, createSlice} from '@reduxjs/toolkit'

export const initialState  = {
    food: [],
    clothes: [],
    gadgets: [],
    startPosition: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setStartPosition: (state, action) => {
            state.startPosition= action.payload;
        },
        getFoodList: (state, action) => {
            state.food = action.payload;
        },
        getClothesList: (state, action) => {
            state.clothes = action.payload;
        },
        getGadgetsList: (state, action) => {
            state.gadgets = action.payload;
        },
    },
})

export const GET_FOOD_LIST = 'product/getFoodLst';
export const foodArray = createAction(GET_FOOD_LIST);
export const GET_CLOTHES_LIST = 'product/getClothesLst';
export const clothesArray = createAction(GET_CLOTHES_LIST);
export const GET_GADGETS_LIST = 'product/getGadgetsLst';
export const gadgetsArray = createAction(GET_GADGETS_LIST);

export const { setStartPosition, getFoodList, getClothesList, getGadgetsList, getFood } = productsSlice.actions;

export default productsSlice.reducer;