import React from "react";
import School from "../myschool.json";
import Styles from '../assets/css/style.module.css';

const Professor = () => {
  const ProfessorItem = ({
    id,
    name,
    userid,
    position,
    sal,
    hiredate,
    comm,
    deptno,
  }) => {
    return (
      <tr>
        <td className={Styles.table}>{id}</td>
        <td className={Styles.table}>{name}</td>
        <td className={Styles.table}>{userid}</td>
        <td className={Styles.table}>{position}</td>
        <td className={Styles.table}>{sal}</td>
        <td className={Styles.table}>{hiredate}</td>
        <td className={Styles.table}>{comm}</td>
        <td className={Styles.table}>{deptno}</td>
      </tr>
    );
  };
  return (
    <div>
      <h2 className={Styles.title}>교수 목록</h2>
      <table className={Styles.table}>
        <thead>
          <th className={Styles.thBorder}>교수 번호</th>
          <th className={Styles.thBorder}>교수 이름</th>
          <th className={Styles.thBorder}>아이디</th>
          <th className={Styles.thBorder}>직급</th>
          <th className={Styles.thBorder}>급여</th>
          <th className={Styles.thBorder}>입사일</th>
          <th className={Styles.thBorder}>보직 수당</th>
          <th className={Styles.thBorder}>소속 학과 번호</th>
        </thead>
        <tbody>
          {School.professor.map((v, i) => {
            return (
              <ProfessorItem
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                position={v.position}
                sal={v.sal}
                hiredate={v.hiredate.substring(0,10)}
                comm={v.comm}
                deptno={v.deptno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Professor;
