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

    // 3. 요소 복제
    // 복제할 요소에 이벤트 추가
    $('#item1').hover(
        // 방법 #1
        // 마우스 hover 시
        // (event) => {
        //     console.log(event.target);
        //     $(event.target).addClass('bg-hotpink');
        // },
        // // 마우스 hover 하지 않을때
        // (event) => {
        //     console.log(event.target);
        //     $(event.target).removeClass('bg-hotpink');

        // }

        // 방법 #2
        (event) => {
            // console.log(window.event.target);
            $(event.target).toggleClass('bg-hotpink');
            // $('#item1').toggleClass('bg-hotpink');
        }
    );

    $('#btn1').click(() => {
        // 요소 복제
        let copyItem = $('#item1').clone(true);

        console.log(copyItem);

        $('#cloneResult').append(copyItem);

    });

    // 4. 요소 제거
    $('#item2').hover(
        (event) => $(event.target).toggleClass('bg-hotpink')
    );

    // 1) remove 테스트
    // 선택된 요소를 지우고 반환해주고 event도 지워줌
    $('#remove').click(() => {
        let removeItem =  $('#item2').remove();

        $('#removeResult').append(removeItem);
    }); 

    // 2) detach 테스트
    // 선택된 요소를 지우고 반환해주지만 event는 유지함
    $('#detach').click(() => {
        let removeItem =  $('#item2').detach();

        $('#removeResult').append(removeItem);
    }); 
    
    // 3) empty 테스트
    // 선택된 요소의 하위 요소들을 삭제한다
    // 
    $('#empty').click(() => {
        let removeItem =  $('#item2').empty();

        // $('#removeResult').append(removeItem);
    }); 
    

    /* **************************** */
    // 5. 배열 관리
    let output = '';
    let array = [
        {name: '네이버', link: 'https://www.naver.com'},
        {name: '구글', link: 'https://www.google.com'},
        {name: 'w3schools', link: 'https://www.w3schools.com/'}
    ];

// 왜..제이쿼리로 하려니까 오류가 나냐....시부렝 -> 해결 됨
    $.each(array, (index, element) => {
        // array 안에 객체로 이루어져 있기 때문에 element. 형태로 불러온다
        console.log(`index : ${index}, name : ${element.name}, link : ${element.link}`);

        output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    });

    // 내 코드 -- > array, 를 왜 넣니....
    // $(array).each(array, (index, element) => {
    // $(array).each((index, element) => {
    //     // array 안에 객체로 이루어져 있기 때문에 element. 형태로 불러온다
    //     console.log(`index : ${index}, name : ${element.name}, link : ${element.link}`);

    //     output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    // });

    // 자바스크립트에도 동일한 기능을 하는 메소드가 추가되었다
    // array.forEach(function(element, index, origin) {
    //     // console.log(arguments);
    //     console.log(element, index, origin);
    //     output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    // });

    $('#eachTest').html(output);

    $('h4').each((index, element) => {
        console.log(index, element);
    });






});