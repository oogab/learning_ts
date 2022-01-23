declare let oobj: {
    name: string;
    age: number;
};
interface Person {
    age: number;
    name: string;
}
declare type PersonKeys = keyof Person;
declare let aa: PersonKeys;
declare type CCar = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
declare type 새로운타입 = TypeChanger<CCar>;
declare type Bus = {
    color: string;
    model: boolean;
    price: number;
};
declare type TChanger<MyType> = {
    [key in keyof MyType]: string | number;
};
declare type 새새타입 = TChanger<Bus>;
declare type GoodChanger<MyType1, MyType2> = {
    [key in keyof MyType1]: MyType2;
};
declare type 새새새타입 = GoodChanger<Bus, boolean>;
declare type 새새새새타입 = GoodChanger<Bus, string[]>;
