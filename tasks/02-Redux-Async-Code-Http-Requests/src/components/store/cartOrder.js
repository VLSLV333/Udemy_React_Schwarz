import { createSlice } from '@reduxjs/toolkit'

const initialState = {cartOrder: [], together: 0}

const cartOrder = createSlice({
    name: 'cartOrder',
    initialState,
    reducers: {
        addToCart(state, action){
            let needNewItemInCart = true
            for (let order of state.cartOrder){
                if (action.payload.title === order.title){
                    order.quantity += 1
                    state.together += 1
                    needNewItemInCart = false
                }
            }
            if (needNewItemInCart){
                state.cartOrder.push(action.payload)
                state.together += 1
            }
        },  
        removeFromCart(state, action){
            for (let order of state.cartOrder){
                if (action.payload.title === order.title){
                    order.quantity -= 1
                    state.together -= 1
                    if(order.quantity === 0){
                        const indexOfRemovedItem = state.cartOrder.indexOf(order)
                        state.cartOrder.splice(indexOfRemovedItem, 1)
                    }
                }
            }
        }
    }
})

export const cartOrderActions = cartOrder.actions

export default cartOrder.reducer