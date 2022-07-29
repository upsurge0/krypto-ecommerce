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
            if (!state.items.find((i) => i.id === item.id)){
                state.items.push(item)
                state.error = null
            }
            else state.error = 'Item already added to favourites'
        },
    },
})

// Action creators are generated for each case reducer function
export const { addFavourite } = userSlice.actions

export default userSlice.reducer
