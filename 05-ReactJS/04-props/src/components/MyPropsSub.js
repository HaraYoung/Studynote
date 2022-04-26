import React from 'react';
/*props
- 컴포넌트를 사용하는 부모로부터 전달받은 변수값이 포함되어있는 객체
- 필요한 경우에만 선언
- 흔히 컴포넌트에게 HTML속성같은 형태로 전달됨 */
const MyPropsSub= (props)=>{
    console.group('MyPropsSub');
    console.log(props);
    console.log(typeof props.name);
    console.log(typeof props.age);
    console.groupEnd();

    return (
        <div>
            <h3> My Props Sub</h3>
            <p>제 이름은 <b>{props.name}</b>이고, 나이는 <b>{props.age}</b>입니다.</p>
        </div>
    );
};

/*속성값이 전달되지 않은 경우에 대비해 기본값을 JSON으로 정의해둘수 있음
defaultProps- 객체 이름 고정
가급적 무조건 권장*/

MyPropsSub.defaultProps = {
    name: '이름 없음',
    age: 10
};

export default MyPropsSub;