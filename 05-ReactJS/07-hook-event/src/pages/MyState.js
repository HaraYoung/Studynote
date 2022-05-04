import React from 'react';

/**state(상태)값 정의
 * 이 페이지 안에서 유효한 전역변수같은 개념
 * const [변수이름, 변수에대한 setter함수]= React.useState(변수의 기본값);
 * state값은 직접 변경할수없고, 반드시 setter를 통해서만 변경 가능
 * useState()함수에 전달하는 값은 state값에 대한 초기값임
 */

const MyState=() =>{
    const [myName, setMyName]= React.useState('');
    const [myPoint, setMyPoint]= React.useState(50);

    //이벤트 핸들러로 사용될 함주는 컴포넌트 함수안에서 정의됨
    const onMyNameChange= e=> {
        //e.currentTarget은 jQuer의 $(this)에 해당- 즉 이벤트가 발생한 자신 (여기선 <input>)
        setMyName(e.currentTarget.value);
    };
    return(
        <div>
            <h2> My State </h2>
            {/*state값을 출력할때는 단순히 변수값으로서 사용함 */}
            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>
            <hr />
            <div>
                <label htmlFor="myNameInput">이름 : </label>
                <input type="text" id="myNameInput" value={myName} onChange={onMyNameChange}/>
            </div>
            <div>
                <label htmlFor='myPointInput'>점수 : </label>
                <input type='text' id="myPointInput" min='0' max='100' value={myPoint} step='1'
                //이벤트 핸들러를 익명 화살표 함수형식으로 정의한 경우
                onChange={e=> {
                    //자기 스스로의 입력값을 myName이라는 state값에 반영함
                    setMyPoint(e.currentTarget.value);
                }}/>
            </div>
        </div>
    )
    
}
export default MyState;