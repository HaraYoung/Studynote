import React from 'react';
import PropTypes from 'prop-types';

const MyChildrenSub= ({width, height, children}) =>{
    //CSS속성값을 변수화할 경우 JSON 객체로 구성함
    const myStyle={
        //부모로부터 전달받은 props에 포함된 값으로 width,height결정
        width: width+ 'px',
        height: height+ 'px',
        border: '5px solid black',
        padding: '20px',
        margin: '10px',
        backgroundColor: 'gray'
    };
    return (
        <div>
            <h3> My Children Sub</h3>
            {/*부모 컴포넌트가 자신을 호출할때 시작태그와 끝태그 사이에 명시하는 내용=> children */}
            <div style={myStyle}>{children}</div>
        </div>
    );
};

//속성들에 대한 타입 정의
MyChildrenSub.prototype= {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string
};

//속성들에 대한 기본값을 JSON으로 정의- 객체이름 고정
MyChildrenSub.defaultProps= {
    width:300,
    height:100,
    children: '내용이 없습니다.'
};

export default MyChildrenSub;