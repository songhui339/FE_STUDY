/*
    03_추가선택자 jQuery
*/

$(document).ready(() => {
    // 1. 자손, 후손 선택자
    $('div>h3').css({'color' : 'violet'});
    $('div>ul>li').css('color', 'darkgreen');

    $('div h3').css('background-color', 'lightyellow');
    $('div .ch').css('background-color', 'tomato');

    // 2. 속성 선택자
    // $('input[class]').css('background-color', 'tomato');
    // $('input[type=text]').val('Change Value');
    // document.querySelector('input[type=text]').value = 'Change Value';
    // $('input[class~=test1').val('123456789');
    // ^= : ra로 시작하는
    // $('input[type^=ra').prop('checked', true);
    // $('input[type$=box]').prop('checked', true);
    // $('input[class*=st2]').css('width', '100px').css('height', '100px').val('zzz');



    // 3. 입력 양식 선택자
    $(':text').css('background-color', 'pink');
    $(':button').val('왕버튼').css('width', '50px').css('height', '50px');
    $(':checkbox').prop('checked', true).css({'width': '50px', 'height': '50px'});
    $(':file').css('background-color', 'yellow');
    $(':image').hover(
        // 2개의 콜백 함수 마우스 hover 일때 아닐때 
        function(){
            console.log(this);
            console.log($(this));
        },
        function() {
            console.log(this);
            console.log($(this));
        }
    );
});

