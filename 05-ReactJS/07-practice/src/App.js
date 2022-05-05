import React from 'react';

/* 7-1문제
-Meta x, Route x, App에서 직접 구현
-rownum이라는 상태변수 생성-기본값 0
-input태그에 숫자 입력시 rownum의 값이 변해 값만큼의 행이 생성 */

/*7-2문제
  -버튼 클릭 이벤트는 useCallback을 활용
  -버튼 클릭시 입력값 두개와 드롭다운의 선택값을 추출해 json으로 묶어 reducer함수의 action으로 전달
  -reducer함수는 전달받은 action을 활용해 사칙연산을 수행한 후 상태값을 갱신
  -상태값이 변경됨을 감지해 그 값이 짝수일때와 홀수일때 색상을 다르게 적용   */

function App() {
  // //결과를 출력할 <div>에 대한 참조 변수
  // const div= React.useRef();

  // //상태값 정의
  // const [rowNum, setRowNum]= React.useState(0);
  // //입력값을 상태값에 적용
  // const onRowNumChange= e=> setRowNum(e.currentTarget.value);
  // //상태값이 변경된경우 실행할 함수
  // React.useEffect(()=>{
  //   let foo= '';
  //   for (let i=0; i<rowNum; i++){   //행
  //     let str ="";
  //     for (let j=0; j<i+1; j++){  //열
  //         str +="*";
  //     }
  //     foo+= str+ '<br/>';
  //   }
  //   div.current.innerHTML= foo;
  // },[rowNum]);

  return (
    <div>
      <h2> Hook event 박세영 연습문제</h2>
      {/* <h3>useState, useEffect, useRef를 이용한 별찍기</h3>
      <br/>
      <hr/>
      <div>
          <label htmlFor='numInput'> rowNum :: </label>
          <input type='text' id='numInput' value={rowNum} onChange={onRowNumChange}/>
      </div>
      <br/>
      <hr/>
      <div ref={div}></div> */}

      <h3>useReducer, useMemo, useCallback을 활용한 사칙연산</h3>
      <br/>
      <hr/>
      <br/>
      <input type='number'/>
      <select>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type='number'/>
      <button> 결과 확인! </button>
      <br/>
      <hr/>
      <h1>결과 값 ::{}</h1>
    </div>
  );
}

export default App;
