import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';

const store= configureStore({
    reducer: {
        //개발자가 직접 작성한 reducer들이 명시되어야 한다.
        //별칭= key ,객체이름= 값 =>slice가 늘어날때마나 해줌
        counter: CounterSlice
    }
});

export default store;