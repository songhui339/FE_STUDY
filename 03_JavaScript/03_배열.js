/*
    03_배열 JavaScript
*/
// 화면이 모두 로드된 다음에 함수가 실행됨
window.onload = function() {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let arr1 = []; // 리터럴을 사용해서 배열을 선언하는 방법
        let arr2 = new Array(); // 생성자 함수 사용해서 배열 선언하는 방법 [empty X 3] 2번쨰 방법
        let arr3 = new Array(3); // [empty X 3] 2번쨰 방법
        let arr4 = new Array('Red', 'Blue', 'Yellow', 'Green'); 
        let arr5 = ['java', 'oracle', 'html5', 'css3', 'javascript'];
        let div1 = document.getElementById('div1');
        let arr6 = [
            '최송희',
            29,
            true,
            [1, 2, 3, 4],
            {},
            function() {}
        ];

        console.log(arr1, arr2, arr3, arr4, arr5, arr6);

        arr1[0] = '귤';
        arr1[1] = '수박';
        arr1[2] = '메론';

        arr2[0] = '벤츠';
        arr2[1] = '아우디';
        arr2[2] = 'BMW';
        arr2[3] = '벤틀리';



        div1.innerHTML = 'Hello<br>';
        div1.innerHTML += `arr1 : [${arr1}], arr1.length : ${arr1.length} <br>`;
        div1.innerHTML += `arr2 : [${arr2}], arr2.length : ${arr2.length} <br>`;
    }
}