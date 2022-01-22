import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { 증가 } from './index';
// 1. 일반변수, 함수 만들 때 타입 지정 잘 하셈
// 2. JSX 표현하는 타입 있음
var 박스 = <div>박스입니다.</div>;
// 3. component 만들 때 타입 지정
// 함수 타입지정은 파라미터 & return 값
// 언제나 props의 type alias 사용가능
function Profile(props) {
    return (<div>{props.name}입니다.</div>);
}
// 4. component props 타입 지정
// 맨날 props 잘못 지정해서 에러 발생한다.
function App() {
    // 5. useState 타입 지정 (알아서 해줌)
    // 그런데 state에 string | number 타입 넣고 싶다면? -> 이런 경우는 거의 드물다.
    // Generic 사용해서 타입을 지정해주면 된다.
    // let [user, setUser] = useState<string | number>('kim')
    var 꺼내온거 = useSelector(function (state) { return state; });
    var dispatch = useDispatch();
    return (<div className='App'>
      {/* { 박스 }
        <h4>안녕하십니까</h4>
        props는 object로 묶여서 들어간다.
        <Profile name="철수" age="20"></Profile> */}
      {꺼내온거.counter1.count}
      {/* <button onClick={()=>{dispatch({type : '증가'})}}>버튼</button> */}
      <button onClick={function () { dispatch(증가()); }}>버튼</button>
    </div>);
}
export default App;
