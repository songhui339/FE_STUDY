/*
    07_DOM JavaScript
*/

window.onload = function() {

    // 1. 노드 생성
    // 1) 텍스트 노드가 있는 요소 노드 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        // 요소 노드 생성
        let h3 = document.createElement('h3');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('이정후짱짱맨');

        h3.appendChild(textNode); // h3 노드에 textNode 노드 포함시키기
        div1.appendChild(h3); // textNode 노드를 가지고 있는 h3 노드를 div1에 포함시켜주기

        // 기존에 하던 방식
        // div1.innerHTML = '<h3>안녕하세요</h3>'   
    });

    /* ****************************************** */
    
    // 2) 텍스트 노드가 없는 요소 노드 생성
    // img 태그에 속성 추가하기
    
    let btn2 = document.getElementById('btn2');
    
    btn2.addEventListener('click', () => {
        let div2 = document.getElementById('div2');
        
        // 요소 노드 생성
        let img = document.createElement('img');
        
        // 요소 노드의 속성 지정
        // img.src = '../resources/image/flower1.PNG';
        img.setAttribute('src', '../resources/image/flower1.PNG');
        img.setAttribute('width', '300px');
        img.setAttribute('height', '200px');
        
        div2.appendChild(img);
        
        // div2.innerHTML = '<img src="../resources/image/flower1.PNG" width="300px" height="200px">';
    });

    /* ****************************************** */

    // 2. 노드 삭제
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(event) {
        document.getElementById('div1').remove();
        // let div2 = document.getElementById('div2');
        document.body.removeChild(document.getElementById('div2'));
        
        console.log(event.target); // <button id="btn3">실행 확인</button>
        console.log(event.target.parentNode); // 현재 선택된 노드의 부모 노드
        // 원하는 요소를 부모 노드를 통해 찾아서 삭제하기
        event.target.parentNode.removeChild(document.getElementById('div3'));
        alert('div1, div2과 div3이 삭제됩니다')
    });

    /* ****************************************** */
    /* ****************************************** */
    /* ****************************************** */
    /* ****************************************** */


}