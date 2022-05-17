//타이타닉 탑승자 명단 조회

import React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

//Axios 기능 제공 hooks
import useAxios from "axios-hooks";

//페이지 마운트 여부를 확인하기 위한 hook
import useMountedRef from "../hooks/useMounterRef";

//성별을 표시하기 위한 텍스트 라벨
const ColorText = styled.span`
  &:before {
    color: ${({ sex }) => (sex === "male" ? "#06f" : "#c0c")};
    content: "${({ sex }) => (sex === "male" ? "남자" : "여자")}";
    font-weight: 600;
  }
`;

//탑승지를 표시하기 위한 텍스트 라벨
const EmbarkedBox = styled.span`
  &:before {
    color: ${({ embarked }) =>
      embarked === "C" ? "#f60" : embarked === "Q" ? "#00f" : "#990"};
    content: '${({ embarked }) => embarked === 'C' ? '세르부르' :( embarked === 'Q' ? '퀸즈타운' : '사우샘프턴')}';
    font-weight: 600;
  }
`;

//생존 여부를 표시하기 위한 텍스트 라벨
const SurvivedBox= styled.span`
    &:before {
        background-color: ${({survived})=> survived ? '#090': '#e00'};
        content: '${({survived})=>survived ? '생존' : '사망'}';
        color: #fff;
        font-weight:600;
    }
`;

//드롭다운을 배치하기 위한 박스
const SelectContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1 solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  select {
    margin-right: 15px;
    font-size: 16px;
    padding: 5px 10px;
  }
`;

//접속할 백엔드의 URL
const URL = "http://localhost:3001/titanic";
const Tianic = () => {
  /*탑승객 명단 목록을 Ajax로 가져옴-> 기본적으로 컴포넌트의 마운트와 동시에 자동실헹되어 응답 결과를 data에 저장함 */
  const [{ data, loading, error }, refetch] = useAxios(URL);
  /*data =표를 그리는데 사용하니 상태값 
  => refetch를 호출하면 ajax처리 결과가 자동으로 data에 저장되고 화면은 그에따라 자동갱신됨
*/
  //각 드롭다운의 선택 상태를 저장하기 위한 상태 변수
  const [state,setState]= React.useState({
      sex: '',
      embarked: '',
      survived: ''
  });

  const onSelectChange= React.useCallback(e => {
      e.preventDefault();
      
      //드롭다운의 입력값 취득- 이벤트가 발생한 select태그가 current 변수에 들어감
      const current= e.target;
      const key= current.name;      //=> select name='?'
      const value= current[current.selectedIndex].value;    //선택된 위치에 해당하는 값
      
      //기존의 상태값을 그대로 복사한 상태에서 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
      const newState= {...state, [key]: value};     //key만 사용자가 선택한 항목을 사용
      //key:value 실제 json의 key를 뜻하지만 [key]는 key의 이름을 변수화 시킨것- 연결된 select를 알아서 찾아감
      
      //상태값 갱신
      setState(newState);
      //상태값 확인
      console.log(newState);
      
      //hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니털링 해야함
    },[state])
    
    //드롭다운 선택 변경시 호출되는 이벤트
    //이 컴포넌트가 화면에 마운트 되었는지 확인하기 위한 hook
    const mountedRef= useMountedRef();
    
    //state 상태값이 변경되었을때 실행될 hook- 최초 등장시에 동작하는건 원하지않음
    //hook은 HTML태그를 리턴하기 전에 사용되어야함
    React.useEffect(()=>{
        //컴포넌트가 화면에 마운트된 이후에만 동작하도록 함
        if (mountedRef.current){    //false=최초 등장시, true=최초 등장 이후
            //상태값 중에서 빈값이 아닌 항목들을 옮겨담음
            const params= {};
            //state=선택값이 반영된 json의 상태값을 저장하고있음, key= json의 key(sex,embarked,survived)
            for(const key in state){   
                if (state[key]){    //값이 있다면
                    params[key]= state[key];
                }
            }
            //ajax 재요청- refetch를 호출시 ajax연동이 다시되고 로딩상태로 바뀐후  data에 결과를 저장하고 로딩상태로 바뀜
            refetch({
                //useAxios(url)에 파라미터 params를 추가해 재전송함
                params: params
            });
        }
    //hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니털링 해야함
    },[mountedRef, refetch, state])
    
  //에러발생시 에러 메세지를 표시함
  if (error) {
    console.error(error);
    /*컴포넌트 자체가 함수이고, 함수가 실행도중 리턴하므로 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단됨 */
    return (
      <div>
        <h1>Error!! :: {error.code}</h1>
        <hr />
        <p>{error.message}</p>
      </div>
    );
  }
/*선택값을 받아 갱신된 상태값으로 쿼리스트링을 만들어야함
ex) ?sex=&embarked=S&survived=true =>성별값이 빈문자열이기 때문에 json서버는 성별이 없는 값을 찾으려함
=> 없는 값은 전송x*/


  //메인화면 구성
  return (
    <div>
      {/*로딩바 */}
      <Spinner visible={loading} />
      {/*검색 조건 드롭다운 박스 - select의 name속성의 값은 상태값에 저장된 json의 key와 동일함*/}
      <SelectContainer>
        <select name="sex" onChange={onSelectChange}>
          <option value="">-- 성별 선택 --</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
        <select name="embarked" onChange={onSelectChange}>
          <option value="">-- 탑승지 선택 --</option>
          <option value="C">셰르브루</option>
          <option value="Q">퀸즈타운</option>
          <option value="S">사우샘프턴</option>
        </select>
        <select name="survived" onChange={onSelectChange}>
          <option value=""> -- 생존 여부 선택 -- </option>
          <option value="true">생존</option>
          <option value="false">사망</option>
        </select>
      </SelectContainer>
      <Table>
        <thead>
          <tr>
            <th>승객 번호</th>
            <th>승객 이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실 등급</th>
            <th>방 호수</th>
            <th>티켓 번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존 여부</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(
              (
                {
                  id,
                  name,
                  survived,
                  pclass,
                  sex,
                  age,
                  sibsp,
                  parch,
                  ticket,
                  fare,
                  cabin,
                  embarked,
                },
                i
              ) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>
                      <ColorText sex={sex} />
                    </td>
                    <td>{age}</td>
                    <td>{sibsp + parch}</td>
                    <td>{pclass}</td>
                    <td>{cabin}</td>
                    <td>{ticket}</td>
                    <td>{fare}</td>
                    <td>
                      <EmbarkedBox embarked={embarked} />
                    </td>
                    <td><SurvivedBox survived={survived}/></td>
                  </tr>
                );
              }
            )}
          
        </tbody>
      </Table>
    </div>
  );
};

export default Tianic;
