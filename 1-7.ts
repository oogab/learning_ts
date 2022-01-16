// type Animal = string|number|undefined
// type 변수 만드는 법, type alias

type Animal = {name :string, age: number}
// 대문자로 시작하고 Camel case로 작성한다.

let 동물 :Animal = {name: 'kim', age: 20}

// const obj = { value: 123 }
// obj.value = 234 <- 이런식으로 수정 가능
// typescript 쓰면 object 자료 수정도 막을 수 있음
type Girlfriend = {
  readonly name :string
}

const 여친 :Girlfriend = {
  name : '슬기'
}

// 여친.name = '유라' => error 발생
// 근데 실제 js 파일에서는 바꿔준다.
// ts가 에디터 상 에러를 보여주는 것이다.

// type Name = string
// type Age = number
// type Person = Name|Age => union type 가능

// type 자료형 재선언 불가
type PositionX = { x :number }
type PositionY = { y :number }

type NewType = PositionX & PositionY
// { x :number, y :number }

let position :NewType = {
  x : 10,
  y : 20
}

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 그건 여러분들이 한번 테스트해보길 바랍니다.

type Tst1 = { x :number, y :number}
type Tst2 = { y :number, z :number}
type NewTst = Tst1 & Tst2
// 중복 속성이 있으면 하나로 통합된다.

let tst :NewTst = {
  x : 10,
  y : 20, 
  z : 30
}

console.log(tst)

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈

type Shape = {
  color? :string,
  size :number,
  readonly position :number[]
}

let tst_shape = {
  size : 123,
  position : [2, 3, 4]
}

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Person1 = {
  name :string,
  phone? :string,
  email? :string
}

let 사용자 :Person1 = {
  name : 'wook',
  email : 'oogab@naver.com'
}

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type Person2 = {
  name :string,
  phone? :string,
  email? :string,
}
type Adult = { adult :boolean }
type AdultPerson = Person2 & Adult

let 성인 :AdultPerson = {
  name : 'sook',
  phone : '010-3221-6063',
  adult : true
}

