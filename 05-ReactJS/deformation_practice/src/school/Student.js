import React from "react";
import School from "../myschool.json";
import Styles from '../assets/css/style.module.css';

const Student = () => {
  const StudentItem = ({
    id,
    name,
    userid,
    grade,
    idnum,
    birthdate,
    tel,
    height,
    weight,
    deptno,
    profno,
  }) => {
    return (
      <tr>
        <td className={Styles.table}>{id}</td>
        <td className={Styles.table}>{name}</td>
        <td className={Styles.table}>{userid}</td>
        <td className={Styles.table}>{grade}</td>
        <td className={Styles.table}>{idnum}</td>
        <td className={Styles.table}>{birthdate}</td>
        <td className={Styles.table}>{tel}</td>
        <td className={Styles.table}>{height}</td>
        <td className={Styles.table}>{weight}</td>
        <td className={Styles.table}>{deptno}</td>
        <td className={Styles.table}>{profno}</td>
      </tr>
    );
  };

  return (
    <div>
      <h2  className={Styles.title}>학생 목록</h2>
      <table className={Styles.table}>
        <thead>
          <th className={Styles.thBorder}>학생 번호</th>
          <th className={Styles.thBorder}>학생 이름</th>
          <th className={Styles.thBorder}>학생 아이디</th>
          <th className={Styles.thBorder}>학년</th>
          <th className={Styles.thBorder}>주민 번호</th>
          <th className={Styles.thBorder}>생년월일</th>
          <th className={Styles.thBorder}>연락처</th>
          <th className={Styles.thBorder}>키</th>
          <th className={Styles.thBorder}>몸무게</th>
          <th className={Styles.thBorder}>소속 학과 번호</th>
          <th className={Styles.thBorder}>담당 교수 번호</th>
        </thead>
        <tbody>
          {School.student.map((v, i) => {
            return (
              <StudentItem
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                grade={v.grade}
                idnum={v.idnum.substring(0,6)}
                birthdate={v.birthdate.substring(0,10)}
                tel={v.tel}
                height={v.height}
                weight={v.weight}
                deptno={v.deptno}
                profno={v.profno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;