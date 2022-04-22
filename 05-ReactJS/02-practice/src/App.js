import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import WeatherPath from "./weather/WeatherPath";
function App() {
  return (
    <div>
        <h1>주간 날씨</h1>
        <br />
        <hr />
        <nav>
            <Link to="/WeatherPath/mon">월</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/tue">화</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/wed">수</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/thu">목</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/fri">금</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/sat">토</Link>&nbsp;|&nbsp;
            <Link to="/WeatherPath/sun">일</Link>
        </nav>
        <Routes>
            <Route path="/WeatherPath/:day" element={<WeatherPath/>} />
        </Routes>
    </div>
    );
   };
   

export default App;
