import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authSlice } from '@/features/auth/authSlice';

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: authSlice.reducer,
		},
		devTools: true,
	});

export const wrapper = createWrapper(makeStore);
