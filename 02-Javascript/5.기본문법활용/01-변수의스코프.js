//실행하고자 하는곳만 부분 실행할것!

//var 중복선언

//조건문 실행x
if (false) {
  var num1 = 100;
  console.log("블록안:" + num1);
}
/*if문 실행 여부에 따라 num1이 선언=>num1의 식별 가능여부 결정
num1을 식별하지 못할 경우 정의되지 않은 값 (undefined)이 됨*/
console.log("블록밖:" + num1);

//조건문 실행o
if (true) {
  var num2 = 100;
  console.log("블록안:" + num2);
}
console.log("블록밖" + num2);
