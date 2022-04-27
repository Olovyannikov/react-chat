import { configureStore } from '@reduxjs/toolkit';
import { chatApi } from 'client/services/chatApi';
import { combineReducers } from 'redux';
import { models } from './models';

const rootReducer = combineReducers({
    ...models,
    [chatApi.reducerPath]: chatApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
