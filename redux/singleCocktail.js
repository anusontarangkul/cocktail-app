import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCocktail = createAsyncThunk(
    'cocktail/getCocktail',
    async (id) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
    }
)

const initialState = {
    results: [],
    status: null
}


export const singleCocktailSlice = createSlice({
    name: 'singleCocktail',
    initialState,
    extraReducers: {
        [getCocktail.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCocktail.fulfilled]: (state, action) => {
            state.results = action.payload
            state.status = 'success'
        },
        [getCocktail.rejected]: () => {
            state.status = 'failed'
        }
    }
})


export default singleCocktailSlice.reducer