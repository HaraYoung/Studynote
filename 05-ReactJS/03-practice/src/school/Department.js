import React from "react";
import School from "../myschool.json";
import {useParams} from 'react-router-dom';

const Department = () => {

    let {department}= School;
    const Departments= department.map((item,index) =>{
        return (
            <tbody>
                <td key={index}>{item.loc}</td>
                <td key={index}>{item.dname}</td>
                <td key={index}>{item.id}</td>
            </tbody>
        );
    });
  return (
    <div>
      <h2>학과 목록</h2>
      <table border="1">
        <thead>
          <th>학과 번호</th>
          <th>학과 이름</th>
          <th>학과 위치</th>
        </thead>
            {Departments}
      </table>
    </div>
  );
};

export default Department;
