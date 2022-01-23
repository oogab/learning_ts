interface StringOnly {
  // 아래 처럼 일일이 string을 붙여주기 귀찮다.
  // name :string,
  // age :string,
  // location :string
  
  // index signature 쓰면
  // object 타입 지정 한번에 가능
  [key :string]:string|number
  // 모든 문자로된 속성

  age :number // 이런것들 금지된다
  // 하지만 위 처럼 string|number 해두면 위처럼 쓸 수 있다.
  // index signature와 중복되는 속성?

  // 해석하면 age라는 속성은 number를 가져야 한다.
  // 모든 속성은 string이나 number를 가져야 한다.
  // literal type도 허용된다.
}

interface NumberProps {
  // 속성이름이 숫자인데 왜 string 허용 됨?
  // 내부적으로 결국 string으로 치환되기 때문에
  // [key :string]:string
  [key :number]:string
}

let uuser :StringOnly = {
  name : 'kim',
  age : 20,
  location : 'seoul'
}

// 속성이름이 숫자인 경우?
let userr :NumberProps = {
  0 : 'kim',
  1 : '20',
  2 : 'seoul'
}

// array랑 비슷한데?
userr[0]

// 이런 object 자료 타입 지정은 어떻게 함?
// interface ObType {
//   'font-size': {
//     'font-size': {
//       'font-size': number
//     }
//   }
// }

// recursive 하게 타입 만드는 법
// 딱히 쓸 일은 없다.
interface ObType {
  'font-size': ObType | number
}

let css :ObType = {
  'font-size': {
    'font-size': {
      'font-size': 14
    }
  }
}

// (숙제1) 다음 자료의 타입을 지정해보십시오. 

// let obj = {
//   model : 'k5',
//   brand : 'kia',
//   price : 6000,
//   year : 2030,
//   date : '6월',
//   percent : '5%',
//   dealer : '김차장',
// }
// 귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다. 

// 유연한 타입지정이 가능하지만 엄걱하지 않아서
// 버그를 잡아준다는 장점은 없어질 수 있습니다.
interface indexSig {
  [key :string]:string|number
}

let obj :indexSig = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 

// let obj = {
//   'font-size' : 10,
//   'secondary' : {
//     'font-size' : 12,
//     'third' : {
//       'font-size' : 14
//     }
//   }
// }
// object 안에 object 안에 object가 들어있습니다.
// 타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요. 

interface recursiveType {
  'font-size' :number,
  [key :string] :recursiveType | number
}

let objj :recursiveType = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}