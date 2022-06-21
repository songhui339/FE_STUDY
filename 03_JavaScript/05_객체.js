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
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의
        this.getSum = function() {
            return this.java + this.oracle;
        };

        this.getAvg = function() {
            return this.getSum() / 2;
        }
    }

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






}