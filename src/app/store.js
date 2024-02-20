import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import productsWatcher from "../sagas/productSaga";
import productsReducer from '../reducers/productsSlice'
import basketReducer from "../reducers/BasketSlice";


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
     products: productsReducer,
      basket: basketReducer,
  },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare)

});

sagaMiddleWare.run(productsWatcher)

