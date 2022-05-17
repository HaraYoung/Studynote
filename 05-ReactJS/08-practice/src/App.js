import React from "react";
import Spinner from "./components/Spinner";
import Professor from "./components/Professor";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <header>
        <h1>연습문제 08</h1>
        <br />
        <hr />
        <select>
          <option value="0">--전체 학과 --</option>
        </select>
      </header>
      <h2>학생 목록</h2>
      <Student />
      <br />
      <hr />
      <h2>교수 목록</h2>

      <Professor />
    </div>
  );
}

export default App;
