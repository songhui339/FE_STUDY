/*
    09_정규표현식 JavaScript
*/
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let div1 = document.getElementById('div1');
    // 생성자 함수를 이용한 정규 표현식 객체 생성
    let regExp1 = new RegExp('script');
    // 리터럴을 이용한 정규 표현식 객체 생성 -> 이 방법을 더 선호 함
    let regExp2 = /script/;
    let str1 = 'javascript jqueryscript ajax';
    let str2 = 'java jquery ajax';

    console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp); // /script/ 'object' true
    console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp); // /script/ 'object' true

    
    
    div1.innerHTML = 'RegExp 객체에서 제공하는 메소드<br>';
    
    // test : 정규 표현식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다
    div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`;
    div1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)}<br>`;
    // exec : 정규 표현식 패턴을 만족하는 값이 있으면 그 값을 리턴한다 (없으면 null)
    div1.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)}<br>`; // 여러 개 있어도 첫번째 발견된 값만 리턴
    div1.innerHTML += `regExp1.exec(str2) : ${regExp1.exec(str2)}<br><br>`; // 만족하는 값이 없어서 null 리턴

    // match : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값이 있으면 그 값을 리턴
    div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`; 
    // search : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값이 있으면 값의 시작 index를 리턴 (여러개일 경우 첫번쨰 발견된 값만 리턴)
    div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`; 
    // split : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값을 구분자로 인식해 배열로 리턴
    div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`; 
});









/* ****************************************** */