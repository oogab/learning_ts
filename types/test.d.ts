// 어쩌구.d.ts 파일
// - 타입정의 보관용 파일입니다.
// - 다른 ts 파일에서 import 가능

// ts 파일에 타입 정의가 너무 길면
// d.ts 파일 만들기도 함

// import/export 할게 많으면
// namespace 쓰든가
// import * as 어쩌구 쓰든가

// 모든 타입을 정리해놓은 래퍼런스용 d.ts 파일 쓰기

type Age = number
interface Person { name : string }

// d.ts 파일은 자동으로 글로벌 모듈 아님
// Definitely Typed github 리포지토리
// 타입스크립트 공식 홈페이지 => 라이브러리들 d.ts 제공
// npm 설치시 대부분 d.ts도 같이 들어옴