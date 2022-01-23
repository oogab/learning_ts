interface Square {
    color: string;
    width: number;
}
declare let 네모: Square;
declare type Animal2 = {
    name: string;
};
declare type Cat = {
    age: number;
} & Animal2;
interface Student {
    name: string;
}
interface Student {
    score?: number;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
