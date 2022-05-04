import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MenuLink from './components/MenuLink';

import MyState from './pages/MyState';
import DateRange1 from './pages/DateRange1';
import DateRange2 from './pages/DateRange2';
import MyCallback from './pages/MyCallback';
import MyEffect from './pages/MyEffect';
import MyRef from './pages/MyRef';
import MyMemo from './pages/MyMemo';
import MyReducer from './pages/MyReducer';
import MyWidth from './pages/MyWidth';



function App() {
  return (
    <div>
      <h1> Hook Event</h1>
      <nav>
          <MenuLink to='/mystate'>My State</MenuLink>
          <MenuLink to='/daterange1'>Date Range 1</MenuLink>
          <MenuLink to='/myeffect'>My Effect</MenuLink>
          <MenuLink to='/myref'>My Ref</MenuLink>
          <MenuLink to='/myreducer'>My Reducer</MenuLink>
          <MenuLink to='/daterange2'>Date Range 2</MenuLink>
          <MenuLink to='/mymemo'> My Memo</MenuLink>
          <MenuLink to='/mycallback'>My Callback</MenuLink>
          <MenuLink to='/mywidth'>My Width</MenuLink>
      </nav>
      <Routes>
        <Route path='/mystate' element={<MyState/>}/>
        <Route path='/daterange1' element={<DateRange1/>}/>
        <Route path='/myeffect' element={<MyEffect/>}/>
        <Route path='/myref' element={<MyRef/>}/>
        <Route path='/myreducer' element={<MyReducer/>}/>
        <Route path='/daterange2' element={<DateRange2/>}/>
        <Route path='/mymemo' element={<MyMemo/>}/>
        <Route path='/mycallback' element={<MyCallback/>}/>
        <Route path='/mywidth' element={<MyWidth/>}/>
      </Routes>

    </div>
  );
}

export default App;
