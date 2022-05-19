import React from "react";

import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

import regexHelper from "../libs/RegexHelper";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

//Table컴포넌트의 css를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;
  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;
    .field {
      box-sizing: border-box;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
    label {
      margin-left: 7px;
      margin-right: 10px;
      input {
        margin-right: 10px;
      }
    }
  }
`;

const PropessorEdit = () => {
  //path파라미터로 전달된 일련 번호
  const { id } = useParams();

  //데이터 수정후 목록 페이지로 강제 이동하기 위한 함수
  const navigate = useNavigate();

  const [{ data: department, loading: loading2, error: error2 }] = useAxios(
    "http://localhost:3001/department"
  );

  //수정할 대상을 백엔드로부터 로드- 자동 실행모드
  const [{ data, loading, error }, refresh] = useAxios(
    `http://localhost:3001/professor/${id}`
  );

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    //이벤트가 발생한 폼 객체
    const current = e.target;

    //입력값에 대한 유효성 검사
    try {
      regexHelper.value(current.name, "이름을 입력하세요");
      regexHelper.kor(current.name, "이름은 한글로 입력하세요");
      regexHelper.minLength(
        current.name,
        2,
        "이름은 최소 2글자 이상 입력해야 합니다"
      );
      regexHelper.maxLength(
        current.name,
        10,
        "이름은 최대 10글자까지 입력 가능합니다"
      );
      regexHelper.value(current.userid, "아이디를 입력하세요.");
      regexHelper.engNum(
        current.userid,
        "아이디는 영문과 숫자조합으로만 가능합니다"
      );
      regexHelper.minLength(
        current.userid,
        2,
        "아이디는 최소 2글자 이상 입력해야 합니다"
      );
      regexHelper.maxLength(
        current.userid,
        20,
        "아이디는 최대 20글자까지 입력 가능합니다"
      );
      regexHelper.check(current.position, "직급을 선택하세요");
      regexHelper.value(current.sal, "급여를 입력하세요");
      regexHelper.value(current.sal, "급여는 숫자만 입력 가능합니다");
      regexHelper.value(current.hiredate, "입사일을 입력하세요");
      regexHelper.value(current.comm, "보직 수당을 입력하세요");
      regexHelper.value(current.comm, "보직 수당은 숫자만 입력 가능합니다");
      regexHelper.value(current.deptno, "소속 학과를 선택하세요");
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }
    //입력받은 값 취득
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    let json = null;
    //입력, 수정, 삭제 처리
    (async () => {
      try {
        const response = await refresh({
          method: "PUT",
          data: {
            name: name,
            userid: userid,
            position: position,
            sal: sal,
            hiredate: hiredate,
            comm: comm,
            deptno: deptno,
          },
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status}] ${e.response.statusText} \n${e.message}`
        );
      }
      if (json != null) {
        window.alert("수정되었습니다.");
        navigate("/");
      }
    })();
  }, []);
  return (
    <>
      <Spinner visible={loading || loading2} />
      {error || error2 ? (
        <div>
          <h1>{error.code} Error!!</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        //ajax를 통해 조회한 결과가 존재할 때만 데이터를 표시함
        data && (
          <form onSubmit={onSubmit}>
            <TableEx>
              <colgroup>
                <col width="120" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className="inputWrapper">
                    <input
                      type="text"
                      className="field"
                      name="name"
                      defaultValue={data.name}
                    />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td className="inputWrapper">
                    <input
                      type="text"
                      className="field"
                      name="userid"
                      defaultValue={data.userid}
                    />
                  </td>
                </tr>
                <tr>
                  <th>직급</th>
                  <td className="inputWrapper">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="교수"
                        defaultChecked={data.position === "교수"}
                      />
                      교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="부교수"
                        defaultChecked={data.position === "부교수"}
                      />
                      부교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="조교수"
                        defaultChecked={data.position === "조교수"}
                      />
                      조교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="전임강사"
                        defaultChecked={data.position === "전임강사"}
                      />
                      전임강사
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>급여(만원)</th>
                  <td className="inputWrapper">
                    <input
                      type="number"
                      className="field"
                      name="sal"
                      defaultValue={data.sal}
                      placeholder="숫자만 입력"
                    />
                  </td>
                </tr>
                <tr>
                  <th>입사일</th>
                  <td className="inputWrapper">
                    <input
                      type="date"
                      className="field"
                      name="hiredate"
                      defaultValue={dayjs(`${data.hiredate}`).format(
                        "YYYY-MM-DD"
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <th>보직수당(만원)</th>
                  <td className="inputWrapper">
                    <input
                      type="number"
                      className="field"
                      name="comm"
                      defaultValue={data.comm}
                      placeholder="숫자만 입력"
                    />
                  </td>
                </tr>
                <tr>
                  <th>소속학과</th>
                  <td className="inputWrapper">
                    <select
                      className="field"
                      name="deptno"
                      defaultValue={data.deptno}
                    >
                      <option value=""> -- 선택하세요 -- </option>
                      {department &&
                        department.map((v, i) => {
                          return (
                            <option key={i} value={v.id}>
                              {v.dname}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
              </tbody>
            </TableEx>
            <div style={{ textAlign: "center" }}>
              <button type="submit">저장하기</button>
            </div>
          </form>
        )
      )}
    </>
  );
};

export default PropessorEdit;
