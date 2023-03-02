import { configureStore } from '@reduxjs/toolkit'

import showCartReducer from './showCart'
// import menuReducer from './menu'
import cartOrderReducer from './cartOrder'

const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        // menu: menuReducer,
        cartOrder: cartOrderReducer
    }
})

export default store