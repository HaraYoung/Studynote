import React from 'react'
import {useSearchParams} from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail= searchParams.get('detail');
  const mode= searchParams.get('mode');
  console.log(searchParams);
  const onToggleDetail= ()=> {
    setSearchParams({mode, detail: detail=== 'true' ? false : true});
  }
  const onOncereaseMode= ()=> {
    const nextMode= mode=== null ? 1 : parseInt(mode)+ 1;
    setSearchParams({mode: nextMode, detail})
  }
  return (
    <div>
        <h1>About</h1>
        <p>리액트 라우터를 사용</p>
        <p>detail:: <b>{detail}</b></p>
        <p>mode:: <b>{mode}</b></p>
        <button onClick={onToggleDetail}> Toggle detail</button>
        <button onClick={onOncereaseMode}> mode + 1</button>
    </div>
  )
}

export default About;