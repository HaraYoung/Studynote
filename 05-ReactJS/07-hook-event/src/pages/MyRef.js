import React from 'react';
/**
 * react에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */

const MyRef=() =>{
    //컴포넌트 랜더링시 콘솔에 출력된 내역 삭제
    React.useEffect(()=> console.clear(), []);

    //Html태그를 react안에서 참조할수 있는 변수 생성 
    const myDname= React.useRef();
    const myLoc= React.useRef();
    const myResult= React.useRef();
    return(
        <div>
            <h2>My Ref</h2>

        {/*미리 준비한 컴포넌트 참조변수와 html태그를 연결 */}
        <div>
            <label htmlFor='dname'>학과 명</label>
            <input type='text' ref={myDname} id='dname'/>
        </div>
        <div>
            <label htmlFor='dname'>학과 위치</label>
            <input type='text' ref={myLoc} id='loc'/>
        </div>
        <h3>입력 값:: <span ref={myResult}></span></h3>
        <button onClick={e=>{
            /*컴포넌트 참조변수를 사용해 다른 html태그에 접근 가능
            -'참조변수.current' 해당 html을 의미하는 JS DOM 객체
            - myDname.current와 document.querySelector(..), document.getElementById(..)등으로 생성한 객체가 동일한 DOm객체임  */
            console.log(myDname);
            console.log(myLoc);
            
            const dname= myDname.current.value;
            const loc= myLoc.current.value;

            myResult.current.innerHTML= dname+ ', '+ loc;
       
        }}>클릭</button>
        </div>
    );
    
};
export default MyRef;