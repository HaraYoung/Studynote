/**
 * @filename: App.js
 * @description: 페이지 시작점
 * @author:박세영(qkrtpdud9899@gmail.com)
 */

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Covid19 from './pages/Covid19';
import Top from "./components/Top";



function App() {
  return (
    <div>
      <Top/> 
       <Routes>
          <Route path='/:api' element={<Covid19/>}/>
      </Routes>
    </div>
  );
}

export default App;