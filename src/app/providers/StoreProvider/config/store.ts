import { configureStore } from '@reduxjs/toolkit';
import { imagesReducer } from 'entities/Images/';
import type { StateSchema } from '../config/StateSchema';
const store = configureStore<StateSchema>({
    reducer: {
        images: imagesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
