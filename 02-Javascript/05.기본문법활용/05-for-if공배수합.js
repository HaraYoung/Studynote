//공배수 구하기
/*어떤수 i가 x로 나누어도 나머지가 0이고 y로 나눠도 0 
=>x와 y의 공배수*/

//1부터 100까지의 범위안에서 3과 5의 공배수를 모두 출력
//공배수의 총합 sum값 구하시오

const x = 3;
const y = 5;
//공배수의 총합을 저장할 변수!
let sum = 0;

for (let i = 1; i <101; i++) {
    if(i % x == 0 && i %y == 0) {
        console.log(i);
        sum +=i;
    }
}

console.log("%d와 %d의 공배수의 합 : %d", x, y, sum);

