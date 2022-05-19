import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-top: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  color: #fff;
  text-decoration: none;
  background-color: #168;
  &:hover {
    background-color: #124f60;
  }
`;

const PropessorList = () => {
  //화면에 표시할 교수 목록 데이터를 저장하기 위한 상태 변수
  const [professor, setProfessor] = React.useState([]);

  //백엔드로부터 데이터 불러오기 - 자체 캐시기능 방지
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:3001/professor",
    {
      useCache: false,
    }
  );
  React.useEffect(()=>{
      setProfessor(data);
  },[data])

  //백엔드로부터 데이터 삭제하기
  const [{ loading2 }, sendDelete] = useAxios(
    {
      method: "DELETE",
    },
    {
      useCache: false,
      manual: true, //수동 전송
    }
  );

  //삭제 버튼 클릭시 호출될 이벤트 핸들러
  const onDeleteClick = (e) => {
    e.preventDefault();

    //이벤트가 발생한 대상을 가져옴
    const current = e.target;

    //클릭된 링크에 숨겨져잇는 dataset의 일련번호와 교수 이름 가져오기
    const id = parseInt(current.dataset.id);
    //알림창에 쓸 이름값
    const name = current.dataset.name;

    //삭제확인
    if (window.confirm(`정말 ${name}을 삭제하시겠습니까?`)) {
      (async () => {
        let json = null;
        try {
          const response = await sendDelete({
            method: "Delete",
            url: `http://localhost:3001/professor/${id}`,
          });
          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert(
            `[${e.response.status}] ${e.response.statusText}\n${e.message}`
          );
        }
        if (json != null) {
          setProfessor((grade) => grade.filter((v, i) => v.id !== id));
        }
      })();
    }
  };

  //axios-hooks에의해 생성된 상태값 data가 변경되었을때 실행될 hook
  React.useEffect(() => {
    setProfessor(data);
  }, [data]);

  return (
    <>
      <Spinner visible={loading || loading2} />
      <LinkContainer>
        <TopLink to="add">교수 등록하기</TopLink>
      </LinkContainer>
      {error ? (
        <div>
          <h1> {error.code} Error </h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>이름</th>
              <th>아이디</th>
              <th>직급</th>
              <th>급여</th>
              <th>입사일</th>
              <th>보직수당</th>
              <th>소속학과번호</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {professor &&
              professor.map(
                (
                  { id, name, userid, position, sal, hiredate, comm, deptno },
                  i
                ) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{userid}</td>
                      <td>{position}</td>
                      <td>
                        {sal} {sal ? "만원" : ""}
                      </td>
                      <td>{dayjs(`${hiredate}`).format("YYYY-MM-DD")}</td>
                      <td>
                        {comm} {comm ? "만원" : ""}
                      </td>
                      <td>{deptno}</td>
                      <td>
                        <NavLink
                          to={`edit/${id}`}
                          style={{ textDecoration: "none", color: "green" }}
                        >
                          수정하기
                        </NavLink>
                      </td>
                      <td>
                        {/*클릭시 클릭된 항목의 id와 name값을 뽑아옴 */}
                        <a
                          href="#!"
                          data-id={id}
                          data-name={name}
                          style={{ textDecoration: "none", color: "red" }}
                          onClick={onDeleteClick}
                        >
                          삭제 하기
                        </a>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PropessorList;
