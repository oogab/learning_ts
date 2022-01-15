var 회원들 = [1, '2', 3];
// number|string 소괄호 없으면 둘 중 하나로 고정된다.
var 오브젝트 = { a: 123 };
var 애니;
// 타입 쉴드를 해제한다! 느낌으로 생각하면 좋다.
// 일반 JS 변수로 사용하고 싶다면 any를 쓴다.
// 그래서 타입관련 버그가 나도 잡아주지 않음
애니 = 123;
애니 = [];
var 언논;
// 모든 자료형 허용해줌
// any 보단 더 안전함 why?
var 변수 = 이름;
// 변수 = 언논 error 발생
// any => 변수의 쉴드 해제
// unknown => 변수의 쉴드에 막힘
var 연세;
// 연세 + 1; error 발생
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string|number 타입 + 1 (안돼)
// string|number는 아예 새로운 형태의 타입으로 인식한다.
var 숫자 = 1;
// 숫자 - 1; error 발생
// 숫자가 할당되었으나 여전히 unknown 타입이다.
// 숫자와 관련된 연산 못함!
// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// (숙제2) 학교라는 변수에 타입지정해보십시오.
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phill',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
