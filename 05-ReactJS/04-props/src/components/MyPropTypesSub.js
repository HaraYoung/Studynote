import React from 'react';
import PropTypes from 'prop-types';
/*컴포넌트 props의 필수 여부를 지정하거나 props의 DateType을 저정할때 사용
-> https://reactjs-kr.firebaseapp.com/docs/typechickimg-with-proptypes.html */

//const MyPropTypesSub= (props) =>{}
/*const {name, age,hobby}= props; 
비구조 문법을 통해 변수속성값을 변수로 선언*/
const MyPropTypesSub= ({name, age, hobby})=>{
    return(
        <div>
            <h3> My PropTypes Sub</h3>
            <p>안녕사헤요, 제 이름은 {name}이고, 나이는 {age}세 입니다.</p>
            <p>{hobby && (<span>취미는 {hobby} 입니다.</span>)}</p>
        </div>
    );
};

/*이 컴포넌트로 전달되는 props값들에 대한 형식(datatype)과 필수 여부 지정
규칙에 맞지않는 props값에 대해 브러우저 개발자 콘솔에 Warning 메세지가 출력됨*/
MyPropTypesSub.propTypes= {
    name: PropTypes.string,
    //name속성의 데이터티입을 문자열로 지정
    age: PropTypes.number,
    hobby: PropTypes.string.isRequired
    /*hobby의 데이터타입과 필수 여부지정.
    =>필수 여부 설정은 데이터 타입뒤에 '.isRequired'를 추가명시*/
};

export default MyPropTypesSub;