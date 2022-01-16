let 이름2 :string
// 더 엄격한 타입지정 가능
// 'kim' or 'park' 문자만 들어올 수 있습니다.
// Literal types
// - 변수에 뭐가 들어올지 더 엄격하게 관리가능
// - 자동완성 힌트 굿

let 숫자2 :123
// 숫자 = 234 => error 발생
// 숫자 = '234' => error 발생

let 접니다 :'대머리'|'솔로'

function 함수2(a :'hello') :1|0 {
  // return 435 => error 발생
  return 0
}
함수2('hello')
// 함수('cello') => error 발생

// Q 이런 함수 어떻게 만들죠
// 1. 가위 or 바위 or 보 중 1개 입력가능
// 2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함

function 가위바위보함수(a :'가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
  let arr :('가위'|'바위'|'보')[] = []
  arr.push(a)
  return arr
}

// 가위바위보함수('바보') => error
가위바위보함수('가위')

// const 변수의 한계
// object를 할당했을 때 속성은 변경가능
// Literal type은 const 변수와 유사하게 사용가능
// const 변수 업글버전

var 자료 = {
  name : 'kim'
} as const
// 자료.name => 'kim'
// as const
// - 이 object는 Literal type 지정 알아서 해주셈 
// 효과1. object value 값을 그대로 타입으로 지정해줌
// 효과2. object 속성들에 모두 readonly 붙여줌

// 'kim'이라는 자료만 들어올 수 있습니다 X
// 'kim'이라는 타입만 들어올 수 있습니다 O
function 내함수(a :'kim') {

}

내함수(자료.name)
// 내함수(자료.name) => error 발생
// 자료.name => string / 'kim'이 아님!
// Literal type의 문제점

