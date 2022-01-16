function 함수3(a) {
    return 1;
}
// () => { return 10 }
// () => 10 // 같은 의미
// 함수표현식을 써야 한다.
var 함수4 = function (a) {
    return 1;
};
// object 안에 함수 만들 수 있음
var 회원정보 = {
    name: 'kim',
    age: 30,
    // Q object 안의 함수 타입지정은 어떻게?
    // 파라미터가 있는데 타입 지정 안하면 혼남
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(2);
회원정보.changeName();
var cutZero = function (a) {
    // if (a[0] === '0') {
    //   a = a.substring(1)
    // }
    // return a
    var result = a.replace(/^0+/, "");
    return result;
};
var removeDash = function (a) {
    var num;
    a = a.replace(/-/g, "");
    return Number(a);
};
console.log(cutZero('0많이'));
console.log(removeDash('13-23-23'));
// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
function 만들함수2(a, b, c) {
    return c(b(a));
}
console.log(만들함수2('010-3221-6063', cutZero, removeDash));
