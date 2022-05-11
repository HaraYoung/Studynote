import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MenuLink from './components/MenuLink';

import News from './pages/News';
import Department from './pages/Department';

function App() {
  return (
    <div>
      <h1>08- Simple Ajax</h1>
      <nav>
        <MenuLink to='/news'>뉴스 목록</MenuLink>
        <MenuLink to='/department'>학과 관리</MenuLink>
      </nav>
      <br />
      <hr />
      <Routes>
        <Route path='/news' element={<News/>}/>
        <Route path='/department' element={<Department/>}/>
      </Routes>
    </div>
  );
}

export default App;
