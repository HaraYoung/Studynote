import React from 'react';
import School from '../myschool.json';

const Student= () => {
    let {student}= School;
    const StudentItem= student.map((v, i) =>{
        return(
            <thead>
                <td key={i}>{v.id}</td>
                <td key={i}>{v.name}</td>
                <td key={i}>{v.userid}</td>
                <td key={i}>{v.grade}</td>
                <td key={i}>{v.idnum}</td>
                {/*{v.idnum.substring(0,6)}- ******* */}
                <td key={i}>{v.birthdate}</td>
                {/*{v.birthdate.substring(0,10)}*/}
                <td key={i}>{v.tel}</td>
                <td key={i}>{v.height}</td>
                <td key={i}>{v.weight}</td>
                <td key={i}>{v.deptno}</td>
                <td key={i}>{v.profno}</td>
            </thead>
        )
    })
    return (
        <div>
            <h2>학생 목록</h2>
            <table border='1'>
                <thead>
                <th>학생 번호</th>
                <th>학생 이름</th>
                <th>학생 아이디</th>
                <th>학년</th>
                <th>주민 번호</th>
                <th>생년월일</th>
                <th>연락처</th>
                <th>키</th>
                <th>몸무게</th>
                <th>소속 학과 번호</th>
                <th>담당 교수 번호</th>
                </thead>
                {StudentItem}
            </table>
        </div>
    )
}
export default Student;