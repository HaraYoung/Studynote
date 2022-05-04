import React from "react";
import dayjs from "dayjs";

/**
 * useReducer() 기능을 사용해 상황에따라 state값을 다르게 설정하는 함수
 * @param {object} state- 현재 화면에 표시되고 있는 상태값
 * @param {string} action- 날짜 간격을 의미하는 문자열
 * @returns 화면을 갱신할 상태값을 담고있는 json객체
 */
const setDataValues = (state, action) => {
  const day = dayjs();
  let sdate = null;

  switch (action) {
    case "DAY7":
      sdate= day.add(-7, "d").format("YYYY-MM-DD");
      break;
    case "DAY15":
      sdate= day.add(-15, "d").format("YYYY-MM-DD");
      break;
    case "MONTH1":
      sdate= day.add(-1, "M").format("YYYY-MM-DD");
      break;
    case "MONTH3":
      sdate= day.add(-3, "M").format("YYYY-MM-DD");
      break;
    case "MONTH6":
      sdate= day.add(-6, "M").format("YYYY-MM-DD");
      break;
    default:
        sdate = day.format("YYYY-MM-DD");
      break;
  }
  return{...state, startDate: sdate};
};

const DateRange2 = () => {
    const day = dayjs();
    const [myDate, setMyDate]= React.useReducer(setDataValues, {
        //날짜 형식 참고: https://momentjs.com/docs/#/displaying/
        startDate: day.format('YYYY-MM-DD'),
        endDate: day.format('YYYY-MM-DD')
    });
  return (
  <div>
      <h2>Date Range 2</h2>
      <p>{myDate.startDate} ~ {myDate.endDate}</p>
      <div>
          <button type="button" onClick={(e)=> setMyDate('DAY7')}> 7일 </button>
          <br />
          <hr />
          <button type="button" onClick={(e)=> setMyDate('DAY15')}> 15일 </button>
          <br />
          <hr />
          <button type="button" onClick={(e)=> setMyDate('MONTH1')}> 30일 </button>
          <br />
          <hr />
          <button type="button" onClick={(e)=> setMyDate('MONTH3')}> 3개월 </button>
          <br />
          <hr />
          <button type="button" onClick={(e)=> setMyDate('MONTH6')}> 6개월 </button>

      </div>
  </div>
  );
};
export default DateRange2;
