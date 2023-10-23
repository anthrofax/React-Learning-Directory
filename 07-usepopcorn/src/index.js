import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Star from './Star'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Star maxRating={5}/>
    <Star maxRating={10}/>
    <Star />
  </React.StrictMode>
);

