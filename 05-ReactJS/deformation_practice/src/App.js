import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Department from "./school/Department";
import Professor from "./school/Professor";
import Student from "./school/Student";
import './assets/css/menu.css';

function App() {
  return (
    <div className="App">
      <h1> School </h1>
      <br />
      <hr />
      <nav>
        <NavLink className='normalLink' to="/Department">학과 목록</NavLink> | &nbsp;
        <NavLink className='normalLink' to="/Professor">교수 목록</NavLink> | &nbsp;
        <NavLink className='normalLink' to="/Student">학생 목록</NavLink> | &nbsp;
      </nav>
      <table>
        <Routes>
          <Route path="/Department" element={<Department />} />
          <Route path="/Professor" element={<Professor />} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </table>
    </div>
  );
}

export default App;
