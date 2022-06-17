/*
    03_배열 JavaScript
*/
// 화면이 모두 로드된 다음에 함수가 실행됨
window.onload = function() {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let arr1 = []; // 리터럴을 사용해서 배열을 선언하는 방법
        let arr2 = new Array(); // 생성자 함수 사용해서 배열 선언하는 방법 -> [empty X 3] 
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
        div1.innerHTML += `arr3 : [${arr3}], arr3.length : ${arr3.length} <br>`;
        div1.innerHTML += `arr4 : [${arr4}], arr4.length : ${arr4.length} <br>`;
        div1.innerHTML += `arr5 : [${arr5}], arr5.length : ${arr5.length} <br>`;
        div1.innerHTML += `arr6 : [${arr6}], arr6.length : ${arr6.length} <br>`;
    }


    // 2. 배열 메소드
    let btn2 = document.getElementById('btn2');
    
    // 지향하는 방법
    btn2.addEventListener('click', function(){
        let div2 = document.getElementById('div2');

        /*
        // 1) indexOf()
        let array = ['수박', '딸기', '자두', '망고', '포도'];

        div2.innerHTML = `array : [${array}]<br>`;
        div2.innerHTML += `indexOf('수박') : ${array.indexOf('수박')}<br>`;
        div2.innerHTML += `indexOf('자두') : ${array.indexOf('자두')}<br>`;
        // 값이 없으면 -1 
        div2.innerHTML += `indexOf('귤') : ${array.indexOf('귤')}<br>`;
        */
        
        /*
       // 2) concat() - 여러 개의 배열을 합쳐주는 역할
        let array1 = ['수박', '딸기', '자두', '망고', '포도'];
        let array2 = ['바나나', '사과', '오렌지', '대추', '두리안'];
        div2.innerHTML = `array1 : [${array1}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br>`;
        div2.innerHTML += `array1을 기준으로 배열을 결합 :<br> [${array1.concat(array2)}]<br>`;
        div2.innerHTML += `array1 : [${array1}]<br>`; // 원본 배열에 영향을 미치지 않는다
        div2.innerHTML += `array2을 기준으로 배열을 결합 :<br> [${array2.concat(array1)}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br>`; // 원본 배열에 영향을 미치지 않는다
        */

        // 3) toString
        /*
        let array = ['수박', '딸기', '자두', '망고', '포도'];
        div2.innerHTML = `array : [${array}]<br>`;
        div2.innerHTML += `array : [${array.toString()}]<br>`; // 하나의 문자열로 리턴해줌
        div2.innerHTML += `array : [${array.join()}]<br>`;
        div2.innerHTML += `array.join('|') : [${array.join(' & ')}]<br>`; // 구분자를 바꿔줄수 있음
        */

        /*
        // 4) sort()
        let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        let array2 = [10, 543, 30, 450, 123, 885];

        div2.innerHTML = `array1 : [${array1}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br>`;
        div2.innerHTML += `array1.sort() : [${array1.sort()}]<br>`; // 유니코드의 순서대로
        div2.innerHTML += `array2.sort() : [${array2.sort()}]<br>`; // 유니코드의 순서대로
        // 원본 배열에 영향을 미치는 메소드이다
        div2.innerHTML += `array1 : [${array1}]<br>`;
        div2.innerHTML += `array2 : [${array2}]<br>`;
        
        
        //  오름차순 정렬
        // 방법 1) 
        // array2.sort((left, right) => {
        //     return left - right;
        // });

        // 방법 2) 
        // array2.sort(function (left, right) {
        //     return left-right;
        // });

        // 방법 3) 
        array2.sort((left, right) => left-right);
        
        div2.innerHTML += `array2 : [${array2}]<br>`;
        


        // 내림차순 정렬
        array2.sort(function (left, right) {
            return right - right;
        })
        
        div2.innerHTML += `array2 : [${array2}]<br>`;
        */

        // 5) reverse()
        let array = Array.of(10, 5, 3, 6, 1, 4);

        div2.innerHTML = `array : [${array}]<br>`;
        div2.innerHTML += `array.reverse() : [${array.reverse()}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다
        div2.innerHTML += `array : [${array}]<br>`;





    });


    /*
    // 매개값에 함수를 전달하는 함수를 콜백 함수라고 한다
    test(function() {
        alert('함수 호출');
    });

    function test(x) {
        x();
    }
    */
















}