/*
    연습문제3_배열
*/

function findArray() {
    let la1 = document.getElementById('la1').innerHTML.split(",");
    let la2 = document.getElementById('la2').innerHTML.split(",");
    let la3 = document.getElementById('la3').innerHTML.split(",");
    let la4 = document.getElementById('la4').innerHTML.split(",");

    console.log(la1, la2, la3, la4);

    let array = la1.concat(la2,la3,la4);

    console.log(array);

    let input1 = document.getElementById('input1').value;
    let indexNum = array.indexOf(input1);

    console.log(input1, indexNum);

    if (indexNum >= 0) {
        alert(`${input1}는 배열 index ${indexNum + 1}번째에 존재합니다.`)
    } else {
        alert('존재하지 않습니다.');
    }
}