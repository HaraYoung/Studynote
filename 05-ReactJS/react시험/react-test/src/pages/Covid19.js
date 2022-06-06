import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";

const Covid19 = memo(() => {
  //필드명
  const { api } = useParams();
  //lte=최대값, gte=최소값
  const { data, loading, error } = useSelector((state) => state.covid19);


  //선택한 날짜의 데이터
  const [tgData, setTgData]= React.useState();

  React.useEffect(()=>{
    const getDate= {
      date: [],
      num: [],
      name: api
    }
    data && data.forEach((v, i) => {
      getDate.date.push(v.date.slice(2,10));
      getDate.num.push(v[api]);
    });
    setTgData(getDate);
    console.log(getDate);
  },[data, api])

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        tgData && <LineChartView tgData={tgData}/>
      )}
    </div>
  );
});

export default Covid19;
