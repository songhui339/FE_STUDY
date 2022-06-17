/*
    02_기본문법 JavaScript
*/

// document.getElementById('heading1').style.backgroundColor = 'red';

/*
    1. 변수
        1) 변수 선언
*/

// 전역 변수 선언
// 키워드 없이 선언된 변수
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';

console.log(str1);
console.log(str2);
console.log(str3); // window.str3 -> undefined
// console.log(str4); 
// ㄴ not defined

// 이벤트가 발생해야 실행 되는 함수
// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되게 하는 함수
window.onload = function() {
    var str2 = 'var 지역변수';
    var str4 = '지역변수';

    // document.getElementById('heading1').style.backgroundColor = 'red';
    console.log(this.str1);
    // this 는 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log(window.str2);
    console.log(str2);
    console.log(str3);
    console.log(this.str4); 
    // ㄴ undefined : 지역변수이므로 window에 들어가지 않음
    console.log(window.str4); 
    // ㄴ undefined : 지역변수이므로 window에 들어가지 않음

    // var, let, const(상수) 의 차이점
    // 1) 중복 선언
    var num = 0;
    console.log(num);
    
    var num = 10;
    console.log(num);

    var num = 20;
    console.log(num);

    let num2 = 10;
    console.log(num2);

    // 중복 선언 안됨
    // let num2 = 10;
    // console.log(num2);

    // 생성할 때 값을 할당 안하면 에러 발생
    // const NUM3;
    const NUM3 = 51;
    console.log(NUM3);
    // 중복 선언 안됨
    // const NUM3 = 300;
    // NUM3 = 20;

    // 2) 유효 범위 (스코프)
    if(true) {
        var num4 = 40;

        console.log(num4);
    }
    console.log(num4);

    // let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다
    if(true) {
        let num5 = 50;
        const NUM6 = 60;

        console.log(num5);
        console.log(NUM6);
    }
        // is not defined 에러 남
        // console.log(num5);
        // console.log(NUM6);

    // 초기 단계에서는 변수만 만들어놓는 것을 호이스팅이라고 한다
    // let으로 선언된 변수는 호이스팅 불가
    // - 호이스팅 가능
    console.log(num7); // undefined
    var num7 = 80;
    console.log(num7);

    // - 호이스팅 불가
    // console.log(num8);
    // let num8;
}
function add (a, b) {
    return a + b;
}


/*
    2. 자료형
*/
function typeTest() {
    let name = '최송희'; // 문자열 리터럴
    let age = 29; // 숫자
    let height = 175.6; // 숫자
    let check = false; // 논리값
    let hobbies = ['축구', '야구', '농구']; // 배열 객체
    // 객체
    let user = {
        id: 'sh.choi',
        name : '최송희',
        age : 29,
        height: 175.6,
        // hobbies: ['축구', '야구', '농구']
        // property(객체속성명) : 변수명
        // hobbies : hobbies 
        hobbies
        // property에 ''나 "" 생략 가능 하지만 속성명에 공백이나 특수문자가 들어갈 경우 포함 필요
    }; 
    // 함수
    let func = function(x, y) {
        return x + y;
    }

    let div1 = document.getElementById('div1');
    
    console.log(func(10,50));

    div1.innerHTML = '<b>Hello</b><br>';
    // typeof 연산자는 값의 자료형을 확인하는 연산자이다
    div1.innerHTML += `name : ${name}, type : ${typeof(name)}<br>`;
    div1.innerHTML += `age : ${age}, type : ${typeof(age)}<br>`;
    div1.innerHTML += `height : ${height}, type : ${typeof(height)}<br>`;
    div1.innerHTML += `check : ${check}, type : ${typeof(check)}<br>`;
    div1.innerHTML += `hobbies : ${hobbies}, type : ${typeof(hobbies)}<br>`;
    div1.innerHTML += `user : ${user}, type : ${typeof(user)}<br>`;
    div1.innerHTML += `func : ${func}, type : ${typeof(func)}<br>`;
    
}

/* 
    3. 데이터 형변환
    1) 문자열과 숫자의 '+' 연산
*/

function plusTest() {
    // '+' 연산자만 문자열과 숫자열이 만나면 문자열로 변환되고 
    // 그 외는 숫자로 변환이된다
    let result1 = 7 + 7; // 14
    let result2 = 7 + '7'; // 77
    let result3 = '7' + 7; // 77
    let result4 = '7' + '7'; // 77
    let result5 = 7 + 7 + '7'; // 147
    let result6 = 7 + '7' + 7; // 777
    let result7 = 7 * '7'; // 49
    let result8 = '7' - 3; // 4
    let reuslt9 = 4 / '2' + 3; // 5
    let reuslt10 = '2' * '7'; // 14
    let result11 = 'a' * '7'; // NaN
    let div2 = document.getElementById('div2');

    div2.innerHTML = '<b>Hello</b><br>';
    div2.innerHTML += `result1 : ${result1}<br> `;
    div2.innerHTML += `result2 : ${result2}<br> `;
    div2.innerHTML += `result3 : ${result3}<br> `;
    div2.innerHTML += `result4 : ${result4}<br> `;
    div2.innerHTML += `result5 : ${result5}<br> `;
    div2.innerHTML += `result6 : ${result6}<br> `;
    div2.innerHTML += `result7 : ${result7}<br> `;
    div2.innerHTML += `result8 : ${result8}<br> `;
    div2.innerHTML += `result9 : ${result9}<br> `;
    div2.innerHTML += `result10 : ${result10}<br> `;
}