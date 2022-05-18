import React from 'react';
import {Routes, Route} from 'react-router-dom';

import GradeAdd from './pages/GradeAdd';
import GradeList from './pages/GradeList';
import GradeEdit from './pages/GradeEdit';


function App() {
  return (
    <div>
      <h1> 10- Axios Hooks CRUD</h1>
      <br />
      <Routes>
        <Route path="/" export={true} element={<GradeList/>}/>
        <Route path='/add' element={<GradeAdd/>}/>
        <Route path='/edit/:id' element={<GradeEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
