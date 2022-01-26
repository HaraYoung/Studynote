const point =72;

//순차적으로 조건을 판별 하면서 가장 처음 만난 '참'조건 블록 수행후 빠져나감
if (point > 90) {
    console.log("A학점");
} else if (point >80) {
    console.log("B학점");
} else if (point > 70){
    console.log("C학점");
} else if (point > 60){
    console.log("D학점");
} else {
    console.log("F학점");
}