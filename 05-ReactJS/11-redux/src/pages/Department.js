import React from 'react';
import Spinner from '../components/Spinner';
import Table from '../components/Table';

//상태값을 로드하기위한 hook과 action함수를 dispatch할 hook 참조
import {useSelector, useDispatch} from 'react-redux';
//slice에 정의된 액션 함수들 참조
import {getList} from '../slices/DepartmentSlice';


const Department = () => {
  //컴포넌트가 마운트될때 콘솔의 모든 내용 삭제- 출력결과가 복잡해지는것을 방지
  React.useEffect(()=> console.clear(), []);

  //hook을 통해 slice가 관리하는 상태값 가져오기
  const {data, loading, error} = useSelector((state)=> state.department);
  //state.department=> store의 key = slice안의 name의 값

  //dispatch함수 생성
  const dispatch= useDispatch();

  //컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 다스패치함
  React.useEffect(()=>{
    dispatch(getList());    //slice안의 ajax기능을 호출하고 싶다면 dispatch에 그 함수를 연결
    //ajax연동기능을 실행-> 리턴-ajax처리 결과가 useSelector를 통해 각 상태값으로 전파
  },[dispatch]);
  return (
    <div>
      <Spinner visible={loading}/>
      {error ? (
        <div>
          <h1> ERROR!! {error.code}</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ): (
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>dname</th>
              <th>loc</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((v,i)=>(
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default React.memo(Department);