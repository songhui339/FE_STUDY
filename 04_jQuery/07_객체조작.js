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

    // 2. 요소 추가
    // 1) 요소 생성
    // 문자열로 요소를 생성하는 방법
    let p1 = '<p>문자열로 요소를 생성</p>';

    // 제이쿼리로 요소를 생성하는 방법
    let p2 = $('<p>').text('제이쿼리로 요소를 생성1');
    let p3 = $(`<p>제이쿼리로 요소를 생성2</p>`);

    $('#create').append(p1, p2, p3);

    // 2) 요소 추가 #1
    // $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷 부분에 추가한다 
    $('#add1').append('<span>B</span>')
    // $(A).prepend(B) : A 요소의 자식 요소로 B 요소를 앞 부분에 추가한다 
    $('#add2').prepend('<span>B</span>')
    // $(A).after(B) : A 요소의 형제 요소로 B 요소를 뒷 부분에 추가한다 
    $('#add3').after('<span>B</span>')
    // $(A).before(B) : A 요소의 형제 요소로 B 요소를 앞 부분에 추가한다 
    $('#add4').before('<span>B</span>')
    
    // 3) 요소 추가 #2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 뒷 부분에 추가한다
    $('<span>B</span>').appendTo('#add5');
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 앞 부분에 추가한다
    $('<span>B</span>').prependTo('#add6');
    // $(A).insertAfter(B) : A 요소를 B 요소의 형제 요소로 뒷 부분에 추가한다
    $('<span>B</span>').insertAfter('#add7');
    // $(A).insertBefore(B) : A 요소를 B 요소의 형제 요소로 앞 부분에 추가한다
    $('<span>B</span>').insertBefore('#add8');









});