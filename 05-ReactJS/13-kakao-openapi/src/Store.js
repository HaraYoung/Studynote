import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import KakaoSlice from './slice/KakaoSlice';

const store= configureStore({
    reducer: {
        kakao: KakaoSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck: false})],
    devtools: true
});

export default store;