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









}