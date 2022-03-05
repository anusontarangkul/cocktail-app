import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmmail = action.payload.useEmail
            console.log(state.userName)
        },
        setUserLogOutState: (state, action) => {
            state.userName = null
            state.userEmmail = null
        }
    }
});

export const {
    setActiveUser, setUserLogOutState
} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export default userSlice.reducer