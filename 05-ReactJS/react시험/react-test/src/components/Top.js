import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getList } from "../slices/Covid19Slice";


import MenuLink from "./MenuLink";

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

  /*const qs= useQueryString();
    console.log(qs);
    const query= qs.query; */
  const { query, gte, lte } = useQueryString();

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`/covid19?query=confirmed_gte=${gte}&confirmed_lte=${lte}`);
    },[navigate, gte, lte ]
  );
    const onDateChange= useCallback((e)=>{
      const gteName= document.dateForm.gte.value;
      const lteName= document.dateForm.lte.value;
      dispatch(getList({
        gte: gteName,
        lte: lteName}
      ))
    },[dispatch]) 
  return (
    <div>
      <h1> Covid19 현황 </h1>
      <br />
      <Form onSubmit={onSearchSubmit} name='dateForm' onChange={onDateChange}>
      <input type='date' name='gte' defaultValue={gte}/> ~ <input type='date'name='lte' defaultValue={lte}/> <button type='submit'name="query" defaultValue={query}>검색</button>
      {/*선택된 값을 데이터에서 찾아서 반복을 돌린후 두번째 선택된 값에서 마침.. */}
      </Form>
      {query && (
        <nav>
          <MenuLink to={`/covid19?query=confirmed_gte=${gte}&confirmed_lte=${lte}`}>일일 확진자</MenuLink>
          <MenuLink to={`/covid19?query=confirmed_acc_gte=${gte}&confirmed_acc_lte=${lte}`}>
            누적 확진자
          </MenuLink>
          <MenuLink to={`/covid19?query=active_gte=${gte}&active_lte=${lte}`}>
            격리 환자
          </MenuLink>
          <MenuLink to={`/covid19?query=released_gte=${gte}&released_lte=${lte}`}>
            격리 해제
          </MenuLink>
          <MenuLink to={`/covid19?query=released_acc_gte=${gte}&released_acc_lte=${lte}`}>
            누적 격리 해제
          </MenuLink>
          <MenuLink to={`/covid19?query=death_gte=${gte}&death_lte=${lte}`}>
            사망자
          </MenuLink>
          <MenuLink to={`/covid19?query=death_acc_gte=${gte}&death_acc_lte=${lte}`}>
            누적 사망자
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
