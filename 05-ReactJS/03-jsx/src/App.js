import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Expr from './pages/Expr';
import If1 from './pages/IF-1';
import If2 from './pages/IF-2';
import If3 from './pages/IF-3';
import If4 from './pages/IF-4';
import Loop1 from './pages/Loop-1';
import Loop2 from './pages/Loop-2';
import Loop3 from './pages/Loop-3';

function App() {
  return (
    <div>
      <h1>03-jsx</h1>
      <nav>
          <Link to='/expr'>[Expr]</Link>
          <hr />
          <Link to='/If1'>[if-1]</Link>
          <hr />
          <Link to='/If2'>[if-2]</Link>
          <hr />
          <Link to='/If3'>[if-3]</Link>
          <hr />
          <Link to='/If4'>[if-4]</Link>
          <hr />
          <Link to='/Loop1'>[loop-1]</Link>
          <hr />
          <Link to='/Loop2'>[loop-2]</Link>
          <hr />
          <Link to='/Loop3'>[loop-3]</Link>
      </nav>

      <Routes>
        <Route path="/expr" element={<Expr/>}/>
        <Route path="/If1" element={<If1/>}/>
        <Route path="/If2" element={<If2/>}/>
        <Route path="/If3" element={<If3/>}/>
        <Route path="/If4" element={<If4/>}/>
        <Route path="/Loop1" element={<Loop1/>}/>
        <Route path="/Loop2" element={<Loop2/>}/>
        <Route path="/Loop3" element={<Loop3/>}/>
      </Routes>
    </div>
  );
}

export default App;
