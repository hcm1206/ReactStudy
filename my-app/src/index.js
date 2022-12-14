import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList'
import NotificationList from './chapter_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root')); // 왜인지는 모르겠는데 이렇게 해야 동작함

root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
)

// Chapter5 ==================================================

// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
// );

// ===========================================================


// Chapter4 ==================================================

// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));

//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000); // 1000틱마다 갱신된 엘리먼트 변경

// ===========================================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
