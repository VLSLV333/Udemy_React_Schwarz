import { configureStore } from '@reduxjs/toolkit'

import showCartReducer from './showCart'
import cartOrderReducer from './cartOrder'

const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        cartOrder: cartOrderReducer,
    }
})

export default store