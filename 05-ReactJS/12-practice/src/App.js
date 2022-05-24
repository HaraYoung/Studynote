import React from 'react';
import Accident from './page/Accident';


function App() {
  return (
    <div >
      <h1> Redux 연습문제 </h1>
      <hr />
      <br/>
      <Accident/>
    </div>
  );
}

export default React.memo(App);
