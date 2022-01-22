import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// React에서 Redux 쓰는 이유
// 1. 모든 컴포넌트가 state 공유 가능
// 2. state의 수정 방법을 파일 한 곳에 정의해둠

const 초기값 :{count :number} = { count: 0 } // 모든 컴포넌트가 공유할 state

// 야발.. redux도 다 까먹었다ㅠ
// state는 type이 자동으로 지정됨 action의 타입만 지정해 주자
// 컴포넌트에서 dispatch() 날릴 때 거기에 넣는 파라미터랑 같음
// function reducer(state = 초기값, action :{type :string}) { // 미리 정의한 state 수정방법
//   if (action.type === '증가') {
//     return {...state, count : state.count + 1}
//   } else if (action.type === '감소') {
//     return {...state, count : state.count - 1}
//   } else {
//     return 초기값
//   }
// }

// @reduxjs/toolkit
// 이 문법의 좋은 점
// 1. 함수라 보기좋음
// 2. state 수정시 사본 만들 필요 없음
const counterSlice = createSlice({
  // 아래의 3개 속성이 꼭 들어가야 한다.
  name: 'counter',
  initialState: 초기값,
  reducers: {
    증가 (state) {
      state.count += 1
    },
    감소 (state) {
      state.count -= 1
    },
    맘대로증가 (state, action :PayloadAction<number>) {
      state.count += action.payload
    }
  }
})
// const store = createStore(reducer)
let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})
export type RootState = ReturnType<typeof store.getState>
// 수정 방법 만든 거 export
export let { 증가, 감소, 맘대로증가 } = counterSlice.actions

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
