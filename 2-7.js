///<refrence path="./a.ts" /> 이거 이렇게 쓰는 거 맞음?
import { 이름 } from './a.js';
// 옛날 import, export 없을 때는
// <script></script>를 파일마다 다 적용해서 js파일을 사용했다.
// 그러다 보니 맨날 변수명 겹치는 에러 발생
console.log(이름);
var dog1 = 'bark';
var dog2 = { name: 'paw' };
console.log(dog1, dog2);
