import React from 'react';

/*Meta x, Route x, App에서 직접 구현
rownum이라는 상태변수 생성-기본값 0
input태그에 숫자 입력시 rownum의 값이 변해 값만큼의 행이 생성 */

function App() {
  const [rownum, setRownum]= React.useState(0);
  const onRownumChange= e=> setRownum(e.currentTarget.value);
function Star(x){
  for (let i=0; i<x; i++){   //행 =>7개의 행 생성
    let str ="";
    for (let j=1; j<i+1; j++){  //열
        str +="*";
    }
    console.log(str);
} 
}
  return (
    <div>
      <h2> Hook event 박세영 연습문제</h2>
      <h3>useState, useEffect, useRef를 이용한 별찍기</h3>
      <br/>
      <hr/>
      <div>
          <label htmlFor='numInput'> rownum :: </label>
          <input type='text' id='numInput' value={rownum} onChange={onRownumChange}/>
      </div>
      <br/>
      <hr/>
      <div ref={Star({rownum})}></div>
    </div>
  );
}

export default App;
