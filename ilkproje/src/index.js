import React,{useState} from 'react';// use state biz ekledik
import ReactDOM from 'react-dom';
import './index.css';
import RenderList from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <RenderList />,document.getElementById('root'));// app componentini render et demek

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
