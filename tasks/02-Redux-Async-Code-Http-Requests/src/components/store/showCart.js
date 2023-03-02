import { createSlice } from '@reduxjs/toolkit'

const initialState = {showCart: false}

const showCart = createSlice({
    name: 'showCart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        }   
    }
})

export const showCartActions = showCart.actions

export default showCart.reducer