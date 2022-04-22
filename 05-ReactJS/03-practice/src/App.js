import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Department from './school/Department';
import Professor from './school/Professor';
import Student from './school/Student';
function App() {
  return (
    <div>
      <h1> School </h1>
      <br />
      <hr/>
      <nav>
        <Link to='/Department'>학과 목록</Link> | &nbsp;
        <Link to='/Professor'>교수 목록</Link> | &nbsp;
        <Link to='/Student'>학생 목록</Link> | &nbsp;
      </nav>
      <table>

      </table>

    <Routes>
      <Route path="/Department" element={<Department/>}/>
      <Route path="/Professor" element={<Professor/>}/>
      <Route path="/Student" element={<Student/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
