import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './cocktail';
import singleCocktailReducer from './singleCocktail'

export default configureStore({
    reducer: {
        cocktail: cocktailReducer,
        singleCocktail: singleCocktailReducer,
    },
})