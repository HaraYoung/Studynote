/*
수학적인 속성과 메서드를 가진 내장 객체
모든 기능이 정적 멤버변수와 정적 메서드 형태로 제공
=> 객체 생성을 하지 않고 클래스 이름으로 직접 접근
*/

//주어진 값중에 최대값 (파라미터 수 제한없음)
let max= Math.max(100, 20,399, 1000, 677);
console.log("최대값: "+ max);

//주어진 값중에 최소값 (파라미터 수 제한없음)
let min= Math.min(10, 59, 3);
console.log("최소값: "+min);

//소수점 반올림
let num1= 4.421;
console.log ("소수점 반올림: "+ Math.round(num1));

//소수점 올림
console.log ("소수점 올림: "+ Math.ceil(num1));

//소수점 내림
console.log ("소수점 내림: "+ Math.floor(num1));

//절대값 반환
let num2= -283;
console.log ("절대값: "+ Math.abs(num2));

//0~1범위의 난수 발생
console.log("난수: "+ Math.random());

//두 수 사이의 난수를 리턴하는 함수
function random(n1, n2){
    return parseInt(Math.random()* (n2- n1+ 1))+ n1;}
//결과 확인
let rnd= random(0, 9);
console.log("0~9사이의 난수: "+ rnd);

//응용- 5자리의 인증번호 생성
let auth= "";
for (let i=0;i<5; i++){
    auth+= random(0, 9);
    //문자열+= 문자열
}
console.log("인증번호: "+ auth);