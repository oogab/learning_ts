// Object에 타입지정하는 방법 => interface
// type Square = { color : string, width : number}
interface Square {
  color : string,
  width : number
}

let 네모 :Square = {
  color : 'red',
  width : 100
}

type Animal2 = { name :string }
type Cat = { age :number } & Animal2
// & (intersection type)
// 두 타입을 전부 만족하는 타입이라는 뜻

// Q. 이거 타입지정 interface 써서 해보셈
interface Student {
  name : string
}
interface Student {
  score? : number
}
// interface Teacher {
//   name : string, // 이거 중복되는 거 같은데?
//   age : number
// }
interface Teacher extends Student {
  age : number
}

let 학생 :Student = { name : 'kim' }
let 선생 :Teacher = { name : 'kim', age : 20 }

// interface 장점 : extends로 복사 가능

// type vs interface
// interface는 중복선언 가능
// type은 중복선언 불가능

// 외부 라이브러리 같은 경우는 interface 많이 씁니다.
// 그럼 추후에 interface에 뭐 추가하기 쉬움
// 다른 사람이 이용 많이 할 것 같으면 object 타입 정할 때 interface 쓰셈

// extends 쓸 때 중복속성 발생하면?
// 에러로 잡아준다.

// & 쓸 때 중복속성 발생하면?
// 미리 에러 안나서 주의해아한다.
// 직접 사용할 때 에러 발생!