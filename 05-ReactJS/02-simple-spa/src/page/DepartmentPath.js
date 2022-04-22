/*HTTP PATH 파라미터를 전달받는 페이지 */
import React from 'react';
/*PATH파라미터 추출기능을 갖는 useParams()함수를 react-router-dom 패키지로부터 참조함 */
import { useParams } from 'react-router-dom';

const DepartmentPath= () =>{
    //기존의 콘솔 출력 내용을 삭제
    console.clear();

    //요청데이터 확인
    const params = useParams();
    console.group('useParams()의 리턴값 확인');
    console.debug(params);
    console.groupEnd();

    //추출된 변수의 값과 데이터 타입 확인
    console.group('파라미터 처리 결과 확인');
    console.debug('요청된 학과번호= %s (%s)', params.id, typeof params.id);
    console.debug('요청된 메세지 내용= %s (%s)', params.msg, params.msg);
    console.groupEnd();

    //한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    /*실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야함 => Ajax */

    const departmentList={
        item:[
            {id: 201, dname: '전자공학과', loc: '3호관'},
            {id: 202, dname: '기계공학과', loc: '4호관'}
        ]
    };
    //전달된 파라미터를 정수로 반환
    const id= parseInt(params.id);

    //조회결과가 저장될 객체
    let departmentItem= null;

    //미리 준비한 JSON에서 doptno값이 일치하는 정보를 조회
    departmentList.item.some((item, index)=>{
        if(item.id === id){
            departmentItem= item;
            return true;
        }
        return false;
    });

    //조회결과가 없는 경우
    if(!departmentItem){
        return( <h2>존재하지 않는 데이테에 대한 요청입니다!</h2>)
    }

    //정상화면 출력
    return(
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과 번호: {departmentItem.id}</li>
                <li>학과 위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};
export default DepartmentPath;
