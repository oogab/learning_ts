declare function 마이타입함수<MyType>(x: MyType[]): MyType;
declare let a: number;
declare let b: string;
interface LengthCheck {
    length: number;
}
declare function 마이타입함수2<MyType extends LengthCheck>(x: MyType): number;
declare let c: number;
