/*전달된 Path 파라미터를 활용하여 데이터를 선택적으로 표시할 수 있어야 하며
 이 때 웹 브라우저의 타이틀바에 표시되고 있는 학년 정보가 적용되어 타이틀이 수정되어야 한다. */

import React from 'react';
import {useParams} from 'react-router-dom';
import GradeData from '../src/GradeData';
import GradeItem from './components/GradeItem';
import Meta from './components/Meta';
 
const GradeTable=() =>{
    //url을 통해 전달된 path파라미터 추출
    const {params} = useParams();

    //파라미터를 활용해 json key이름 조합
    const key= `${params}학년`

    //json에서 필요한 데어터 추출
    const Data= GradeData[key];
    return(
        <div>
            <Meta title={`${key}::: React 연습문제`}/>
            <h2>{key}</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((v,i)=> {
                        return(
                            <GradeItem key={i} 이름={v.이름} 성별={v.성별} 국어={v.국어}
                            영어={v.영어} 수학={v.수학} 과학={v.과학}/>
                            )
                    })}
                </tbody>
            </table>
        </div>
    )


}

export default GradeTable;