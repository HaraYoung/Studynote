import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CssClass from './pages/CssClass';
import CssModule from './pages/CssModule';
import InlineCss from './pages/InlineCss';
import Scss from './pages/Scss';
import ScssModule from './pages/ScssModule';
import StyledComponent from './pages/StyledComponent';
import News from './pages/News';

import './assets/css/menu.css';


function App() {
  /*InlineCSS정의
  -CSS는 JS속성으로 기술해야함
  -전체 구조는 JSON객체
  : 단위가 포함되는 수치값- 문자열 표기
    한쌍의 속성-값 뒤에는 세미콜론이 아닌 콤마가 위치함 */
  const myStyle={
    fontWeight: 'bold',
    color: 'brown',
    textDecoration: 'none',
    marginLeft: '30px'
  };
  return (
    <div>
      <h1 style={myStyle}>05- stylesheet</h1>
      <nav>
        <NavLink className='normalLink' to='/inline_css'>
          InlineCss
        </NavLink>
        <NavLink className='normalLink' to='/css_class'>
        CssClass
        </NavLink>
        <NavLink className='normalLink' to='/css_module'>
        CssModule
        </NavLink>
        <NavLink className='normalLink' to='/scss'>
          Scss
        </NavLink>
        <NavLink className='normalLink' to='/scss_module'>
          Scss Module
        </NavLink>
        <NavLink className='normalLink' to='/styled_component'>
          Styled Component
        </NavLink>
        <NavLink className='normalLink' to='/news'>
          News Demo
        </NavLink>

      </nav>
      <hr/>
      <Routes>
        <Route path='/inline_css' element={<InlineCss/>}/>
        <Route path='/css_class' element={<CssClass/>}/>
        <Route path='/css_module' element={<CssModule/>}/>
        <Route path='/scss' element={<Scss/>}/>
        <Route path='/scss_module' element={<ScssModule/>}/>
        <Route path='/styled_component' element={<StyledComponent/>}/>
        <Route path='/news/*' element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
