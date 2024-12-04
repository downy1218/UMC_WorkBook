import { configureStore } from "@reduxjs/toolkit";
import musicReducer from './slice';

export const store = configureStore({
    reducer:{
        musicFunctions: musicReducer
    }
})