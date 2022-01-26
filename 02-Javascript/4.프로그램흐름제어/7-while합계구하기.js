/*누적합 구하기 : 반복이 시작되기전 합산에 사용할 변수 0으로 초기화
->반복문 안에서 누적 합산을 수행*/
let x = 0;      //합계를 구하기 위한 변수
let i = 1;      //초기식

while (i <= 10 ) {  //조건식 :i의 범위- 1~10
    x += i;     //x에 1부터 10까지 반복하면서 합산
    console.log("i=%d, x=%d", i , x);
    i++     //증감식
}

console.log ("1부터 10까지의 합: " + x);