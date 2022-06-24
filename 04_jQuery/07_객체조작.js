/*
    07_객체조작 jQuery
*/

$(document).ready(function() {
    // 1. Content 설정
    // 1) html() 메소드
    $('#content2').html($('#content1').html());

    // $('#content2').find('a').attr('href', 'https://www.naver.com/');
    $('#content2').find('a').prop('href', 'https://www.naver.com/');

    // $('.content').html(function(index, content) {
    $('.content').html((index, content) => {
        console.log(index, content);

        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`;
    });


    // 2) text() 메소드
    $('#content4').text($('#content3').text());

    $('.content2').text((index, content) => {
        console.log(index, content);

        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`;
    });

});