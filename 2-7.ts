///<refrence path="./a.ts" /> 이거 이렇게 쓰는 거 맞음?
import { 이름 } from './a.js'

// 옛날 import, export 없을 때는
// <script></script>를 파일마다 다 적용해서 js파일을 사용했다.
// 그러다 보니 맨날 변수명 겹치는 에러 발생

console.log(이름)

// (숙제3) 타입 중복이 너무 많이 발생합니다.

// type Dog = string;
// interface Dog { name : string };

// let dog1 :Dog = 'bark';
// let dog2 :Dog = { name : 'paw' }
// 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 

// (조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 

namespace 타입 {
  export type Dog = string
}
namespace 인터페이스 {
  export interface Dog { name : string }
}

let dog1 :타입.Dog = 'bark'
let dog2 :인터페이스.Dog = { name : 'paw' }

console.log(dog1, dog2)