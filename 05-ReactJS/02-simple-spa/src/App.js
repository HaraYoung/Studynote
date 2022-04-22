import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Main from './page/Main'
import DepartmentGet from './page/DepartmentGet';
import DepartmentPath from './page/DepartmentPath';
import Error404 from './page/Error404';

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
        {/*HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to='/department_get?id=101&msg=hello'>[컴퓨터공학과]</Link>
        <br/>
        <Link to='/department_get?id=102&msg=world'>[멀티미디어학과]</Link>
        <br/>
        {/*PATH  파라미터를 포함하는 링크 구성 */}
        <Link to='/department_path/201/hello'>[전자공학과]</Link>
        <br/>
        <Link to='/department_path/202/world'>[기계공학과]</Link>

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
           {/*Path파라미터는 URL형식에 변수의 위치와 이름을 정해줘야함
           경로 명시시 앞에 ':(콜론)'이 붙으면 변수로 인식*/}
           <Route path="/department_path/:id/:msg" element={<DepartmentPath/>}/>
           {/*pat속성 없이 Route지정
           => 지정되지않은 모든 요청에 반응.
           단, Routes블록의 맨 마지막에 배치해야함*/}
           <Route path="/*" element={<Error404/>}/>
        </Routes>
    </div>
  );
};

export default App;
