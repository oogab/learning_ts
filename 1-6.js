// function 내함수(x :number|string) {
//   if (typeof x === 'string') {
//     return x + '1'
//   } else {
//     return x + 1
//   }
// }
// Narrowing
// function 내함수(x :number|string) {
//   let array :number[] = []
//   if (typeof x === 'number') {
//     array[0] = x
//   }
// }
// Assertion
// 타입 덮어쓰기
function 내함수(x) {
    var array = [];
    array[0] = x;
}
// 빠따 안맞기 위한 assertion 문법의 용도
// 1. Narrowing 할 때 씁니다.
//  let 이름 :string = 'wook'
//  이름 as number => error 발생, 타입을 a에서 b로 변경 X
// 2. 무슨 타입이 들어올지 100% 확실할 때 씁니다.
// 버그 추적이 안된다... (그래서 굳이 쓸 필요가 없다!)
내함수(123);
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림
function 클리닝함수(before_arr) {
    var after_arr = [];
    before_arr.forEach(function (e) {
        if (typeof e === 'string') {
            e = Number(e);
        }
        after_arr.push(e);
    });
    return after_arr;
}
console.log(클리닝함수([2, '3', '4']));
// (숙제2) 다음과 같은 함수를 만들어보십시오.
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var 에러쌤 = { hello: 'hi' };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
// (동작예시)
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
// Q 이 자료가 array type 인지 어떻게 검사하냐고요? 구글에 물어보시면 됩니다.
function 만들함수(teacher) {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return 'error';
    }
}
console.log(만들함수(철수쌤));
