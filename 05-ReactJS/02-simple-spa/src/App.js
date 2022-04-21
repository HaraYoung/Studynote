import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Main from './page/Main'
import DepartmentGet from './page/DepartmentGet';
function App() {
  return (
    <div>
      <h1> 02-simple-spa</h1>
      <hr/>
      {/*링크 구성 부분 */}
      <nav>
        <Link to='/'>[HOME]</Link>
        <br/>
        <Link to='/about'>[About]</Link>
        <br/>
        <Link to='/main'>[Main(SubRoute)]</Link>
        <br/>
        <Link to='/department_get?id=101&msg=hello'>[컴퓨터공학과]</Link>
        <br/>
        <Link to='/department_get?id=102&msg=world'>[멀티미디어학과]</Link>
      </nav>

      {/*페이지 역할을 할 컴포넌트 명시 하기*/}
      <Routes>
        {/*첫 페이지로 사용되는 컴포넌트의 경우 exact={true}*를 명시해아하며
           컴포넌트는 path에 '/'를 권장 */}
           <Route path="/" element={<Home/>} exact={true}/>
           <Route path="/about" element={<About/>}/>
           {/*서브라우팅 사용 */}
           <Route path="/main/*" element={<Main/>} />
           {/*GET파라미터 사용 */}
           <Route path="/department_get" element={<DepartmentGet/>}/>

      </Routes>
    </div>
  );
};

export default App;
