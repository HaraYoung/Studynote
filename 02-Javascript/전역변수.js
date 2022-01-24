"use strict"
//전역 변수

//선언
var myNumber1;

//할당
myNumber1 = 100;
console.log(myNumber1);

//선언과 할당 통합
var myNumber2 = 123;
console.log(myNumber2);

//변수값 변경 : 한번 만들어진 변수는 다른값 교체 가능

myNumber2 = 456;
console.log(myNumber2);

/*변수 재선언
    JS의 전역변수만 재선언 가능
    일반적인 프로그래밍 언어 규칙 위배*/
var myNumber3 = 300;
console.log(myNumber3);

//동일한 변수 재선언
var myNumber3 = 789;
console.log(myNumber3);
