import React from 'react';

//기본 표현식 연습

const Expr= () => {
    //사용자 정의 변수
    const name= '리액트';
    const age= 28;
    const color= '#0682';
    const message= '리액트는 가장 주목받는 프론트엔드 프레임워크 입니다';

    //개발자가 직접 정의한 함수
    const myEllipsis= (message, len)=> {
        let str= message;
        if(str.length>len){
            str= str.substring(0,len)+ '...';
        }
        return str;
    };
    return (
        <div>
            <h2>EXpr <small>(jsx 기본 표현식)</small></h2>
            
            {/*기본 변수 출력- 간단한 사칙 연산 가능 */}
            <h3>{name}님은 {age- 5}세 입니다</h3>
            <p>
                <font color="#033">{name}</font>님은&nbsp;
                {/*html속성에 변수를 출력할 경우 따옴표를 사용할수 없음 */}
                <font color={color}>리액트 개발자</font>입니다.
            </p>
            {/*사용자 정의 함수 호출 */}
            <blockquote>{myEllipsis(message,15)}</blockquote>
        </div>
    );
};

export default Expr;