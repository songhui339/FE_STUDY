/*
    05_객체 JavaScript
*/
window.onload = function() {
    // 1. 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let product = {
            0: '배열 흉내',
            name: '갤럭시 Z 플립 3',
            price: 1000000,
            brand: '애플',
            brand: '삼성', // 중복 선언하게 되면 마지막에 선언된 프로퍼티가 덮어쓴다
            spec: ['OLED', 'ANDROID', '6.7Inch', '보라']
        };

        console.log(product);

        // 속성명을 제시할 때 공백이나 특수문자가 들어가야 하는 경우 '', ""로 묶어줘야 한다
        let user = {
            'user name': '최송희',
            'user-age': 29,
            'job!!': '개발자'

        }

        div1.innerHTML = '객체["Property명"] 으로 접근하는 방법<br>';
        div1.innerHTML += `product[0]: ${product['0']}<br>`;
        div1.innerHTML += `product['name']: ${product['name']}<br>`;
        div1.innerHTML += `product['price']: ${product['price']}<br>`;
        div1.innerHTML += `product['brand']: ${product['brand']}<br>`;
        div1.innerHTML += `product['spec']['0']: ${product['spec']['0']}<br>`;
        div1.innerHTML += `product.속성명으로 접근하는 방법<br>`
        // 숫자 형태 키 값은 대괄호를 사용해야함
        // div1.innerHTML += `product.'0': ${product.0}<br>`;
        div1.innerHTML += `product.name : ${product.name}<br>`
        div1.innerHTML += `product.price : ${product.price}<br>`
        div1.innerHTML += `product.brand : ${product.brand}<br>`
        div1.innerHTML += `product.spec : ${product.spec}<br>`
        div1.innerHTML += `product.spec[3] : ${product.spec[3]}<br><br>`
        
        
        div1.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져와야한다<br>`;
        // div1.innerHTML += `user.user name: ${user.'user name'}<br>`;
        div1.innerHTML += `user.user name: ${user['user name']}<br>`;
        div1.innerHTML += `user.user name: ${user['user-age']}<br>`;
        div1.innerHTML += `user.user name: ${user['job!!']}<br>`;
    });

    // 2. 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function() {
        let name = '최송희';
        let dog = {
            name: '푸우',
            kind: '포메라니안',
            eat: function(food) {
                // 객체 내부의 속성에 접근하기 위해서는 "this.속성명"으로 작성해야 한다
                // this를 사용하지 않으면 전역 함수인 최송희가 쓰인다 (내가..개가 된다)
                console.log(`${this.kind} 종인 ${this.name}가 ${food}를 먹고 있네요~`)
                // console.log(this.name);
                // console.log(this.kind);
                // console.log(food);
            }
        }
        dog.eat('고구마');

    });

    // 3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가
        student.name = '최송희';
        student['age'] = 29;

        // 객체에 메소드 추가
        // Arrow 함수로 객체를 만들어서 this를 접근하게 되면 window 전체를 잡게 됨
        // 객체에 메소드를 추가해야할 경우 익명함수를 사용!
        // student.whoAreYou = () => {
        student.whoAreYou = function() {
            let str = '';

            console.log(this);

            for (const key in this) {
                console.log(key);

                if(typeof(this[key]) != 'function') {
                    str += `${key}: ${this[key]} `
                }
            }

            return str;
        }

        console.log(student);
        console.log(student.whoAreYou());

        // 삭제하는 일은 거의 없으니 참고만!
        delete student.age;
        delete student['name'];

        console.log(student);
    });


    // 4. 객체 배열
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let div4 = document.getElementById('div4');

        // 배열을 사용하지 않았을 경우 => 비효율적
        let student1 = {name: '최송희', java: 100, oracle: 80};
        let student2 = {name: '이슬기', java: 70, oracle: 60};
        let student3 = {name: '최원희', java: 10, oracle: 20};
        let student4 = {name: '이정후', java: 80, oracle: 80};
        let student5 = {name: '김태진', java: 20, oracle: 20};

        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);
        // console.log(student5);

        // 배열 선언 및 초기화
        let students = [
            {name: '최송희', java: 100, oracle: 80},
            {name: '이슬기', java: 70, oracle: 60}
        ];

        // students.push({name: '이정후', java: 80, oracle: 80});
        students.push(student3);
        students.push({name: '김태진', java: 20, oracle: 20});

        // 배열에 담겨있는 모든 객체에 메소드 추가
        for (let i = 0; i < students.length; i++) {
            students[i].getSum = function() {
                return this.java + this.oracle;
            };

            students[i].getAvg = function() {
                return this.getSum() / 2;
            }
        }

        console.log(students);

        // 모든 학생의 정보를 div4에 출력(이름, 총점, 평균)
        // 함수를 불러와야하는데 () 를 붙이지 않았음 그래서 오류 발생했음!!
        for (const element of students) {
            div4.innerHTML += `이름: ${element.name}, 총점: ${element.getSum()}, 평균: ${element.getAvg()}<br>`
        }

    });

    // 5. 생성자 함수
    // 앞서 만들었던 student 생성자 함수로 만들어보기
    function Students(name, java, oracle) {
        // Property(속성) 정의
        // 개별적으로 가지고 있어야할 속성
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의 첫번째 방법
        // this.getSum = function() {
        //     return this.java + this.oracle;
        // };

        // this.getAvg = function() {
        //     return this.getSum() / 2;
        // }
    }

    // 메소드 정의 두번째 방법
    // 공통으로 사용해야할 속성들은 prototype에 지정해서 사용
    // 모든 객체들은 하나의 prototype만 가진다
    Students.prototype.getSum = function() {
        return this.java + this.oracle;
    };

    Students.prototype.getAvg = function() {
        return this.getSum() / 2;
    };


    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', function() {
        let div5 = document.getElementById('div5');
        let student = new Students('최송희', 80, 80);
        let students = [];

        students.push(student);
        students.push(new Students('이슬기', 60, 60));
        students.push(new Students('이정후', 90, 90));
        students.push(new Students('김태진', 70, 70));

        console.log(student);
        console.log(student instanceof Students); // true
        console.log(student instanceof Array); // false
        console.log(students);
        
        // 모든 학생의 정보를 출력 (이름, 총점, 평균)
        for (const element of students) {
            div5.innerHTML += `이름: ${element.name}, 총점: ${element.getSum()}, 평균: ${element.getAvg()}<br>`
        }
    });

    // 6. 캡슐화
    // 클로저라는 것을 활용
    // 객체를 하나 만들어보기
    function IdolGroup (n, m) {
        // 객체의 프로퍼티에 지정하지 않고
        // this.name = name;

        // 지역 변수로 지정
        let name = n;
        let members = m;

        // getGroupName, getMembers 이라는 메소드 생성
        this.getGroupName = function() {
            return name;
        }
        this.getMembers = function() {
            return members;
        }

        this.getMemberCount = function() {
            return members.length;
        }
        this.setGroupName = function(n) {
            name = n;
        }

        this.setMembers = function(m) {
            members = m;
        }

    }

    let btn6 = document.getElementById('btn6');
    btn6.addEventListener('click', function() {
        let div6 = document.getElementById('div6');

        let idol = new IdolGroup('신화', ['전진', '에릭', '신혜성', '앤디', '김동완', '이민우']);

        console.log(idol);
        
        idol.setGroupName('레드벨벳');
        idol.setMembers(['슬기', '조이', '웬디', '아이린', '예리']);
        
        console.log(idol);
        div6.innerHTML = `그룹명: ${idol.getGroupName()}<br>멤버: ${idol.getMembers()}<br>멤버 수: ${idol.getMemberCount()}명`;
    });


    // 5-1. 생성자 함수 Date 객체
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', function() {
        let div7 = document.getElementById('div7');

        // Date 객체 생성하는 5가지 방법
        let date1 = new Date(); // 1) 제일 많이 쓰는 방법
        let date2 = new Date(1655778876456); // 2) 밀리세컨 단위 매개값으로 입력
        let date3 = new Date('2022-06-21T20:17:51'); // 3) 문자열로 입력 - 제일 많이 쓰는 방법
        let date4 = new Date('2022/06/21 21:51:51'); // 3) 문자열로 입력
        let date5 = new Date(2022, 5, 21, 11, 21, 59); // 4) 숫자 타입으로 전달 (월은 0부터 사작)

        // ``
        div7.innerHTML = `Date 객체 <br><br>`;
        div7.innerHTML += `date1 : ${date1}<br>`;
        div7.innerHTML += `date2 : ${date2}<br>`;
        div7.innerHTML += `date3 : ${date3}<br>`;
        div7.innerHTML += `date4 : ${date4}<br>`;
        div7.innerHTML += `date5 : ${date5}<br><br>`;

        // Date 객체의 메소드 호출
        // 시 분 초 연월일 가져와보기
        div7.innerHTML += `date1.getFullYear() : ${date1.getFullYear()}<br>`;
        div7.innerHTML += `date1.getMonth() : ${date1.getMonth() + 1}<br>`; // 월은 0부터 시작하므로 +1 처리
        div7.innerHTML += `date1.getDate() : ${date1.getDate()}<br>`;
        div7.innerHTML += `date1.getDay() : ${date1.getDay()}<br>`; // 0 일요일 ~ 6 토요일
        div7.innerHTML += `date1.getHours() : ${date1.getHours()}<br>`;
        div7.innerHTML += `date1.getMinutes() : ${date1.getMinutes()}<br>`;
        div7.innerHTML += `date1.getSeconds() : ${date1.getSeconds()}<br>`;
        div7.innerHTML += `date1.getMilliseconds() : ${date1.getMilliseconds()}<br>`;
        // 1970년 1월 1일 00사를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다
        div7.innerHTML += `date1.getTime() : ${date1.getTime()}<br>`;
        // 표준시와 Date 객체에 지정된 시간과의 차이를 분 단위로 반환한다
        div7.innerHTML += `date1.getTimezoneOffset() : ${date1.getTimezoneOffset() / 60}<br>`;
        // 년 월일 정보만 나옴
        div7.innerHTML += `date1.toDateString() : ${date1.toDateString()}<br>`;
        // 시간에 대한 정보만 나옴
        div7.innerHTML += `date1.toTimeString() : ${date1.toTimeString()}<br>`;

        div7.innerHTML += `date1.toUTCString() : ${date1.toUTCString()}<br>`;
        div7.innerHTML += `date1.toISOString() : ${date1.toISOString()}<br>`;
        // 현재 브라우저가 실행되고 있는 지역에 맞는 표기법
        div7.innerHTML += `date1.toLocaleString() : ${date1.toLocaleString()}<br>`;
        div7.innerHTML += `date1.toLocaleDateString() : ${date1.toLocaleDateString()}<br>`;
        div7.innerHTML += `date1.toLocaleTimeString() : ${date1.toLocaleTimeString()}<br>`;
        div7.innerHTML += `date1.toLocaleDateString() : ${date1.toLocaleDateString('en-US')}<br>`;
        div7.innerHTML += `date1.toLocaleTimeString() : ${date1.toLocaleTimeString('en-US')}<br>`;


    });




}