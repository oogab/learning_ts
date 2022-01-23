interface CarType {
    model: string;
    price: number;
}
declare class Car implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이: Car;
interface CaarType {
    model: string;
    tax: (price: number) => number;
}
declare class Caar implements CaarType {
    model: string;
    tax(a: number): number;
}
