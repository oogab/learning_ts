var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    // data = 0 => class 필드
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('wook');
var 사람2 = new Person('sook');
사람1.함수('함수');
