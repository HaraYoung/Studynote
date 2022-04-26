import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import  MyProps from './pages/MyProps';
import MyChildren from './pages/MyChildren';
import MyPropTypes from './pages/MyPropTypes';
import Mate from './components/Meta';


function App() {
  return (
    <div>
        {/*Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용됨 */}
        <Mate/>
        <h1>04-props</h1>
        <nav>
          <Link to='/myprops'> [My Props] </Link>
          <br/>
          <Link to='/myproptypes'> [My Proptypes]</Link>
          <br/>
          <Link to='/mychildren'> [My Children]</Link>
        </nav>
        {/*Route 처리할 컴포넌트 정의 */}
        <Routes>
            <Route path="/myprops" element={<MyProps/>}/>
            <Route path="/myproptypes" element={<MyPropTypes/>}/>
            <Route path="/mychildren" element={<MyChildren/>}/>
        </Routes>
    </div>
  );
};

export default App;
