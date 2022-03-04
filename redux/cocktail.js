import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCocktails = createAsyncThunk(
    'cocktail/getCocktails',
    async (search) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => res.json())
    }
)

const initialState = {
    results: [],
    display: "",
    status: null
}


export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    extraReducers: {
        [getCocktails.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCocktails.fulfilled]: (state, action) => {
            state.results = action.payload
            state.display = action.meta.arg
            state.status = 'success'
        },
        [getCocktails.rejected]: () => {
            state.status = 'failed'
        }
    }
})


export default cocktailSlice.reducer