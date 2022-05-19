import React from "react";

import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
//useParams: 수정할 항목의 값을 받아야하기때문에 사용-https://localhost:3001/edit/${id}

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

const GradeEdit = () => {
  //path파라미터로 전달된 일련번호- id값만 비구조문법으로 분리
  const { id } = useParams(); //모든 파라미터가 json객체로 떨어짐

  //데이터 수정후 목록 페이지로 강제 이동하기 위한 함수 생성
  const navigate = useNavigate();

  //수정할 대상을 백엔드로 부터 로드함->자동 실행 모드
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3001/grade/${id}` //1.수정대상 조회
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
        current.name, 2,
        "이름은 최소 2글자 이상 입력해야 합니다"
      );
      regexHelper.maxLength(
        current.name, 10,
        "이름은 최대 10글자까지 입력 가능합니다"
      );
      regexHelper.value(current.level, "학년을 선택하세요");
      regexHelper.check(current.sex, "성별을 선택하세요");
      regexHelper.value(current.kor, "국어 점수를 입력하세요");
      regexHelper.value(current.kor, "국어 점수는 숫자만 입력 가능합니다");
      regexHelper.value(current.eng, "영어 점수를 입력하세요");
      regexHelper.value(current.eng, "영어 점수는 숫자만 입력 가능합니다");
      regexHelper.value(current.math, "수학 점수를 입력하세요");
      regexHelper.value(current.math, "수학 점수는 숫자만 입력 가능합니다");
      regexHelper.value(current.sin, "과학 점수를 입력하세요");
      regexHelper.value(current.sin, "과학 점수는 숫자만 입력 가능합니다");
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }

    //입력받은 값 취득하기
    const name = current.name.value;
    const level = current.level.value;
    const sex = current.sex.value;
    const kor = current.kor.value;
    const eng = current.eng.value;
    const math = current.math.value;
    const sin = current.sin.value;

    let json = null;

    //입력, 수정, 삭제 처리는 async await문법을 사용해야함
    (async () => {
      try {
        const response = await refetch({
          method: "PUT", //기본적으로 GET방식으로 가져오기때문에 PUT으로 바꿈
          data: {
            //수정을 할경우 수정된 결과가 반환됨
            name: name,
            level: parseInt(level),
            sex: sex,
            kor: parseInt(kor),
            eng: parseInt(eng),
            math: parseInt(math),
            sin: parseInt(sin),
          },
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status}] ${e.response.statusText} \n${e.message}`
        );
      }
      //정상적으로 저장되어 응답을 받았다면
      
      if (json != null) {
        window.alert("수정되었습니다.");
        //페이지 강제 이동=> window.location.href= URL기능과 동일함
        navigate("/");
      }
    })();
  }, []);

  return (
    <>
      <Spinner visible={loading} />
      {error ? (
        <div>
          <h1>{error.code} Error!!</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        //Ajax를 통해 조회한 결과가 존재할 때만 데이터를 표시함
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
                      className="field"
                      type="text"
                      name="name"
                      defaultValue={data.name}
                      /*input태그의 기본값은 html에서 value이지만
                       React에서 value는 onChange이벤트가 있을경우만 사용가능
                       value속성은 상태값만 들어갈수 있음
                       [onChange이벤트로 입력값 취득->상태값으로 복사-> 복사한 상태값을 value값으로 줘야함]
                      데이터를 로드해 출력만 할때는 defaultValue를 사용
                      */
                    />
                  </td>
                </tr>
                <tr>
                  <th>학년</th>
                  <td className="inputWrapper">
                    {/*기존의 select태그의 선택값을 보여줄때  고전적인 처리방법을 사용해야하지만
                    React에서는 select태그에 defaultValue값을 설정해주면 자동적으로 처리*/}
                    <select
                      name="level"
                      className="field"
                      defaultValue={data.level}
                    >
                      <option value=""> -- 선택하세요 --</option>
                      <option value="1">1학년</option>
                      <option value="2">2학년</option>
                      <option value="3">3학년</option>
                      <option value="4">4학년</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td className="inputWrapper">
                    <label>
                      {/*select와 다르게 radio와 checkbox는 고전적인 처리를 해야함
                      defaultValue의 값이 true일 경우 선택된 항목*/}
                      <input
                        type="radio"
                        name="sex"
                        value="남자"
                        defaultChecked={data.sex === "남자"}
                      />
                      남자
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        value="여자"
                        defaultChecked={data.sex === "여자"}
                      />
                      여자
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>국어</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="kor"
                      placeholder="숫자만 입력 (0~100)"
                      defaultValue={data.kor}
                    />
                  </td>
                </tr>
                <tr>
                  <th>영어</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="eng"
                      placeholder="숫자만 입력 (0~100)"
                      defaultValue={data.eng}
                    />
                  </td>
                </tr>
                <tr>
                  <th>수학</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="math"
                      placeholder="숫자만 입력 (0~100)"
                      defaultValue={data.math}
                    />
                  </td>
                </tr>
                <tr>
                  <th>과학</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="sin"
                      placeholder="숫자만 입력 (0~100)"
                      defaultValue={data.sin}
                    />
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

export default React.memo(GradeEdit);
