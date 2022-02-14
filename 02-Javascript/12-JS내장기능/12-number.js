/*숫자 처리와 관련된 기본 기능들을 제공하는 내장 클래스
parseFloat, parseInt와 비슷한 기능*/

let a= new Number(123);
//숫자를 말그대로 객체로 만든것
console.log(a);
console.log(typeof a);
console.log(a== 123);
console.log(a=== 123);

//Number() 함수를 통해 반환받는 값은 객체x,일반 숫자임
let b= Number('123');       //b=== 123 =>true
/*  ''를 벗겨줌,
     실수,정수 가리지않고 다 변환
    정수는 정수,실수는 실수로 변환*/
console.log(b);
console.log(typeof b);
console.log(b=== 123);
//parseFloat 는 123.0으로 변환


//정적 속성

//표현가능한 가장 큰 양수
console.log(Number.MAX_VALUE);

//표현가능한 가장 작은 양수(0보다 크지만 0에 가장 가까운 양수)
console.log(Number.MIN_VALUE);

//'숫자가 아님'을 나타내는 특별한 값
console.log(Number.NaN);
console.log(isNaN(Number.NaN));

//정적 메서드

/*주어진값 NaN인지 확인(isNaN과 동일)
=숫자변환 불가능=true, 가능=false
*/
console.log(Number.isNaN('123'));

//주어진값 정수인지 확인
console.log(Number.isInteger('123'));   //=>문자열
console.log(Number.isInteger(123));

//내장함수 parseFloat(),앞서 소개한 Number() 함수와 동일
console.log(Number.parseFloat('123'));

//내장함수 parsInt()와 동일
console.log(Number.parseInt('123'));


//같은내용의 기능이여도 number쓰는게 좋다