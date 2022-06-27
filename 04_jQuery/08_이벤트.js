/*
    08_이벤트 jQuery
*/

$(document).ready(function(){

    /* 1. 이벤트 연결 */
    /* 1) on(), off() */
    // $('#div1').on('mouseenter', (event) =>{
    //     // alert('마우스 요소 위에 올라감');
    //     $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    // });

    // $('#div1').on('mouseleave', (event) =>{
    //     // 복잡함...
    //     // event.target.style.backgroundColor = 'tomato';
    //     $(event.target).css('background-color', 'tomato').text('마우스가 내려감')
    // })


    /* 길게 하나하나 처리한 방식 */
    // $('#div1').on('mouseenter mouseleave', (event) => {
    //     // console.log(event.target);
    //     $(event.target).css('background-color', 'beige').text('마우스가 올라감');

    //     if(event.type === 'mouseenter') {
    //         // console.log('mouseenter')
    //     } else if (event.type === 'mouseleave') {
    //         // console.log('mouseleave');
    //         $(event.target).css('background-color', 'tomato').text('마우스가 내려감')
    //     }
    // });

    // $('#div1').on('click', (event) => {
    //     $(event.target)
    //         .css('background-color', 'white')
    //         .text('')
    //         // .off('mousesenter')
    //         .off('mouseenter mouseleave');
    // });

    /* 하나로 줄이기 */
    // on() 메소드에 객체 넣기
    $('#div1').on({
        mouseenter: (event) => {
            $(event.target)
                .css('background-color', 'beige')
                .text('마우스가 올라감');
        },
        
        mouseleave: (event) => {
            $(event.target)
                .css('background-color', 'tomato')
                .text('마우스가 내려감');
        },

        click: (event) => {
            $(event.target)
                .css('background-color', 'white')
                .text('')
                .off('mouseenter mouseleave');
        }
        
    });

    /* 2) 간단한 연결 이벤트 */
    // 대신 하나의 이벤트만 처리 가능
    $('#div2').mouseenter((event) => {
        $(event.target)
            .css('background-color', 'beige')
            .text('마우스가 올라감');
    })

    // 지양하는 방법 - event.target을 더 쓴다
    $('#div2').mouseleave(() => {
        $('#div2')
            .css('background-color', 'tomato')
            .text('마우스가 내려감');
    });

    $('#div2').click((event) => {
        $(event.target)
            .css('background-color', 'white')
            .text('')
            .off('mouseenter mouseleave');
    });

    // 3) one()
    $('#div3').one('click', () => {
        alert('처음이지 마지막으로 이벤트 핸들러 실행');
    });

    /* 2. 키보드 이벤트 */
    /* 1) keydown, keypress, keyup */

    // $('#textarea1').keydown((event) => {
    //     // console.log(event);
    //     console.log(`key : ${event.key}, keyCode : ${event.keyCode}`);
    // })

    // alt, ctrl, shift, esc 인식 X
    // $('#textarea1').keypress((event) => {
    //     console.log(`key : ${event.key}, keyCode : ${event.keyCode}`);
    // })

    // $('#textarea1').keyup((event) => {
    //     // console.log(event);
    //     console.log(`key : ${event.key}, keyCode : ${event.keyCode}`);
    // })

    $('#textarea1').on({
        keydown: (event) => {
            console.log(`keydown > key : ${event.key}, keyCode : ${event.keyCode}`);
        },
        keypress: (event) => {
            console.log(`keypress > key : ${event.key}, keyCode : ${event.keyCode}`);
        },
        keyup: (event) => {
            console.log(`keyup > key : ${event.key}, keyCode : ${event.keyCode}`);
        }
    });

    /* 2) 글자수 세기 */
    $('#textarea2').on('keyup', (event) => {
        let target = $(event.target);
        let counter = $('#counter');
        let currentLength = target.val().length;
        let maxLength = parseInt($('#maxLength').text());

        // 입력한 값의 글자수 세기
        console.log(currentLength);
        counter.text(currentLength);

        // 글자수 초과 시 색깔 변경
        // if(currentLength > maxLength) {
        //     counter.css('color', 'red');
        // } else {
        //     counter.css('color', 'black');
        // }

        // 최대 글자 이상 입력 불가하게 설정
        if(currentLength > maxLength) {
            target.val(target.val().substr(0, maxLength));
        }
    });

     /* 3) 아이디 조건 확인 */
    $('#userId').keyup((event) => {
        let regExp = /^[a-z][a-z0-9]{3,11}$/;
        // let id = event.target.value;
        let id = $(event.target).val();

        if(id === null || id === '') {
            $('#idCheck')
            .text('')
            .css('color', 'white');

        } else if(regExp.test(id)) {
            $('#idCheck')
            .text('사용 가능한 아이디')
            .css({color: 'green', fontWeight: '600'});
        } else {
            $('#idCheck')
            .text('사용 불가능한 아이디')
            .css({color: 'red', fontWeight: '600'});
        }
    });

    /* 3. trigger() */
    $('#div4').on('click', () => {
        let counter = $('#counter2');

        let currentCount = parseInt(counter.text());
        
        counter.text(++currentCount);
    });

    // 특정 이벤트를 강제로 발생
    $('#btn1').on('click', () => {
        $('#div4').trigger('click');
    });


    
});