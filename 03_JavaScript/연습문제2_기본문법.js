/*
    연습문제2_기본문법
*/

window.onload = function() {
    // 문제 1. 텍스트 필드에 작성한 문자열의 길이를 구하기
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let div1 = document.getElementById('div1');
        let input01 = document.getElementById('input01').value;

        console.log(input01.length);
        div1.innerHTML = `입력된 문자열 : ${input01} <br>입력된 문자열의 길이 : ${input01.length}`;
    }

    // 문제 2. 다음 보기에 있는 문자열을 콤마(,)를 기준으로 잘라내어 하나하나 출력
    let btn2 = document.getElementById('btn2');

    btn2.onclick = function() {
        let div2 = document.getElementById('div2');
        let label01 = document.getElementById('label01');
        let arr = label01.innerHTML.split(",");

        console.log(arr);
        console.log(typeof(arr));

        for (let i = 0; i < arr.length; i++) {
            div2.innerHTML += `${i + 1}. ${arr[i]} <br>`
            
        }
    }
}

// 문제 3. 간이 계산기 만들기
function calcurate(op) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let resultText = document.getElementById('calc');
    let result = 0;

    switch(op) {
        case '+' :
            result = num1 + num2;
            break;
        case '-' : 
            result = num1 - num2;
            break;
        case 'x' :
            result = num1 * num2;
            break;
        case '/' :
            result = num1 / num2;
    }

    console.log(result);
    
    resultText.innerHTML = result;
}