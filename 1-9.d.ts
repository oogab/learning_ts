declare function 함수3(a: string): number;
declare type 함수타입 = (a: string) => number;
declare let 함수4: 함수타입;
declare type 옵젝내함수1 = (a: number) => number;
declare type 옵젝내함수2 = () => void;
declare let 회원정보: {
    name: string;
    age: number;
    plusOne: 옵젝내함수1;
    changeName: 옵젝내함수2;
};
declare type Member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare type 함수타입2 = (a: string) => string;
declare type 함수타입3 = (a: string) => number;
declare const cutZero: 함수타입2;
declare const removeDash: 함수타입3;
declare function 만들함수2(a: string, b: 함수타입2, c: 함수타입3): number;
