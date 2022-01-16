class Person {
  name :string // 타입 지정이 선행해야한다.

  constructor(a :string) {
    this.name = a
  }
  // data = 0 => class 필드

  함수(a :string) {
    console.log('안녕' + a)
  }
}

let 사람1 = new Person('wook')
let 사람2 = new Person('sook')
사람1.함수('함수')