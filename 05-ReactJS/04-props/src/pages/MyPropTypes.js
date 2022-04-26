import React from 'react';
import MyPropTypesSub from '../components/MyPropTypesSub';
import Meta from '../components/Meta';

const MyPropTypes = () => {
    return(
        <div>
        {/*Route처리를 적용받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어씀 */}
        <Meta title="MyPropTypes.js" description="여기는 MyPropTypes.js파일!" url={window.location.href}/>
        <h2> My Prop types</h2>
        <MyPropTypesSub name='민호' age={19} hobby="게임"/>
        <MyPropTypesSub name='수영' age='스물하나' hobby='영화 관람'/>
        <MyPropTypesSub name='철민' age={33}/>
        </div>
    );
};
export default MyPropTypes;