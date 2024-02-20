import { put, takeEvery, call, select } from 'redux-saga/effects';
import {food} from "./db/foodDB";
import {
    GET_CLOTHES_LIST,
    GET_FOOD_LIST, GET_GADGETS_LIST,
    getClothesList,
    getFoodList,
    getGadgetsList
} from "../reducers/productsSlice";
import {pagesStartPosition} from "../selectors";
import {clothes} from "./db/clothesDB";
import {gadgets} from "./db/gadgetsDB";


function* foodWorker() {
   let startPosition = yield select(pagesStartPosition);
    const getFoodData = (position) => ({
        data: food.slice(position, position+6)
    });
    yield put(getFoodList(getFoodData(startPosition)));
}
function* clothesWorker() {
    let startPosition = yield select(pagesStartPosition);
    const getClothesData = (position) => ({
        data: clothes.slice(position, position+6)
    });
    yield put(getClothesList(getClothesData(startPosition)));
}
function* gadgetsWorker() {
    let startPosition = yield select(pagesStartPosition);
    const getGadgetsData = (position) => ({
        data: gadgets.slice(position, position+6)
    });
    yield put(getGadgetsList(getGadgetsData(startPosition)));
}

function* productsWatcher() {
    yield takeEvery(GET_FOOD_LIST, foodWorker)
    yield takeEvery(GET_CLOTHES_LIST, clothesWorker)
    yield takeEvery(GET_GADGETS_LIST, gadgetsWorker)
}

export default productsWatcher
