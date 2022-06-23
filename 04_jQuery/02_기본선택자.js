/*
    02_기본선택자 jQuery
*/
// $(document).ready() 의 축약형
$(function() {
    // 1. 태그(요소) 선택자
    $('h5').css('color', 'blue');
    $('h5, p').css('background-color', 'yellow');

    // 2. 아이디 선택자
    // 2-1) 자바스크립트 방식
    let id1 = document.getElementById('id1');
    id1.style.color = 'tomato';
    // document.getElementById('id1').style.color = 'tomato';

    // 2-2) jQuery 방식
    let id2 = $('#id2').css('color', 'pink');

    // 3. 클래스 선택자
    $('.item').css({'color': 'hotpink', 'background-color' : 'black'})



});