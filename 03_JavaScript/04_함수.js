/*
    04_함수 JavaScript
*/

// 1. 함수 선언
// 1) 선언적 함수
function test1() {
    alert('test1() 함수 실행!');
}

// 2) 익명 함수
let btn2 = document.getElementById('btn2');

// btn2.onclick = function () {
//     alert('이벤트 핸들러 실행');
// }

btn2.addEventListener('click', function() {
    alert('이벤트 핸들러 실행');
});














