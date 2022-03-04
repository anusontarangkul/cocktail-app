import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './cocktail';

export default configureStore({
    reducer: {
        cocktail: cocktailReducer
    },
})