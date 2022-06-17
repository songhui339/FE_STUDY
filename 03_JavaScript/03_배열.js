/*
    03_배열 JavaScript
*/
// 화면이 모두 로드된 다음에 함수가 실행됨
window.onload = function() {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let arr1 = []; // 리터럴을 사용해서 배열을 선언하는 방법
        let arr2 = new Array(3); // [empty*3] 2번쨰 방법
        let arr3 = new Array('Red', 'Blue', 'Yellow', 'Green'); 
        let div1 = document.getElementById('div1');

        console.log(arr1, arr2, arr3);

        div1.innerHTML = 'Hello<br>';
    }
}