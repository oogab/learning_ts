// export type Name = string
export var 이름 = 'kim'
var 나이 = 20

// 오브젝트와 다르게 생겼는데
// 아무튼 오브젝트 안에 숨긴거임
namespace 네임스페이스 {
  export type Name = string | number
}

let 변수 :네임스페이스.Name = 'wook'
// 네임스페이스별로 같은 이름의 타입도 다르게 설정 가능
// 타입명 중복을 막는 방법 중 하나
