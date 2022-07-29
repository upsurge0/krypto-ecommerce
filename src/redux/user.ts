import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    email: string
    id: number | null
    accessToken: string
    isLoggedIn: boolean
}
export interface UserData{
    accessToken: string
    user: {
        email: string
        id: number
    }
}


const initialState: UserState = {
    email: '',
    id: null,
    accessToken: '',
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginOrRegister: (state, action: PayloadAction<UserData>) => {
            const {accessToken, user: {email, id}} = action.payload
            state.accessToken = accessToken
            state.email = email
            state.isLoggedIn = true
            state.id = id
        },
        logout: (state, action) => {
            state.accessToken = ''
            state.email = ''
            state.isLoggedIn = false
            state.id = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginOrRegister, logout } = userSlice.actions

export default userSlice.reducer
