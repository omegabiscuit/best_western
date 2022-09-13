import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Thread from './components/Thread/Thread';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Route, Routes } from "react-router-dom";


const thread1 = {
  id:1,
  title: 'thread1',
  timeStamp: "4/13/1650",
  commentCount: 10,
};
const thread2 = {
  id:2,
  title: 'thread2',
  timeStamp: "8/23/1920",
  commentCount: 5,
};
const root = ReactDOM.createRoot(document.getElementById('root'));
const threads = [thread1,thread2];
root.render(
  <React.StrictMode>
    <App threads = {threads}/>
    <Thread thread = {thread1}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
