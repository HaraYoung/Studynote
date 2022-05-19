import React from 'react';
import {Routes, Route} from 'react-router-dom';

import PropessorAdd from './pages/PropessorAdd';
import PropessorList from './pages/PropessorList';
import PropessorEdit from './pages/PropessorEdit';

function App() {
  return (
    <>
      <h1> Axios hooks CRUD 연습문제</h1>
      <br />
      <Routes>
        <Route path="/" export={true} element={<PropessorList/>}/>
        <Route path='/add' element={<PropessorAdd/>}/>
        <Route path='/edit/:id' element={<PropessorEdit/>}/>
      </Routes>
    </>
  );
}

export default App;
