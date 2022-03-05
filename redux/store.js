import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from './cocktail';
import singleCocktailReducer from './singleCocktail'
import userReducer from '../features/userSlice'

export default configureStore({
    reducer: {
        cocktail: cocktailReducer,
        singleCocktail: singleCocktailReducer,
        user: userReducer
    },
})