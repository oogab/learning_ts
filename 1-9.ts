function 함수3(a :string) :number {
  return 1
}

// type alias에 함수 type 저장해서 쓰는 법
type 함수타입 = (a :string) => number
// () => { return 10 }
// () => 10 // 같은 의미

// 함수표현식을 써야 한다.
let 함수4 :함수타입 = function (a) {
  return 1
}


type 옵젝내함수1 = (a: number) => number
type 옵젝내함수2 = () => void
// object 안에 함수 만들 수 있음
let 회원정보 :{
  name : string,
  age : number,
  plusOne : 옵젝내함수1,
  changeName : 옵젝내함수2
} = {
  name : 'kim',
  age : 30,
  // Q object 안의 함수 타입지정은 어떻게?
  // 파라미터가 있는데 타입 지정 안하면 혼남
  plusOne(a) {
    return a + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}

회원정보.plusOne(2)
회원정보.changeName()

// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
// - type 키워드를 쓰든 말든 알아서 합시다. 

type Member = {
  name : string,
  age : number,
  plusOne : (x :number) => number,
  changeName : () => void
}

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

type 함수타입2 = (a :string) => string
type 함수타입3 = (a :string) => number

const cutZero :함수타입2 = function (a) {
  // if (a[0] === '0') {
  //   a = a.substring(1)
  // }
  // return a
  let result = a.replace(/^0+/, "")
  return result
}

const removeDash :함수타입3 = (a) => {
  let num :number
  a = a.replace(/-/g, "")
  return Number(a)
}

console.log(cutZero('0많이'))
console.log(removeDash('13-23-23'))

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

function 만들함수2(a :string, b :함수타입2, c :함수타입3) :number {
  return c(b(a))
}

console.log(만들함수2('010-3221-6063', cutZero, removeDash))