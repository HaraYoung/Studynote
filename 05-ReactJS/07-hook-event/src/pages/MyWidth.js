import React from 'react';
import useMyWidth from '../hooks/MyHook';

const MyWidth=() =>{
    //컴포넌트 랜더링시 콘솔에 출력된 내역 삭제
    React.useEffect(()=> console.clear(), []);
    const myWidth = useMyWidth();
    return(
        <div>
            <h2>My State</h2>
            <h3>window width: {myWidth} </h3>
        </div>
    );
};
export default MyWidth;