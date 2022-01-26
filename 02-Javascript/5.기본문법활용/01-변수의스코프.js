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

//let 중복선언
let num3 =100;
 if (true) {
   // 블록 밖에서 생성된 변수를 블록안에서 사용o
   let num4 = num3 +100 ;
   console.log("블록안:" + num4);
 }

 /*let으로 선언된 변수는 if문의 실행 여부와 상관없이 
 블록을 빠져나올수 없음 ->에러*/
 console.log("블록밖:" + num4);

 //for문의 초기식을 var로 선언
 for (var i=0; i<10; i++) {
   console.log("반복문 안:"+ i);
 }
 console.log("반복문 밖:" + i);

 //for문의 초기식을 let으로 선언
 for (let j=0; j<10; j++){
   console.log("반복문 안:"+j)
 }
 //for문의 초기식도 {}에 속한것으로 봄-> j값은 for블록 밖으로 못나옴.
 console.log("반복문 밖:" + j);

 //var 키워드는 할당 후 선언 가능
 y= 200;
 var y;
 console.log(y);