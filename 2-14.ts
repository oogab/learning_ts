// interface는 object 타입 지정할 때 쓴다
// 하지만 용도가 하나 더 있는데 class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있습니다.
// 근데 implements 키워드도 필요합니다.

// implements 키워드

interface CarType {
  model :string,
  price :number
}

class Car implements CarType {
  model :string
  price :number = 1000
  constructor(a :string) {
    this.model = a
  }
}

let 붕붕이 = new Car('morning')

// class Car로부터 생산되는 object들은 model과 price 속성을 가지게 됩니다.
// 근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게 합니까?
// 그럴 경우 interface + implements 키워드로 확인하면 됩니다.


// implements는 타입 지정 문법이 아닙니다.
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻입니다.
// class에다가 타입을 할당하고 변형시키는 키워드는 아닙니다.

interface CaarType {
  model :string,
  tax :(price :number) => number
}

class Caar implements CaarType {
  model :string
  tax (a :number) {
    return a * 0.1
  }
}