import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Meta from './Mate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Meta/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </>
);
