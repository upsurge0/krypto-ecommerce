import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'

export interface CartItem extends Product {
    quantity: number
}

export interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

export const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const item = {...action.payload, quantity: 1}
            if(!state.items.find(i => i.id === item.id))
                state.items.push(item)
            // else return('Already added to cart')
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload)
            
            if (item){
                item.quantity += 1
                // state.items = [item, ...state.items]
            } 
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload)
            
            if (item && item?.quantity !== 1){
                item.quantity -= 1
            } 
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = userSlice.actions

export default userSlice.reducer
