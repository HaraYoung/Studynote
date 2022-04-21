//리액트 패키지 참조(모든 js파일 최 상단에 *필수*명시)
import React from 'react';
import MySubComponent from './MySubComponent';

/*함수형 컴포넌트 정의
- 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적*/

/*리턴은 항상 HTML 구조를 의미하는 JSX문법이여야 함
JSX구조는 무조건 *단 하나의 태그요소만* 반환 해야함
=>복잡한 구조는 부모요소 하나에 모두 포함되어야 한다는 의미*/

const MyComponent1= ()=> {
    return(
        <div>
            <h2>안녕하세요 리액트</h2>
            <p>리액트 컴포넌트 구조 연습입니다.</p>
            <MySubComponent/>
            <MySubComponent/>
             <MySubComponent/>
            <MySubComponent/>
        </div>
    );
};
export default MyComponent1;