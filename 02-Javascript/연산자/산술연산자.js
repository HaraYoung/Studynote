//사칙 연산

const a = 9;
const b = 5;
console.log(a + b);  
console.log(a - b);
console.log(a * b);


//연산 결과값을 다른 변수에 할당

const x = 4;
const y = 6;
const z = x + y - 2;
console.log(z);


//일반적인 나눗셈

const sample1 = 10;
const sample2 = 4;
console.log(sample1 / sample2);


//나누어 떨어지지 않는 나눗셈

const sample3 =4;
const sample4 =3;
console.log(sample3 / sample4);


//문자열 끼리 덧셈(문장간에는 다른 연산자 불가)

const sample5 = "Hello"
const sample6 = "Se young"
console.log(sample5 + sample6);


//문자열+ 다른 타입->다른 타입은 모두 문자열로 자동 변환
//=>문자열 끼리의 덧셈과 동일한 결과 출력

console.log("안녕하세용" + 12);
console.log("안녕하세용" + true);
console.log("안녕하세용" + null);