import { configureStore } from '@reduxjs/toolkit'

import showCartReducer from './showCart'

const store = configureStore({
    reducer: {
        showCart: showCartReducer
    }
})

export default store