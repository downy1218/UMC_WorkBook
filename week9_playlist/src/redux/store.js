import { configureStore } from "@reduxjs/toolkit";
import musicReducer from './slice';
import modalRducer from './modalSlice';

export const store = configureStore({
    reducer:{
        musicFunctions: musicReducer,
        modalFunctions: modalRducer
    }
})