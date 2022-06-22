/*
    08_이벤트 JavaScript
*/

// 1. 이벤트가 발생한 요소에 접근하는 방법
// 1) 인라인 방식
function test1(event) {
    // 매개값으로 이벤트 객체를 가져올 수 없다
    console.log(event);
    console.log(window.event.target);
    console.log(this); // this는 window 객체를 가리킨다
}

// 2) 프로퍼티 방식 - 220622 3교시 15분 복습 필요(놓침 ㅜㅠ)
// 프로퍼티의 경우 동일한 이벤트에 여러 개의 핸들러를 지정하게 될 경우 마지막으로 지정된 이벤트 핸들러만 수행 됨 (메소드 방식과의 차이점!)
let btn1 = document.getElementById('btn1');

// btn1.onclick = function(event) {
//     // 세 구문 모두 btn1 요소를 가리킨다
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this); // 요소 객체를 가리킨다
// }

btn1.onclick = (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this); // window 객체를 가리킨다

    // 이벤트 핸들러 제거 / 한번만 동작하는 버튼 만들때 사용
    btn1.onclick = null;
}

// 3) addEventListner() 메소드 방식
let btn2 = document.getElementById('btn2');

// btn2.addEventListener('click', function(event) {
//     // 세 구문 모두 btn2 요소를 가리킨다
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this); // 메소드 안에서 콜백함수로 실행되고 있으므로 window가 아닌 요소 객체를 가리킨다
// });

// 화살표 함수로 지정하게 되면...
btn2.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this); // 화살표 방식으로 조회하게 되면 무조건 window이다!
});

btn2.addEventListener('click', (event) => {
    console.log('동일한 이벤트에 여러 개의 핸들러 지정 가능');
    console.log('지정된 순서대로 실행됨');
})

/* ****************************************** */

// 2. 태그(요소)별 기본 이벤트 제거
// 1) 기본 이벤트 제거
//  - 비밀번호 일치 여부 확인 
function passwordCheck() {
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
};

// 1) 기본 이벤트 제거 실습
//  - 아이디 조건
// function submitBtn() {
//     let id = document.getElementById('userId').value;
    
//     let check = /^[a-z|0-9]{5,12}$/;

//     console.log(check.test(id));
// }
let submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    let userId = document.getElementById('userId').value;
    // 정규 표현식
    let regExp = /^[a-zA-Z0-9]{5,12}$/;
    console.log(userId);

    // 영문자, 숫자로만 총 5 ~ 12자 사이로 입력해 주세요.
    if(!regExp.test(userId)) {
        alert('아이디 조건에 맞게 입력해주세요');
        // 메소드 방식에서는 아래와 같이 기본 이벤트를 제거해야 한다.
        event.preventDefault();
        
    }

});


/* ****************************************** */
/* ****************************************** */
/* ****************************************** */