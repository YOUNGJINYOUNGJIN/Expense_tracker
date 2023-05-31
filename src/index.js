// index.js는 가장 먼저 실행되는 파일
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; // css는 확장자가 있어야 한다.
import App from './App'; // index.js에 가져온다. 서드 파티 라이브러리나 js 파일 중 하나라면 import로 가져올 때는 확장자가 없어야 한다.

// 이 root 객체를 상수 또는 변수에 저장한 뒤 root 객체에서 render 메서드를 호출하여 
// React에게 선택된 div에서 무엇이 렌더링 되어야 할지를 알려준다. div는 일반적인 root 요소.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // App 컴포넌트는 root라는 id를 갖는 요소가 있는 곳에 렌더링 된다.(정확히는 div 태그 내에 렌더링)
