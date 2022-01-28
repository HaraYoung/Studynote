const data = [10, 20, 30, 40, 50, 60]
/*총합을 구할때는 항.상.
 누적 합산을 수행할 변수를 '0'으로 초기화하고 반복수행!*/
let sum = 0;

//배열의 모든 원소에 대한 반복문 구성
for (let i = 0; i<data.length;i++) {
    //i번째 원소를 sum에 누적 합산
    sum += data[i];
}
console.log("data에 총합: %d", sum);

//평균 :: 총합을 원소의 길이로 나눈값

const avg = sum / data.length;
console.log("data의 평균 = %d", avg);
