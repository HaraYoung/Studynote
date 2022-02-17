//마지막 회차 생략

/*조건식 "변수 <최대값"인 경우 : 변수 +1 < 최대값
조건식 "변수<=최대값"인 경우: 변수 < 최대값*/

console.group("변수<최대값");
for (let i =1; i <10; i++){
    if (i +1 < 10) {
        console.log(i);
        }
}
console.groupEnd();

console.group("변수 <= 최대값")
for (let t =1; t<= 9; t++){
    if (t <9) {
        console.log(t);
    }
}
console.groupEnd

console.group("글자사이에 콤마(,)넣기");
let str = "";
for (let y =1; y <=10; y++){
    str += y;
    if (y<10) {
        str+=",";
    }
}
console.log(str);
console.groupEnd();