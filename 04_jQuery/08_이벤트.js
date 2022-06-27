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


    $('#div1').on('mouseenter mouseleave', (event) => {
        console.log(event.target);
        $(event.target).css('background-color', 'beige').text('마우스가 올라감');

        if(event.type === 'mouseenter') {
            console.log('mouseenter')
        } else if (event.type === 'mouseleave') {
            console.log('mouseleave');
            $(event.target).css('background-color', 'tomato').text('마우스가 내려감')
        }
    });






    
});