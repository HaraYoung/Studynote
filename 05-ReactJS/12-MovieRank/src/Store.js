import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import MovieRankSlice from './slice/MovieRankSlice';

const store= configureStore({
    reducer: {
        movieRank: MovieRankSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false})],
    devtools: true
});

export default store;