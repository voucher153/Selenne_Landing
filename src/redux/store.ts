import { landingSlice } from './../reducers/LandingSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
    landingSlice
})

export const store = configureStore({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch