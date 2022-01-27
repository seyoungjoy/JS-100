// function getAverage(value){
//     let score = value.split(" ");
//     let average = parseInt(score[0])+parseInt(score[1])+parseInt(score[2]);
//     return average/3;
//
// }
//
// let result = getAverage("20 30 40");
// console.log(result);

//넣는 점수의 양만큼 자동으로 평균을 구해주는 코드.
function getAverage(value){
    let sum = 0;
    let score = value.split(" ");

    for(let i=0; i<score.length; i++){
        sum += parseInt(score[i]);
    }
    return parseInt(sum/3,10);
}

let result = getAverage("20 30 40");
console.log(result);
