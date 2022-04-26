# 박세영 연습문제

## 코드

### index.js
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

```

### App.js
```js
import React from "react";
import GradeItem from "./components/GradeItem"
import GradeData from "./GradeData";

function App() {
  return (
    <div>
      <h1>성적표</h1>
      <br />
      <hr />
      <table border="1">
        <thead>
          <th>이름</th>
          <th>학년</th>
          <th>성별</th>
          <th>국어</th>
          <th>영어</th>
          <th>수학</th>
          <th>과학</th>
          <th>총점</th>
          <th>평균</th>
        </thead>
        <tbody>

          {GradeData.map((v,i)=>{
            return(
            <GradeItem
             key={i} name={v.name} grade={v.grade} sex={v.sex}
            kor={v.kor} eng={v.eng} mat={v.mat} sic={v.sic} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;

```

### GradeItem.js

```js
import React from 'react';
import PropTypes from 'prop-types';

const GradeItem=({name,grade,sex,kor,eng,mat,sic}) =>{
    const sco= parseInt(kor+ eng+ mat+ sic);
    const ave= parseInt(sco/4);
    return(
            <tr>
                <td>{name}</td>
                <td>{grade}</td>
                <td>{sex}</td>
                <td>{kor}</td>
                <td>{eng}</td>
                <td>{mat}</td>
                <td>{sic}</td>
                <td>{sco}</td>
                <td>{ave}</td>
            </tr>
    );
};
GradeItem.propTypes= {
    name: PropTypes.string,
    grade: PropTypes.number,
    sex: PropTypes.string,
    kor: PropTypes.number,
    eng: PropTypes.number,
    mat: PropTypes.number,
    sic: PropTypes.number,
    soc: PropTypes.number,
    ave: PropTypes.number
}
GradeItem.defaultProps={
    kor: 0,
    eng: 0,
    mat: 0,
    sic: 0
}

export default GradeItem;
```

## 구현 결과
![](%EA%B5%AC%ED%98%84%EA%B2%B0%EA%B3%BC.png)