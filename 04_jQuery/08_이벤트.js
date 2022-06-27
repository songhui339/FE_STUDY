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

    $('#textarea1').keydown((event) => {
        // console.log(event);
        console.log(`key : ${event.key}, keyCode : ${event.keyCode}`);
    })


    
});