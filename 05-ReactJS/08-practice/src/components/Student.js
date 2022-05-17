import React from 'react';
import axios from 'axios';

const Student = (props) => {
    const [student, setStudent]= React.useState([]);

  return (
    <div>
        <table border='1'>
            <thead>
                <th>학번</th>
                <th>이름</th>
                <th>아이디</th>
                <th>학년</th>
                <th>주민번호</th>
                <th>생년월일</th>
                <th>연락처</th>
                <th>키</th>
                <th>몸무게</th>
                <th>소속학과번호</th>
                <th>담당교수번호</th>

            </thead>
        </table>
    </div>
  )
}

export default Student