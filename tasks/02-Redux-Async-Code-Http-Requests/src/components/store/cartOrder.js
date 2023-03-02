import { createSlice } from '@reduxjs/toolkit'

const initialState = {cartOrder: [], together: 0}

const cartOrder = createSlice({
    name: 'cartOrder',
    initialState,
    reducers: {
        addToCart(state, action){
            let orderedItem = action.payload
            let olreadyInCart = state.cartOrder.find(item => item.title === orderedItem.title)
            state.together += 1

            if (olreadyInCart){
                olreadyInCart.quantity += 1
            } else {
                state.cartOrder.push(action.payload)
            }
        },  
        removeFromCart(state, action){
            let olreadyInCart = state.cartOrder.find(item => item.title === action.payload.title)
            olreadyInCart.quantity -= 1
            state.together -= 1
            if(olreadyInCart.quantity === 0){
                state.cartOrder = state.cartOrder.filter(item => item.title !== action.payload.title)
            }
        }
    }
})

export const cartOrderActions = cartOrder.actions

export default cartOrder.reducer