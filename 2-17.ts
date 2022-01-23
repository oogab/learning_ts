// 삼항 연산자
// 3 > 1 ? console.log('맞음') : console.log('아님')

// 만약 여기에 string이 들어오면 string으로 남기고
// 아니면 unknown을 남겨주세요ㅎㅎ
// 1. type if문은 삼항연산자로
// 2. 조건식은 extends 써야함
type AGe<T> = T extends string ? string : unknown
let aaaa :AGe<string>
let a2 :AGe<number>


// Q 조건문으로 이런 타입 만들어 보셈
// - 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
// - array 타입말고 다른거 입력하면 any 남김
// 잘모르겠는데...ㅠ
// type FirstItem<T> = T extends [] ? T : any

// type TT = [string, number, boolean]
// let ff :FirstItem<TT> = 'name'

// infer 키워드
// 조건문에서 쓸 수 있는 infer 키워드 타입을 왼쪽에서 추출해줍니다.
// type 타입추출<T> = T extends (infer R)[] ? R : unknown
type 타입추출<T> = T extends ( () => infer R ) ? R : unknown
// 왼쪽에서 타입 뽑아서 R 변수에 담아주셈~
// Q 굳이 타입을 왜 뽑음?
// A 뽑아서 쓰고 싶을 때가 있어서요~

// 함수의 return 타입만 뽑아보고 싶다!
// ReturnType 이라는 기본 함수 쓰면 알아서 해줌
type f = 타입추출< () => void >

// (숙제1) 타입 파라미터로 

// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

// (동작예시)

// let age1 :Age<[string, number]>;
// let age2 :Age<[boolean, number]>; 
// 이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

// 이걸 만족하는 type Age를 만들어봅시다.

type Ddd<T> = T extends [string, ...any] ? T[0] : unknown
let ddd :Ddd<[string, number]>
let ddc :Ddd<[boolean, number]>


// (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

// 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
// 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
// 아무튼 함수의 파라미터타입이 남아야합니다.

type 타입뽑기<T> = T extends (x :infer R) => void ? R : unknown
type 뽑은타입 = 타입뽑기< (x :number) => void >
