// import { bbb } from './data'
// ts -> ts 변수를 가져다 쓰고 싶으면
// import export 써야지..

// ts 이상한 특징 : 모든 ts 파일은 ambient module (글로벌 모듈)
// import export 없이도 다른 파일에 있던 var bbb 쓸 수 있음

// declare로 정의한 내용은 js로 변환되지 않음
let aaa :number = 10

console.log(aaa + 2)
// data.ts가 로컬 모듈이 되어서 bbb가 정의되지 않음
// console.log(bbb)
let dd:Dog = 'kim'
console.log(dd)

// 특히 .js로 만든 라이브러리 사용할 때
// 변수, 함수 같은걸 declare로 재정의하기도 합니다.
