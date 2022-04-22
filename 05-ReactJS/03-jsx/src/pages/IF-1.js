import React from 'react';

//JSX조건 분기-1 : 함수를 통한 리턴값 분기
const If1= () => {
    //조건에 따라 다른 jsx를 반환하는 함수 정의
    const btnLogin = (isLogin) => {
        if(isLogin=== true) {
            return (<button type="button">Logout</button>);
        }else {
            return (<button type="button">Login</button>);
        }
    };

    //조건에 따라 다른 결과를 표시하는 첫번째 방법:: 호출하는 함수안에서 판별
    return (
        <div>
            <h2>IF-1</h2>
            {btnLogin(true)}
        </div>
    );
};

export default If1;