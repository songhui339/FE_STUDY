/*
    01_개요 JavaScript
*/


// 변수 선언
var btn2 = document.getElementById('btn2');
// 함수를 호출하는 구문 + ()
// btn2.onclick = consoleTest();
btn2.onclick = consoleTest;

// 자바의 method
// Function은 반환형이 없음
function consoleTest() {
    console.log('버튼 클릭!');
}

// 데이터 출력
// function checkConfirm() {
//     if(confirm('여러분 배고픈가요?')) {
//         alert('저도 배고파요~');
//     } else {
//         alert('저만 배고픈가요?ㅜㅅㅠ');
//     }
// }

// prompt