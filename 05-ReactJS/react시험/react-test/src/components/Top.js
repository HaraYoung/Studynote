import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getList } from "../slices/Covid19Slice";
import dayjs from "dayjs";
import MenuLink from "../components/MenuLink";
import { useDispatch } from "react-redux";

const Form = styled.form`
  position: sticky;
  display: flex;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;
  input,
  button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }
  input {
    flex: 1;
  }
  button {
    width: 70px;
    flex: none;
  }
`;

const Top = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 // const { date_gte, date_lte } = useQueryString();

   let [gteDate, setGteDate]= React.useState('2020-02-17');
   let [lteDate, setLteDate]= React.useState('2022-05-31');

  const onDateGteChange = (
    (e) => {
      setGteDate(e.target.value);
    });

  const onDateLteChange = (
    (e) => {
      setLteDate(e.target.value);
    });

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if(gteDate> lteDate){
        alert('시작 날짜가 더 빨라야합니다');
      }else if(gteDate < '2020-02-17' || lteDate > '2022-05-31'){
        alert('2020-02-17부터 2022-05-31까지의 날짜만 선택 가능합니다.');
      }
      navigate(`/confirmed?gteDate=${gteDate}&lteDate=${lteDate}`);
    },
    [navigate, gteDate, lteDate]
    );
    const lteOneDay= dayjs(lteDate).add(1, 'd').format('YYYY-MM-DD');

    React.useEffect(()=>{
      dispatch(getList({date_gte: gteDate, date_lte: lteOneDay}))
    },[dispatch, gteDate, lteOneDay]);

  return (
    <div>
      <h1> Covid19 현황 </h1>
      <br />
      <Form onSubmit={onSearchSubmit} name="dateForm">
        <input
          type="date"
          name="gte"
          value={gteDate}
          onChange={onDateGteChange}
        />
        ~
        <input
          type="date"
          name="lte"
          value={lteDate}
          onChange={onDateLteChange}
        />
        <button type="submit" >
          검색
        </button>
      </Form>
       
      <nav>
          <MenuLink
            to={`/confirmed?gteDate=${gteDate}&lteDate=${lteDate}`}
          >
            일일 확진자
          </MenuLink>
          <MenuLink
            to={`/confirmed_acc?gteDate=${gteDate}&lteDate=${lteDate}`}
          >
            누적 확진자
          </MenuLink>
          <MenuLink to={`/active?gteDate=${gteDate}&lteDate=${lteDate}`}>
            격리 환자
          </MenuLink>
          <MenuLink
            to={`/released?gteDate=${gteDate}&lteDate=${lteDate}`}
          >
            격리 해제
          </MenuLink>
          <MenuLink
            to={`/released_acc?gteDate=${gteDate}&lteDate=${lteDate}`}
          >
            누적 격리 해제
          </MenuLink>
          <MenuLink to={`/death?gteDate=${gteDate}&lteDate=${lteDate}`}>
            사망자
          </MenuLink>
          <MenuLink
            to={`/death_acc?gteDate=${gteDate}&lteDate=${lteDate}`}
          >
            누적 사망자
          </MenuLink>
        </nav>
    </div>
  );
});

export default Top;
