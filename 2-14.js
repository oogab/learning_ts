// interface는 object 타입 지정할 때 쓴다
// 하지만 용도가 하나 더 있는데 class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있습니다.
// 근데 implements 키워드도 필요합니다.
var Car = /** @class */ (function () {
    function Car(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car;
}());
var 붕붕이 = new Car('morning');
var Caar = /** @class */ (function () {
    function Caar() {
    }
    Caar.prototype.tax = function (a) {
        return a * 0.1;
    };
    return Caar;
}());
