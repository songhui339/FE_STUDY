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
    
    div1.innerHTML += 'RegExp 객체 사용하는 String 메소드<br>';
    // match : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값이 있으면 그 값을 리턴
    div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`; 
    // search : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값이 있으면 값의 시작 index를 리턴 (여러개일 경우 첫번쨰 발견된 값만 리턴)
    div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`; 
    // split : 문자열에서 매개값인 정규 표현식의 패턴을 만족하는 값을 구분자로 인식해 배열로 리턴
    div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`; 
    // replace : 정규 표현식의 패턴에 만족하는 값을 찾고 새로운 문자열로 replace 해줌
    div1.innerHTML += `str1.replace('j', 'c') : ${str1.replace(regExp1, '스크립트')}<br>`; 
});


// 2. 플래그 문자
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
    let div2 = document.getElementById('div2');
    let str = 'JAvaScript jQuery Ajax';

    div2.innerHTML = '플래그문자<br><br>';
    /* 
        i : 대소문자를 구분하지 않고 비교한다
        g : 전역으로 비교를 수행한다
        m : 여러 줄의 비교를 수행한다
    */
    // replace() = 메소드에서 '$&' 패턴을 만족하는 문자열을 가리킨다
    div2.innerHTML += `/a/ : ${str.replace(/a/, '($&)')}<br>`;
    div2.innerHTML += `/a/i : ${str.replace(/a/i, '($&)')}<br>`;
    div2.innerHTML += `/a/g : ${str.replace(/a/g, '($&)')}<br>`;
    div2.innerHTML += `/a/g : ${str.replace(/a/ig, '($&)')}<br>`;


})

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    let div3 = document.getElementById('div3');

    // 1) 반복 검색{m,n}
    // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다
    // + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. => {1,}
    // ? : 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다. => {0,1}

    // let str = 'a aa aaa aaaa';
    // div3.innerHTML = '반복 검색<br><br>';
    // div3.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`;
    // // {3,3}
    // div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>`;
    // // 앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다
    // div3.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, '($&)')}<br>`;
    // div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`;
    // div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br>`;


    // 2) 문자 열의 앞, 뒤 구분
    // ^는 문자열의 시작을 의미한다
    // $는 문자열의 마지막을 의미한다
    // let str = 'Javascript\nJquery\nShellscript\nAjax';
    // div3.innerHTML = '문자열의 앞, 뒤 구분<br><br>'
    // div3.innerHTML += `/^j/ig : ${str.replace(/^j/ig, '($&)')}<br>`;
    // div3.innerHTML += `/^j/igm : ${str.replace(/^j/igm, '($&)')}<br>`;
    // div3.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/igm, '($&)')}<br>`;
    
    
    // 3) OR 검색
    // [...] 내의 문자를 중 하나로도 존재할 경우를 의미한다.
    // let str = 'Javascript Jquery Ajax';
    // div3.innerHTML = 'OR 검색<br><br>';
    // div3.innerHTML += `/[aj]/: ${str.replace(/[aj]/, '($&)')}<br>`;
    // div3.innerHTML += `/[aj]/ig: ${str.replace(/[aj]/ig, '($&)')}<br>`;
    // // [...] 안에 '^'는 not의 의미를 가진다
    // div3.innerHTML += `/[^aj]/ig : ${str.replace(/[^aj]/ig, '($&)')}<br>`;
    
    // str = '123 Javascript Jquery Ajax';
    // // [...] 안의 -는 범위 지정을 의미한다
    // div3.innerHTML += `/[a-z]/g : ${str.replace(/[a-z]/g, '($&)')}<br>`;
    // div3.innerHTML += `/[A-Z]/g : ${str.replace(/[A-Z]/g, '($&)')}<br>`;
    // div3.innerHTML += `/[0-9]/g : ${str.replace(/[0-9]/g, '($&)')}<br>`;

    // 4) 임의의 문자열 검색
    // .은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관 없다
    // str = '123 Javascript';
    // div3.innerHTML = '임의의 문자열 검색<br><br>';
    // div3.innerHTML += `/..../g : ${str.replace(/..../g, '($&)')}<br>`;

    // 5) 추가 메타 문자
    /*
        \d : 숫자를 의미
        \D : 숫자가 아닌 문자를 의미
        \w : 알파벳, 숫자, 언더스코어(_)를 의미
        \W : 알파벳, 숫자, 언더스코어(_)가 아닌 문자를 의미
        \s : 공백 문자를 의미 (띄어쓰기, 탭, 줄바꿈)
        \S : 공백 문자가 아닌 문자를 의미
    */

    let str = 'A1 B2 C3 d_4 e:5 `ffgg77--__-- \t가\n나\n다';
    div3.innerHTML = '추가 메타 문자 <br><br>';
    // [0-9]/g 와 결과가 같다
    div3.innerHTML += `/\\d/g : ${str.replace(/\d/g, '($&)')}<br>`;
    // [^0-9]/g 와 결과가 같다
    div3.innerHTML += `/\\D/g : ${str.replace(/\D/g, '($&)')}<br>`;
    // [a-zA-Z0-9_]/g 와 결과가 같다
    div3.innerHTML += `/\\w/g : ${str.replace(/\w/g, '($&)')}<br>`;
    // [^a-zA-Z0-9_]/g 와 결과가 같다
    div3.innerHTML += `/\\W/g : ${str.replace(/\W/g, '($&)')}<br>`;
    // [ \t\n]
    div3.innerHTML += `/\\s/g : ${str.replace(/\s/g, '($&)')}<br>`;
    // [^ \t\n]
    div3.innerHTML += `/\\S/g : ${str.replace(/\S/g, '($&)')}<br>`;




});






/* ****************************************** */