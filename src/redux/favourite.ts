import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'

export interface FavouriteState {
    items: Product[]
    error: string | null
}

const initialState: FavouriteState = {
    items: [],
    error: null,
}

export const userSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<Product>) => {
            const item = { ...action.payload }
            state.error = null
            if (!state.items.find((i) => i.id === item.id)){
                state.items.push(item)
            }
            else state.error = 'Item already added to favourites'
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addFavourite, setError } = userSlice.actions

export default userSlice.reducer
