//pareInt(value, int)
/*
* 첫번째 파라미터값(value)를 10진수 정수값으로 변환
    변환x => NaN
* 두번째 파라미터값(int)는 value가 어떤 진법인지 알려주는 값
    기본값 = 10
* 문자열 선행 공백은 무시
* 숫자+ 문자 => 숫자 부분만 취함
* 문자+ 숫자 => 변환 불가. NaN
* 소수점을 포함하는 경우 => 정수부분만 취함
*/
/* 
10진법: 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16
16진법: 0  1  2  3  4  5  6  7  8  9  A   B   C   D   E   F   10  
8 진법: 0  1  2  3  4  5  6  7  10 11 12  13 14  15  16  17   20
*/

//15로 변환되는 예제들
console.log(parseInt(' 0xF',16));
console.log(parseInt(' F',16));
console.log(parseInt('17',8));
console.log(parseInt('015',10));
console.log(parseInt(15.99,10));
console.log(parseInt('15,123',10));
console.log(parseInt('FXX123',16));
console.log(parseInt('1111',2));
console.log(parseInt('15*3',10));
console.log(parseInt('15e2',10));
console.log(parseInt('15px',10));

//-15를 반환하는 예제들
console.log(parseInt('-F',16));
console.log(parseInt('-0F',16));
console.log(parseInt('-0xF',16));
console.log(parseInt(-15.1,10));
console.log(parseInt(' -17',8));
console.log(parseInt('-15',10));
console.log(parseInt('-1111',2));

//NaN반환
console.log(parseInt('Hello',8));

