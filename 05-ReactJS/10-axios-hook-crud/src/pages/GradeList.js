import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer= styled.div`
position: sticky;
top: 0;
background-color:#fff;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
padding : 10px 0;
`;

const TopLink= styled(NavLink)`
margin-top : 15px;
display : inline-block;
font-size :16px;
padding: 7px 10px 5px 10px;
color : #fff;
text-decoration: none;
background-color: #168;
    &:hover{
        background-color : #06f2;
    }
`;

const GradeList = () => {
    //화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수
    const [grade, setGrade] = React.useState([]);

    //백엔드로부터 데이터 불러오기- 자체 캐시기능 방지함
    /*캐시는 접속했었던 웹브라우저를 기억하고 다음에 접속했을때 
    새로운 데어터를 갱신하는것이 아닌 기억하고 있는것을 재사용*/
    const [{data, loading1,error}, refetch]= useAxios('http://localhost:3001/grade',{
        //useAxios-hook은 캐시기능을 사용하는것이 default(기본값)임
        useCache: false
        /*이 구문이 없을시 데이터가 추가되고 기본페이지로 돌아갈때 그전에 기억했던 캐시로 인해
         새로 추가된 데이터는 보이지 않음- 똑같은 주소를 방문하는것이기 때문에 기억하고 있는 내용을 사용
         - 새로고침을 하면 새로 추가된 데이터가 보임
         - 조회기능만 있다면 캐시를 쓰는것이 유리함[캐시는 통신 횟수를 줄여 성능향상을 위해 사용되기때문]
         */
    });

    //axios-hook에 의해 생성된 상태값인 data가 변경되었을때 실행될 hook- ajax로딩이 완료되었을때
    React.useEffect(()=>{
        //ajax의 결과를 화면에 표시하기 위한 상태값에 복사함- data를 핸들링
        setGrade(data);
    },[data]);

    /*백엔드로부터 데이터 삭제하기
    -자체 캐시기능 방지, 삭제버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행 모드 */
    //refetch와 이름이 겹치므로 sendDelete로 이름을 바꿈(기능은 같다)
    //삭제이기 때문에 리턴되는 데이터를 비구조문법으로 받을 필요가 없음
    const [{loading2}, sendDelete]= useAxios({      
        method: 'DELETE'        
        /*url지정 x=> 삭제나 수정은 삭제할 대상을 지정하기 위해 
        대상의 key값이 매번 path파라미터로 전달받어야함=>삭제하고자 하는 항목에따라 매번 주소가 바뀜
        */
    }, {
        useCache: false,
        manual: true    //수동 전송- sendDelete를 호출해 수동으로 전송함
    });

    //삭제버튼 클릭시 호출될 이벤트 핸들러
    const onDeleteClick= (e) => {
        e.preventDefault();

        //이벤트가 발생한 대상을 가져옴- 삭제하기 링크
        const current= e.target;

        //클릭된 링크에 숨겨져있는 dataset의 일련번호와 학생이름 가져오기
        const id= parseInt(current.dataset.id);
        //알림창에 쓸 이름 값
        const name= current.dataset.name;

        //삭제 확인
        //react는 alert등 다이얼로그를 뿌리는(?)애들은 window생략시 동작하지 않음
        if(window.confirm(`정말 ${name}을 삭제하시겠습니까?`)){     //ok누르면 참이됨
            //백엔드에 삭제 요청하기- 입력,수정,삭제는 async-await문법으로 처리해야함
            (async ()=> {   //useAxios를 사용해 async await를 생략할수 있지만 에러처리를 할수없음
                let json= null;
                try{
                    const response= await sendDelete({
                        method: 'Delete',
                        url: `http://localhost:3001/grade/${id}`
                    });
                    json= response.data;    //json결과를 받음,이상이 없다면 {}빈객체
                }catch(e){
                    console.error(e)
                    /*e.response.status=에러코드,e.response.statusText= 에러메세지,
                     e.message= axios라이브러리 자체적으로 생성한 에러메세지*/
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
                }
                //삭제결과가 정상이라면
                /* 백엔드에서 삭제후 프론트엔드에서 출력하고있는 데이터는 처음 백엔드가 갖고있는 데이터를 그대로 복사한것
                백엔드에서 삭제되었다고해서 프론트엔드가 갖고있는 원본이 지워지는것은 아님
                1.백엔드에 삭제 요청후 다시 백엔드에서 원본을 받아오는 방법- ajax를 여러번 사용해야해서 비효휼
                2.함수형 업데이트- 지금 사용한 방법*/
                if(json != null){
                    /*화면에 출력중인 데이터에서 동일한 일련번호를 갖는 항목을 제외한 나머지를 추려냄
                    id가 사용자가 삭제하려고하는 id와 갖지 않은것만 필터로 걸러 다시 grade에 담음
                    ->삭제된 항목 제거 -사용자가 선택한 항목이 빠짐*/
                    setGrade(grade=> grade.filter((v, i)=> v.id !== id));
                }
            })();
        }
    }

  return (
    <div>
        <Spinner visible={loading1 || loading2}/>
        <LinkContainer>
            <TopLink to='add'> 성적 추가하기 </TopLink>
        </LinkContainer>

        {error ? (
            <div>
                <h1> {error.code} Error </h1>
                <hr/>
                <p>{error.message}</p>
            </div>) : (
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan='2'>No. </th>
                            <th rowSpan='2'>이름</th>
                            <th rowSpan='2'>학년</th>
                            <th rowSpan='2'>성별</th>
                            <th colSpan='4'>과목별 점수</th>
                            <th colSpan='2'>집계</th>
                            <th colSpan='2' rowSpan='2'>수정/삭제</th>
                        </tr>
                        <tr>
                            <th>국어</th>
                            <th>영어</th>
                            <th>수학</th>
                            <th>과학</th>
                            <th>총점</th>
                            <th>평균</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grade && grade.map(({id, name, level, sex, kor, eng, math, sin}, i)=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{level}학년</td>
                                    <td>{sex}</td>
                                    <td>{kor}</td>
                                    <td>{eng}</td>
                                    <td>{math}</td>
                                    <td>{sin}</td>
                                    <td>{kor+ eng+ math+ sin}</td>
                                    <td>{(kor+ eng+ math+ sin)/ 4}</td>
                                    <td>
                                        <NavLink to={`edit/${id}`} style={{textDecoration:'none', color:'green'}}>수정하기</NavLink>
                                    </td>
                                    <td>
                                        {/*클릭시 클릭된 항목의 id와 name값을 뽑아옴 */}
                                        <a href="#!" data-id={id} data-name={name}
                                        onClick={onDeleteClick} style={{textDecoration:'none', color:'red'}}>삭제 하기</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
        )}
    </div>
  );
};

export default GradeList