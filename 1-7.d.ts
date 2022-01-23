declare type Animal = {
    name: string;
    age: number;
};
declare let 동물: Animal;
declare type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type NewType = PositionX & PositionY;
declare let position: NewType;
declare type Tst1 = {
    x: number;
    y: number;
};
declare type Tst2 = {
    y: number;
    z: number;
};
declare type NewTst = Tst1 & Tst2;
declare let tst: NewTst;
declare type Shape = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let tst_shape: {
    size: number;
    position: number[];
};
declare type Person1 = {
    name: string;
    phone?: string;
    email?: string;
};
declare let 사용자: Person1;
declare type Person2 = {
    name: string;
    phone?: string;
    email?: string;
};
declare type Adult = {
    adult: boolean;
};
declare type AdultPerson = Person2 & Adult;
declare let 성인: AdultPerson;
