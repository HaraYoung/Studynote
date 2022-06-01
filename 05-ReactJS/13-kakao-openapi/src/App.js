
import React, { memo } from 'react';
import {Route, Routes} from 'react-router-dom';
import Top from './components/Top';

import KakaoSlice from './pages/KakaoSearch';

const App = memo(() => {
  return (
    <div>
      <Top/>
      <Routes>
      <Route path='/:api' element={<KakaoSlice/>}/>
      {/*'/:api' => 주소에 들어가는 api종류를 변수로 지정함 - api는 path파라미터와 querystring 둘다 받음 */}
      </Routes>
    </div>
  )
})

export default App