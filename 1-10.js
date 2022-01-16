var 제목 = document.querySelector('#title');
// 타입이 Element|null
// HTML 조작시 narrowing 방법 5개
// # 1
// if (제목 != null) {
//   제목.innerHTML = '반가워요'
// }
// # 2 -> 가장 많이 쓰게 될거임
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
// # 3
// let 제목 = document.querySelector('#title') as Element
// as 키워드를 이용해 사기치기
// 권장하지 않음
// # 4
// 1. 제목에 innerHTML이 있으면 출력해주고
// 2. 없으면 undefined 뱉으셈
// (optional chaining)
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = '반가워요'
// }
// # 5
// tsconfig.json에서 귀찮은 strict 모드 끄기
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
// 버튼에 addEventListener 가능하면 해주시고
// 아니면 undefined 뱉으셈
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a> 
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요? 
var 링크2 = document.querySelectorAll('.naver');
링크2.forEach(function (l) {
    if (l instanceof HTMLAnchorElement) {
        l.href = "https://kakao.com";
    }
});
