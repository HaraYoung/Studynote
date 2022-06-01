import React from 'react';
import ReactDOM from 'react-dom/client';
/**/
import App from './App';
/*/
import App from './Test';
/**/
import {BrowserRouter} from 'react-router-dom';
import Meta from './Meta';

//리덕스 구성을 위한 참조
import { Provider } from 'react-redux';
import store from './Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Meta/>
    <App />
  </Provider>
  </BrowserRouter>
);
