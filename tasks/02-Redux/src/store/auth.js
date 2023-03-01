import { createSlice } from '@reduxjs/toolkit'

const logginInitialState = {isAuthentificated: false}

const authSlice = createSlice({
    name: 'authentification',
    initialState: logginInitialState,
    reducers: {
        login(state) {
            state.isAuthentificated = true
        },
        logout(state) {
            state.isAuthentificated = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer