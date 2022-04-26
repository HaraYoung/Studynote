import React from 'react';
import MyChildrenSub from '../components/MyChildrenSub';
import Meta from '../components/Meta';

const MyChildren = () =>{
    return(
    <div>
        {/*Route처리를 적용받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어씀 */}
        <Meta title="MyChildren.js" description="여기는 MyChildren.js파일!" url={window.location.href}/>

        <h2> My Children </h2>
        {/*props 전달시 문자열외의 데이터타입은 중괄호로 묶어야함 */}
        <MyChildrenSub width={400} height={100}><b>Hello!!</b></MyChildrenSub>
        <MyChildrenSub width={300} height={80}>안녕하세요!</MyChildrenSub>
        <MyChildrenSub width={200} height={50}/>
    </div>
    );
};

export default MyChildren;
