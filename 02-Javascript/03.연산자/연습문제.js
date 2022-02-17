/*문제1

현재 년도에 대한 값을 상수로 생성

자신의 나이를 연산 후 이름의 지역변수에 할당

이스케이프 문자를 활용하여 출력=%d
*/

//const year = 2022;

//let age = year - 1995 +1;
//console.log("나는 %d세 입니다.", age);

/*문제2 

자신의 나이를 의미하는 상수 정의

태어난 연도를 전역 변수 형식으로 산출
(나이-1)

이스케이프 문자를 활용해 출력

const age =28;
let year = 2022 - (age -1);

console.log("나는 %d년도에 태어났습니다.", year);
*/

/*문제3

10개씩 담을수 있다.
10개 미만은 바구니 추가사용
=>120개 =12개바구니
121~130개 =13개

사과의 수를 의미하는 변수 정의
10+1=바구니갯수
*/
const numOfApples = 123;
//10으로 나눈 나머지를 소수점값으로 환산
const extra = (numOfApples % 10)
console.log(extra);
// 10 ;
let basketCount =extra > 0 ?(numOfApples /10)-extra +1 :(numOfApples/10)- extra;
//Slet basktCont = 

/*let apples = 10.0;
let ba = numOfApples / apples ;

const type1 = ba > 12.3 ? 12 : 13
console.log(type1);
*/
//문제4

/*let num1 =123;
let num2 =456;

num1= 100;
num2= 400;
console.log(num1);
console.log(num2);
*/


