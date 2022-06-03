/**
 * @filename: Store.js
 * @description: Redux Store
 * @author:박세영(qkrtpdud9899@gmail.com)
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import Covid19Slice from './slices/Covid19Slice';

const store= configureStore({
    reducer: {
        covid19: Covid19Slice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false})],   

    devtools: true
});

export default store;