import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: false, notification: null };

const showCart = createSlice({
	name: 'showCart',
	initialState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
		hideNotification(state) {
			state.notification = null;
		},
	},
});

export const showCartActions = showCart.actions;

export default showCart.reducer;
