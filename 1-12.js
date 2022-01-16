var 네모 = {
    color: 'red',
    width: 100
};
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 20 };
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
