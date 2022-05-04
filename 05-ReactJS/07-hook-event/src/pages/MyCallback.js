import React from 'react';

const MyCallback=() =>{
    //컴포넌트 랜더링시 콘솔에 출력된 내역 삭제
    React.useEffect(()=> console.clear(), []);
    const [myText, setMyText]= React.useState('HELLO React');

    /**컴포넌트가 최초 랜더링 될때 1회만 이벤트 핸들러 함수를 정의하고 이후부터는 계속 재사용됨
     * -만약 두번째 파라미터인 배열에 특정 state값을 지정할 경우 해당 값이 수정될때만 이벤트가 정의됨
     * =>이벤트 핸들러의 중복 정의를 방지해 성능 향상을 꾀함
     */
    const onInputChange= React.useCallback((e)=> {
        setMyText(e.currentTarget.value);
    }, []);
    return(
        <div>
            <h2>My Callback</h2>
            <h3>{myText}</h3>
            <input type='text' placeholder='input...' onChange={onInputChange}/>
        </div>
    );
};
export default MyCallback;