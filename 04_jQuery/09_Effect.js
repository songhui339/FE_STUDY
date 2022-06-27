$(document).ready(function() {
    // Effect
    // 1. show(), hide()
    $('#show').on('click', () => {
        $('#imgCity').show(1500, 'swing');
    });

    $('#hide').on('click', () => {
        // $('#imgCity').hide(1500);
        $('#imgCity').hide(1500, 'linear');
    });

    $('#toggle').on('click', () => {
        // toggle() 없이 효과를 구현하는 방법
        if($('#imgCity').css('display') === 'none') {
            $('#imgCity').show(1500, 'swing');
        } else {
            $('#imgCity').hide(1500, 'linear');
        };


        // $('#imgCity').toggle(1500, 'linear');
    });


    // 2. slideDown(), slideUp()
    // 토글 탭 구현
    $('.menu').on('click', (event) => {
        let content =  $(event.target).next();
        
        // 방법 1) 토글 없이 효과를 구현
        // if(content.css('display') === 'none') {
        //     content.slideDown(500, 'swing');
        // } else {
        //     content.slideUp(500, 'linear');
        // }

        // 방법 2) 토글로 구현
        // content.slideToggle(500, 'swing');

        $('.content').slideUp(500);
        content.slideDown(500, 'swing');
    });

});