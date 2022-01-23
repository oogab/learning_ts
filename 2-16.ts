// 타입을 한꺼번에 바꿔치기도 가능
let oobj = {
  name : 'kim',
  age : 20  
}

Object.keys(oobj)

interface Person {
  age : number,
  name : string
}

// key 값을 전부 가져오는 keyof
// 'name1'은 literal type이라서 안됨
// 이거 근데 잘 이해가 안가는데..ㅠ
type PersonKeys = keyof Person
let aa :PersonKeys = 'name'

type CCar = {
  color : boolean,
  model : boolean,
  price : boolean | number
}
// 이걸 전부 string으로 바꾸려면
// 일일이 다 바꾸려면 너무 힘든걸ㅠㅠ

type TypeChanger<MyType> = {
  [key in keyof MyType] :string
  // Q price 속성은 string|number 이렇게 되게?
  // - 다음 시간에 조건문 배우면 가능할 듯
}

type 새로운타입 = TypeChanger<CCar>

// (숙제1) 다음 타입을 변환기를 돌려보십시오.

type Bus = {
  color : string,
  model : boolean,
  price : number
}
// 동료가 잘못 만든 타입입니다.
// color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
// 1. 변환기 하나 만드시고
// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type TChanger<MyType> = {
  [key in keyof MyType] :string|number
}

type 새새타입 = TChanger<Bus>

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?

// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type GoodChanger<MyType1, MyType2> = {
  [key in keyof MyType1] :MyType2
}

type 새새새타입 = GoodChanger<Bus, boolean>
type 새새새새타입 = GoodChanger<Bus, string[]>
