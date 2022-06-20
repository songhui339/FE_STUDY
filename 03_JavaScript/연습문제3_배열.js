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

// 문제 2 
function reverseWord () {
    let la5 = document.getElementById('la5').innerHTML.split(" ");
    let la6 = document.getElementById('la6').innerHTML.split(" ");

    let div1 = document.getElementById('div1');

    // console.log(la5);
    // console.log(la6);

    // let wordArr = la5.concat(la6);
    // let wordArrR = wordArr.reverse();

    // console.log(wordArrR);

    let la5R = la5.reverse();
    let la6R = la6.reverse();

    let wordArr = la5R.concat(la6R);

    let arrStr = wordArr.join("");

    div1.innerHTML = `정답 : ${arrStr}`;
};


// 문제 3
let data = [];

function inputWords () {

    let inputWords = document.getElementById('inputWords');

    data.push(inputWords.value);

    inputWords.value = '';

    console.log(data);
}

function print () {
    let str = '';
    let div2 = document.getElementById('div2');

    data.sort().reverse();

    str = data.join(', ');
    div2.innerHTML = str;
}


// 문제 4
function adjustMenu() {
    let laMenu = document.getElementById('laMenu').innerHTML.split(" ");
    let div3 = document.getElementById('div3');

    console.log(laMenu);

    let remove = document.getElementById('remove').value;
    let add = document.getElementById('add').value;

    for (let i = 0; i < laMenu.length; i++) {
        if (laMenu[i] === remove) {
            laMenu.splice(i, 1);

            break;
        }  
    }

    laMenu.push(add);

    div3.innerHTML = `${remove} 삭제, ${add} 추가 / 결과 : ${laMenu.join(" ")}`

}