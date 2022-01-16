function 함수(x :number|string) :void {
  if (typeof x === 'number') {
    console.log(x + 3)
  }
}

함수(2)
// 변수? :number는 변수 : number|undefined와 같음

// 왜 error 발생?
// string + number (가능)
// number + number (가능)
// number|string + number (불가능)

