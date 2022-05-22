import React from 'react';

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import {useSelector, useDispatch} from 'react-redux';

//Slice에 정의된 액션함수들 참조
import {plus, minus} from '../slices/CounterSlice';     //상태값을 갱신하는 함수들

const Counter = () => {
    //컴포넌트가 마운트될때 콘솔의 모든 내용 삭제함(출력 결과가 복잡해 지는것을 방지)
    React.useEffect(()=> console.clear(),[]);

    //hook를 통해 slice가 관리하는 상태값 가져오기
    const {number, color} = useSelector((state)=> state.counter);
    /*useSelector라는 함수로 콜백을 받음
    -> 콜백에 전달된 파라미터 state= store에서 정의된 configureState를 통해 정의된  reducer.여기서는 counter: counterSlice
    = state={counter: counterSlice}
    사용하고 싶은것은 counterSlice임 => state.counter
    counterSlice가 내보내고 있는것은 counterSlice.reducer
    */

    //dispatch함수 생성
    const dispatch= useDispatch();

  return (
    <>
        <div style={{display:'flex'}}>
            <button onClick={(e)=> { dispatch(plus(5));}}> +5 </button>     {/*dispatch한다 = 함수를 dispatch안에 넣어야 실질적으로 slice가 동작함 */}
            <h2 style={{
                color: color,
                margin: '10px',
                width: '50px',
                textAlign: 'center'
            }}>{number}
            </h2>
            <button onClick={(e)=> { dispatch(minus(3));}}> -3 </button>
        </div>    
    </>
  )
}

export default React.memo(Counter);