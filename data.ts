// ts 파일을 ambient 모듈이 아니라 로컬 모듈로 만드는 방법
// import export 있으면 자동으로 로컬 모듈임!

// 현재 로컬 모듈인데 여기서 글로벌 변수를 만들고 싶어짐!
export {}

// 그럼 declare global{} 안에 적으면 됩니다.
declare global {
  type Dog = string
}

let bbb = 10
