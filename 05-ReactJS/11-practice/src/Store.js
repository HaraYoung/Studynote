import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import NewsSlice from './slice/NewsSlice';

const store= configureStore({
    reducer: {
        news: NewsSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false})],
    devtools: true
});

export default store;