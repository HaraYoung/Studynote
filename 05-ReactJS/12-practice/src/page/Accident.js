import React, { memo } from "react";
import styled from "styled-components";

import Spinner from "../components/Spinner";
import Table from "../components/Table";
import ErrorView from "../components/ErrorView";

//상태값을 로드하기위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
//slice에 정의된 액션 함수들 참조
import { accidentList } from "../slice/AccidentSlice";

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

const Accident = memo(() => {
  React.useEffect(() => console.clear(), []);
  const { data, loading, error } = useSelector((state) => state.accident);
  const [year, setYear] = React.useState();
  const dispatch = useDispatch();

  let sumAccident = 0;
  let sumDeath = 0;
  let sumInjury = 0;

  React.useEffect(() => {
    dispatch(accidentList({year: year}));
  }, [dispatch, year]);
  const onSelectChange = React.useCallback((e) => {
    e.preventDefault();
    //드롭다운 입력값 취득
    const current = e.target;
    const value = current[current.selectedIndex].value;
    setYear(value);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <SelectContainer>
        <select name="year" onChange={onSelectChange}>
          <option value=""> -- 년도 선택 -- </option>
          {[...new Array(2018 - 2005 + 1)].map((v, i) => {
            return (
              <option key={i} value={2005 + i}>
                {2005 + i}년도
              </option>
            );
          })}
        </select>
      </SelectContainer>
      {error ? (
        <ErrorView error={error} />
      ) : (
        <Table>
          <thead>
            <th>번호</th>
            <th>년도</th>
            <th>월</th>
            <th>교통 사고 건수</th>
            <th>사망자 수</th>
            <th>부상자 수</th>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, year, month, accident, death, injury }, i) => {
                sumAccident += accident;
                sumDeath += death;
                sumInjury += injury;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{year}년</td>
                    <td>{month}월</td>
                    <td>{accident}건</td>
                    <td>{death}명</td>
                    <td>{injury}명</td>
                  </tr>
                );
              })}
            <tr key="sum" style={{ fontWeight: "bolder" }}>
              <td
                colSpan="3"
                style={{
                  color: "white",
                  border: "3px solid #168",
                  backgroundColor: "#168",
                }}
              >
                합계
              </td>
              <td style={{ border: "3px solid #168" }}>{sumAccident} 건</td>
              <td style={{ border: "3px solid #168" }}>{sumDeath} 명</td>
              <td style={{ border: "3px solid #168" }}>{sumInjury} 명</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default Accident;
