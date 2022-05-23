import React from 'react';
import News from './page/News';

function App() {
  return (
    <div >
      <h1> Redux 연습문제 </h1>
      <News/>
    </div>
  );
}

export default React.memo(App);
