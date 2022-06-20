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


// 함수 정의와 동시에 죽시 실행되는 함수로
// 단, 한 번만 호출되며 다시 호출할 수 없다
(
    function (a, b) {
        document.getElementById('p1').innerHTML = `a : ${a}, b: ${b}, a + b = ${a + b}`
    }
) (10, 20);

// 3) 화살표 함수
/*
    [표현법]
        1) 매개 변수 처리
            - 매개 변수가 없을 때 (소괄호 반드시 필요) : () => {...}
            - 매개 변수가 하나일 때 (소괄호 생략은 가능): [()] => {...} 
            - 매개 변수가 두 개 이상일 때 : (x, y, ...) => {...}

        2) 리턴 처리
            - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다
                (x, y) => {
                    실행 구문;
                    ...
                    return x + y;
                }
            - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다
                (x, y) => x + y;
 */

let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => alert('화살표 함수를 사용한 이벤트 핸들러 실행'));

/* ******************************* */
/* ******************************* */
/* ******************************* */
// 2. 함수 호출
// 1) 매개 변수

let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', (event) =>{
    // argTest(); // => Undefiend
    argTest('안녕하세요');
    //argTest('안녕하세요', '만나서 반갑습니다'); // 첫번째 매개값만 나옴
    // argTest();

    // 이벤트 핸들러의 값들에 관한 내용을 확인할 수도 있다
    console.log(event);
    console.log(event.target); // 이벤트 객체 위치
    // 화살표 함수에서는 arguments 객체를 생성하지 않는다
    // console.log(arguments); // Error 발생
});

// function argTest(value) {
// 기본 값 세팅 방법
// 매개 변수 기본 값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다 (ES6부터 도입)
// function argTest(value = '매개값 없음') {
// function argTest() {
function argTest(value = '매개값 없음') {
    alert(value);
}

// 2) arguments 객체
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function() {
    console.log(arguments); // arrow 함수에서는 arguments를 사용할 수 없음
});













