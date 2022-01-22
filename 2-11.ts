let 멍멍 :[string, boolean?] = ['dog', true]
// [tuple type]
// 첫 자료는 무조건 string
// 둘째 자료는 무조건 boolean
// (위치까지 고려한 타입 지정 가능)
// 물론 다른 모든 타입 넣기 가능
// 들어올 수도 있고 안 들어올 수도 있다 -> ?
// let 멍멍 :[string, boolean?, number] = ['dog', true] => 이렇게는 쓰면 안됨!
// ? 표시는 항상 뒤에서부터 채워야 한다!

function 함수5(...x :[number, string]) {
  console.log(x)
}
function 함수6(a :number, b :string) {
  console.log([a, b])
}
// 함수5나 함수6이나..

함수5(1, '222')
함수6(1, '222')

let arr = [1, 2, 3]
// rest랑 비슷한 뜻임
// array 들어오긴 하는데.. 아직 몇 개인지는 몰라요!
let arr2 :[number, number, ...number[]] = [4, 5, ...arr] // [4, 5, 1, 2, 3]
// array 합칠 때 ... spread 연산자 씁니다.

// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

// 오늘 배운 tuple 타입으로 타입지정합시다. 
// 쉬워서 답은 생략합니다.
// (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.

let food :[string, number, boolean] = ['burgerking', 12000, true]

// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 

// tuple 타입과 spread 연산자를 써보도록 합시다. 

let testArr :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

// (숙제3) 함수에 타입지정을 해보도록 합시다.

// function 함수(){
  
// }
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
// 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.

function 숙제함수(...str :[string, boolean, ...(number|string)[]]) {
  console.log(str)
}

숙제함수('a', true, 6, 3, '1', 4)

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

// (동작예시)
// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

function classify(...value :(string|number)[]) :[string[], number[]] {
  let strArr :string[] = []
  let numArr :number[] = []

  value.forEach((e) => {
    if (typeof e === 'string') {
      strArr.push(e)
    } else {
      numArr.push(e)
    }
  })
  
  return [strArr, numArr]
}

console.log(classify('b', 5, 6, 8, 'a'))