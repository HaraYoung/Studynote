import React from "react";
import School from "../myschool.json";
const Professor = () => {
  let { professor } = School;

  return (
    <div>
      <h2>교수 목록</h2>
      <table border="1">
        <thead>
          <th>교수 번호</th>
          <th>교수 이름</th>
          <th>아이디</th>
          <th>직급</th>
          <th>급여</th>
          <th>입사일</th>
          <th>보직 수당</th>
          <th>소속 학과 번호</th>
        </thead>
        {professor.map((item, index) => {
          return (
            <tbody>
              <td key={index}>{item.id}</td>
              <td key={index}>{item.name}</td>
              <td key={index}>{item.userid}</td>
              <td key={index}>{item.position}</td>
              <td key={index}>{item.sal}</td>
              <td key={index}>{item.hiredate}</td>
              {/*{item.hiredate.substring(0, 10)} */}
              <td key={index}>{item.comm}</td>
              <td key={index}>{item.deptno}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Professor;
