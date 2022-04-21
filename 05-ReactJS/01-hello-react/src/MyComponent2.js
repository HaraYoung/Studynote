//리액트 패키지 참조(모든 js파일 최 상단에 *필수*명시)
import React from 'react';
import MySubComponent from './MySubComponent';

const MyComponent2= ()=> {
    return(
        <div>
            <h2> HELLO REACT</h2>
            <p>This is React Component</p>
            <MySubComponent/>
            <MySubComponent/>
        </div>
    );
};
export default MyComponent2;