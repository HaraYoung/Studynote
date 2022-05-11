import React from 'react'
import {useParams} from 'react-router-dom';

const data={
    velopert:{
        name: 'John',
        description: '리액트 개발자'
    },
    gildong:{
        name: '홍길동',
        description: '홍길동전 주인공'
    }
}
const URLparameter = () => {
    const params= useParams();
    const profile= data[params.username];
  return (
    <div>
        <h1>사용자 프로필</h1>
        {profile ?(
        <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
        </div>
        ): (
            <p>존재하지 않는 프로필 입니다.</p>
        )}
    </div>
  )
}

export default URLparameter;