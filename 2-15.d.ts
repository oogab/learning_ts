interface StringOnly {
    [key: string]: string | number;
    age: number;
}
interface NumberProps {
    [key: number]: string;
}
declare let uuser: StringOnly;
declare let userr: NumberProps;
interface ObType {
    'font-size': ObType | number;
}
declare let css: ObType;
interface indexSig {
    [key: string]: string | number;
}
declare let obj: indexSig;
interface recursiveType {
    'font-size': number;
    [key: string]: recursiveType | number;
}
declare let objj: recursiveType;
