import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import CounterSlice from './slices/CounterSlice';
import DepartmentSlice from './slices/DepartmentSlice';

const logger = createLogger();

const store= configureStore({
    reducer: {
        //개발자가 직접 작성한 reducer들이 명시되어야 한다.
        //별칭(slice안의 name의 값)= key ,객체이름= 값 =>slice가 늘어날때마나 해줌
        counter: CounterSlice,
        department: DepartmentSlice
    },
    //middleware와 devtools기능은 같기때문에 둘중 하나만 사용해도 됨, 대부분 devtools사용
    //미들웨어
    //모든 redux동작때 중간에 삽입되어 먼저 실행함,redux가 실행될때 마다 상태값을 로그로 출력해줌
    /*getDefaultMiddleware- ajax같은 비동기 처리할때 사용
    serializableCheck: false => ajax연동할때 반드시 들어가야함
    */
    middleware: [...getDefaultMiddleware({serializableCheck: false}),logger],   
    //redux-devtools-extension을 사용하지 않을 경우 false혹은 이 라인 명시 X
    devtools: true
});

export default store;