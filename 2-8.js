// 함수에 타입도 파라미터로 입력 가능
function 마이타입함수(x) {
    // x[0] => 4 있는데 왜 a의 타입은 unknown임?
    // 숫자가 나온다고 해서 숫자로 타입변환 그런거 안해줌
    return x[0];
    // 해결책 1. 여기서 narrowing 하거나 as 쓰거나 그러시면 될듯 (귀찮음)
    // 해결책 2. Generic 함수 만들기 (파라미터로 타입을 입력하는 함수)
}
var a = 마이타입함수([4, 2]);
var b = 마이타입함수(['4', '2']);
// 참고 타입 파라미터 가끔 자동 유추함
// let a = 마이타입함수([4,2])
// let b = 마이타입함수(['4', '2'])
// 그래도 명시적으로 써주는게 좋지 않을까요?
console.log(a);
console.log(b);
// extends는 MyType이 우측의 속성을 가지고 있는지 체크합니다.
// 인터페이스를 넣으니까 좀 신기하구만..
function 마이타입함수2(x) {
    // 마이타입함수2 입장에서는 만약
    // let a = 마이타입함수2<number>(100) 가 없다면?
    // 당연히 MyType에 뭐가 들어올 줄 알고 -1 연산을 허용합니까?
    // 불확실함 만약 string 들어오면 -1 못하잖아 어쩔거야
    // Narrowing하면 되지.. 근데 너무 귀찮아 그래서 MyType을 제한할 수 있다.
    // return x - 1
    return x.length;
}
var c = 마이타입함수2('100');
