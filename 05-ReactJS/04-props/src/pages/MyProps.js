import React from 'react';
import MyPropsSub from '../components/MyPropsSub';
import Meta from '../components/Meta';

const MyProps= () => {
    return (
        <div>
            {/*Route처리를 적용받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어씀 */}
            <Meta title="MyProps.js" description="여기는 MyProps.js파일!" url={window.location.href}/>

            <h2> My Props</h2>
            {/*컴포넌트에게 props전달=> 문자열: ''(따옴표)로 감싼다, 그외: {}(중괄호)로 감싼다 */}
            <MyPropsSub/>
            <MyPropsSub name="민호" age="19"/>
            <MyPropsSub name="수영" age={32}/>
        </div>
    );
};

export default MyProps;