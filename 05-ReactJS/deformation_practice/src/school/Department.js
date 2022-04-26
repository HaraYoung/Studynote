import React from "react";
import School from "../myschool.json";
import Styles from '../assets/css/style.module.css';

const Department = () => {
  const DepartmentItem = ({ id, dname, loc }) => {
    return (
      <tr>
        <td className={Styles.table}>{id}</td>
        <td className={Styles.table}>{dname}</td>
        <td className={Styles.table}>{loc}</td>
      </tr>
    );
  };
  return (
    <div>
      <h2 className={Styles.title}>학과 목록</h2>
      <table  className={Styles.table}>
        <thead >
          <th className={Styles.thBorder}>학과 번호</th>
          <th className={Styles.thBorder}>학과 이름</th>
          <th className={Styles.thBorder}>학과 위치</th>
        </thead>
        <tbody>
          {School.department.map((v, i) => {
            return (
              <DepartmentItem key={i} id={v.id} dname={v.dname} loc={v.loc} 
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
