import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import GradeTable from './GradeTable';

function App() {
  return (
    <div>
      <Link to='/grade_table/1'>1학년</Link>
      <Link to='/grade_table/2'>2학년</Link>
      <Link to='/grade_table/3'>3학년</Link>
      <Link to='/grade_table/4'>4학년</Link>

    <Routes>
      <Route path='/grade_table/:params' element={<GradeTable/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
