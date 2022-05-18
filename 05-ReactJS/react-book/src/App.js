import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./ex/pages/Home";
import About from "./ex/pages/About";
import URLparameter from "./ex/pages/URLparameter";
import Articles from "./ex/pages/Articles";
import InArticles from "./ex/pages/InArticles";
import Layout from "./styled/Layout";
import NotFind from "./ex/pages/NotFind";
import Mypages from "./ex/Mypages";
import Login from "./ex/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<URLparameter />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<InArticles />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/mypages' element={<Mypages />} />
        <Route path='*' element={<NotFind/>}/>
      </Routes>
    </div>
  );
}

export default App;
