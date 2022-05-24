import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import accidentSlice from './slice/AccidentSlice';

const store= configureStore({
    reducer: {
        accident: accidentSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false})],
    devtools: true
});

export default store;