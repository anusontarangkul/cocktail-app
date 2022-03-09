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
            state.userEmail = action.payload.useEmail
            console.log('redux', state.userName)
        },
        setUserLogOutState: (state, action) => {
            state.userName = null
            state.userEmmail = null
            console.log('redux', state.userName)
        }
    }
});

export const {
    setActiveUser, setUserLogOutState
} = userSlice.actions

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail
export default userSlice.reducer