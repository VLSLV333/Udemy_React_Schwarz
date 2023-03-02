import { configureStore } from '@reduxjs/toolkit'

import showCartReducer from './showCart'
import cartOrderReducer from './cartOrder'
// import menuReducer from './menu'

const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        cartOrder: cartOrderReducer,
        // menu: menuReducer,
    }
})

export default store