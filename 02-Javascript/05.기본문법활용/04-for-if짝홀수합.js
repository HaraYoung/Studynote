let oddSum = 0; //홀수의 합
let evenSum = 0;  //짝수의 합

//i가 1~10까지 1씩 증가하는 동안 반복
for (let i=1; i<11; i++){
    if (i % 2 == 0) {
        console.log("%d(은)는 짝수", i);
        evenSum +=i;
    } else {
        console.log("%d(은)는 홀수", i);
        oddSum +=i;
    }
}

console.log("1~10까지 홀수들의 합" + oddSum);
console.log("1~10까지 짝수들의 합" + evenSum);