import React from 'react';
/* /src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
    => 현재 소스파일을 기준으로 하는 상대경로 지정,
        실행시 react에 의해 다른 경로로 복사됨*/
import sample from '../assets/img/sample.png';

/* Inline CSS를 적용한 컴포넌트
    ex) <div style='..'></div>*/
const InlineCss= () =>{
    /* CSS로 사용될 JSON객체 정의
        CSS속성 이름은 바닐라JS의 프로퍼티 이름으로 지정해야함
        ex) document.getElementById('hello').style.backgroundColor='#fff';*/
    const myStyle={
        backgroundColor: '#f60',
        fontSize: '20px',
        color: 'brown',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    }
    return(
        <div>
            <h2>InlineCss</h2>
            <h3>변수로 정의된 CSS 참조</h3>
            <div style={myStyle}> Hello React CSS -1</div>
            
            <h3>직접 CSS 코딩</h3>
            <div style={{
                        backgroundColor: '#brown',
                        fontSize: '20px',
                        color: '#f60',
                        fontWeight: 'bold',
                        padding: '10px 25px',
                        marginBottom: '10px'
            }}> Hello React CSS -2</div>

            <h3>이미지 참조</h3>
            {/*이미지 사용시 alt속성을 지정안하면 경고 발생 */}
            <img src={sample} width="240" height="240" alt='샘플'/>

            {/*public폴더에 있는 파일들은 단순 절대경로로 참조가능
                -public폴더 하위에 임의의 폴더생성 가능 */}
            <img src='/logo192.png' width="240" height="240" alt='react'/>
        </div>
    );
};
export default InlineCss;